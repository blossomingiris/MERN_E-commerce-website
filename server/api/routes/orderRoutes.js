const express = require('express')
const router = express.Router()
const { verifyIsAdmin } = require('../../middleware/verifyIsAdmin')
const { verifyIsLoggedIn } = require('../../middleware/verifyIsLoggedIn')

const {
  getUserOrders,
  getOrderDetails,
  createOrder,
  updateOrderPaymentStatus,
  updateOrderToBeDelivered,
  getUsersOrdersForAdmin,
} = require('../../../server/controllers/orderController')

//user routes
router.use(verifyIsLoggedIn)
router.get('/', getUserOrders)
router.get('/user/:id', getOrderDetails)
router.post('/', createOrder)
router.put('/paid/:id', updateOrderPaymentStatus)

//admin routes
router.use(verifyIsAdmin)
router.put('/delivered/:id', updateOrderToBeDelivered)
router.get('/admin', getUsersOrdersForAdmin)
module.exports = router
