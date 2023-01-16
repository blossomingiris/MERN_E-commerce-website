const express = require('express')
const router = express.Router()
const {
  getProducts,
  getProductById,
  getBestsellers,
  getProductsForAdmin,
  deleteProduct,
} = require('../../../server/controllers/productController')

const { verifyIsAdmin } = require('../../middleware/verifyIsAdmin')
const { verifyIsLoggedIn } = require('../../middleware/verifyIsLoggedIn')

//get products from specific category
router.get('/category/:categoryName', getProducts)

//query for searching products through search box from particular category of products
router.get('category/:categoryName/search/:searchQuery', getProducts)

//query for searching products through search box from all categories of products
router.get('/search/:searchQuery', getProducts)

//get product details
router.get('/get-one/:id', getProductById)

//get popular products (best selling products)
router.get('/popular', getBestsellers)

//get all products for products page
router.get('/', getProducts)

//get all products for admin products dashboard
router.use(verifyIsLoggedIn)
router.use(verifyIsAdmin)
router.get('/admin', getProductsForAdmin)

//delete single product from admin products dashboard
router.delete('/admin/delete-one/:id', deleteProduct)

module.exports = router
