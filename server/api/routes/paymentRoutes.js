const express = require('express')
const router = express.Router()

const { payForOrder } = require('../../../server/controllers/paymentController')

router.post('/create-checkout-session', payForOrder)

module.exports = router
