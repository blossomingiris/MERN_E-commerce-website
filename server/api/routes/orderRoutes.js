const express = require('express')
const router = express.Router()
const { verifyIsAdmin } = require('../../middleware/verifyIsAdmin')
const { verifyIsLoggedIn } = require('../../middleware/verifyIsLoggedIn')

const {
  getUserOrders,
  getOrderDetails,
  createOrder,
  updateOrderPaymentStatus,
  updatePaymentMethod,
  updateOrderToBeDelivered,
  getUsersOrdersForAdmin,
} = require('../../../server/controllers/orderController')

//user order routes
router.use(verifyIsLoggedIn)
router.get('/', getUserOrders)
router.get('/user/:id', getOrderDetails)
router.post('/create', createOrder)
router.put('/paid/:id', updateOrderPaymentStatus)
router.put('/payment/:id', updatePaymentMethod)
router.put('/delivered/:id', updateOrderToBeDelivered)

router.use(verifyIsAdmin)
router.get('/admin', getUsersOrdersForAdmin)
module.exports = router
