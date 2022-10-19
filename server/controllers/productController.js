const Product = require('.././models/ProductModel')
const productsPerPage = require('../config/pagination')

//get all products from db
const getProducts = async (req, res, next) => {
  try {
    const pageNumber = Number(req.query.pageNumber) || 1
    res.json({ pageNumber })
    const products = await Product.find({})
      .sort({ name: 'asc' })
      // limits products appear per page for pagination
      .limit(productsPerPage)
    res.json({ products })
  } catch (err) {
    next(err)
  }
}

module.exports = getProducts
