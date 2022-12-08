//dummy data for orders

const ObjectId = require('mongodb').ObjectId

//creating array of orders with dynamic data based on index
const orders = Array.from({ length: 10 }).map((_, index) => {
  let day = 20
  if (index < 10) {
    var hour = '0' + index
    var subtotal = 100
  } else if (index > 16 && index < 21) {
    var hour = index
    var subtotal = 100 + 12 * index
  } else {
    var hour = index
    var subtotal = 100
  }
  return {
    user: ObjectId('6383454fd25d0d6b9c87159b'),
    orderTotal: {
      itemsCount: 3,
      cartSubtotal: subtotal,
    },
    cartItems: [
      {
        name: 'Product name',
        price: 34,
        image: { path: '/images/perfume.png' },
        quantity: 30,
        count: 5,
      },
    ],
    paymentMethod: 'Credit card',
    isPaid: false,
    isDelivered: false,
    createdAt: `2022-10-${day}T${hour}:12:36.490+00:00`,
  }
})

module.exports = orders
