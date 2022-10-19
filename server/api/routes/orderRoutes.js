const express = require('express')
const router = express.Router()
const getOrders = require('../../../server/controllers/orderController')

router.get('/', getOrders)

module.exports = router
