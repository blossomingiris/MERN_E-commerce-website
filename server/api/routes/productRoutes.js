const express = require('express')
const router = express.Router()
const {
  getProducts,
  getProductById,
  getBestsellers,
} = require('../../../server/controllers/productController')

const { verifyIsAdmin } = require('../../middleware/verifyIsAdmin')

//get products from specific category
router.get('/category/:categoryName', getProducts)

//query for searching products through search box from particular category of products
router.get('category/:categoryName/search/:searchQuery', getProducts)

//query for searching products through search box from all categories of products
router.get('/search/:searchQuery', getProducts)

//get product details

router.get('/:id', getProductById)

//get popular products (best selling products)
router.get('/best/selling', getBestsellers)

router.get('/', getProducts)

//check for admin or regular user

router.use(verifyIsAdmin)

module.exports = router
