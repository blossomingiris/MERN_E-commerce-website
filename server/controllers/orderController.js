const Order = require('../models/OrderModel')
const Product = require('../models/ProductModel')
const ObjectId = require('mongodb').ObjectId

const getUserOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: ObjectId(req.user._id) })
    res.send(orders)
  } catch (error) {
    next(error)
  }
}

const getOrderDetails = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', '-password -isAdmin')
      .orFail()
    res.send(order)
  } catch (err) {
    next(err)
  }
}

const createOrder = async (req, res, next) => {
  try {
    const { cartItems, orderTotal, paymentMethod } = req.body
    if (!cartItems || !orderTotal || !paymentMethod) {
      return res.status(400).send('All fields are required')
    }

    let ids = cartItems.map((item) => {
      return item.productID
    })

    let qty = cartItems.map((item) => {
      return Number(item.quantity)
    })

    await Product.find({ _id: { $in: ids } }).then((products) => {
      products.forEach(function (product, idx) {
        product.sales += qty[idx]
        product.count -= qty[idx]
        product.save()
      })
    })

    const order = new Order({
      user: ObjectId(req.user._id),
      orderTotal: orderTotal,
      cartItems: cartItems,
      paymentMethod: paymentMethod,
    })
    const createdOrder = await order.save()
    res.status(201).send(createdOrder)
  } catch (err) {
    next(err)
  }
}

const updateOrderPaymentStatus = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).orFail()
    order.isPaid = true
    order.paidAt = Date.now()
    const updatedOrder = await order.save()
    res.send(updatedOrder)
  } catch (err) {
    next(err)
  }
}

const updatePaymentMethod = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).orFail()
    order.paymentMethod = req.body.paymentMethod
    const updatedOrder = await order.save()
    res.send(updatedOrder)
  } catch (err) {
    next(err)
  }
}

const updateOrderToBeDelivered = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).orFail()
    order.isDelivered = true
    order.deliveredAt = Date.now()
    const updatedOrder = await order.save()
    res.send(updatedOrder)
  } catch (err) {
    next(err)
  }
}

const getUsersOrdersForAdmin = async (req, res, next) => {
  try {
    const orders = await Order.find({}).populate('user', '-password').sort({
      paymentMethod: 'asc',
    })
    res.send(orders)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getUserOrders,
  getOrderDetails,
  createOrder,
  updateOrderPaymentStatus,
  updateOrderToBeDelivered,
  updatePaymentMethod,
  getUsersOrdersForAdmin,
}
