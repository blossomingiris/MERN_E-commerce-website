const express = require('express')
const router = express.Router()
const getUsers = require('../../../server/controllers/userController')

router.get('/', getUsers)

module.exports = router
