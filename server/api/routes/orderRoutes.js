const express = require('express')
const router = express.Router()
const getUserOrders = require('../../../server/controllers/orderController')

router.get('/', getUserOrders)

module.exports = router
