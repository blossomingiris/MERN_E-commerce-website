const Product = require('../models/ProductModel')

const getProducts = (req, res) => {
  res.send('Handling product routes')
}

module.exports = getProducts
