const Product = require('.././models/ProductModel')
const productsPerPage = require('../config/pagination')

//get all products from db
const getProducts = async (req, res, next) => {
  try {
    //filter products
    let query = {}

    //filter products by price
    let priceQueryCondition = {}
    let queryCondition = false

    if (req.query.price) {
      queryCondition = true
      // query returns products with price is less than or equal to price that was selected by user
      priceQueryCondition = { price: { $lte: Number(req.query.price) } }
    }

    //filter products by availability (in stock)
    let availabilityQueryCondition = {}
    if (req.query.count) {
      queryCondition = true
      availabilityQueryCondition = { count: { $not: { $eq: 0 } } }
    }

    //search category name in search bar
    let categoryQueryCondition = {}
    const categoryName = req.params.categoryName || ''
    if (categoryName) {
      queryCondition = true
      let a = categoryName.replaceAll(',', '/')
      var regEx = new RegExp('^' + a)
      categoryQueryCondition = { category: regEx }
    }
    if (req.query.category) {
      queryCondition = true
      let a = req.query.category.split(',').map((item) => {
        if (item) return new RegExp('^' + item)
      })
      categoryQueryCondition = {
        category: { $in: a },
      }
    }

    //filter products by attributes
    let attrsQueryCondition = []
    if (req.query.attrs) {
      // attrs=notes-woody-fruity-green
      attrsQueryCondition = req.query.attrs.split(',').reduce((acc, item) => {
        if (item) {
          let a = item.split('-')
          let values = [...a]
          values.shift() // removes first item - notes
          let a1 = {
            attrs: { $elemMatch: { key: a[0], value: { $in: values } } },
          }
          acc.push(a1)
          // console.dir(acc, { depth: null })
          return acc
        } else return acc
      }, [])
      //   console.dir(attrsQueryCondition, { depth: null });
      queryCondition = true
    }

    //query for searching product through search box
    const searchQuery = req.params.searchQuery || ''
    let searchQueryCondition = {}

    if (searchQuery) {
      queryCondition = true
      //case insensitive query search
      searchQueryCondition = { $text: { $search: searchQuery } }
    }

    if (queryCondition) {
      query = {
        $and: [
          priceQueryCondition,
          categoryQueryCondition,
          availabilityQueryCondition,
          searchQueryCondition,
          ...attrsQueryCondition,
        ],
      }
    }

    //pagination
    const pageNumber = Number(req.query.pageNumber) || 1

    //sorting products by name, price, popularity (most selling)
    let sort = {}
    const sortOption = req.query.sort || ''
    if (sortOption) {
      //in client side sort option consists _
      //so split option into two pairs array, for example [price, -1]
      let sortOpt = sortOption.split('_')
      //create an object where key is first element from array, and value is second element of array
      //[sortOpt] is not array is it an object with dynamic key
      sort = { [sortOpt[0]]: Number(sortOpt[1]) }
    }

    //total number of products in db
    const totalProducts = await Product.countDocuments(query)

    //products in stock
    // const productsInStock = await Product.countDocuments(query, {
    //   count: { $not: { $eq: 0 } },
    // })

    // const productsInStock = await Product.aggregate([
    //   { $match: query },
    //   { $group: { count: { $not: { $eq: 0 } } } },
    // ])

    //products in stock
    const productsInStock = await Product.countDocuments({
      count: { $not: { $eq: 0 } },
    })

    //get products from db based on query parameters
    const products = await Product.find(query)

      //pagination: in 1st pages display 8 first products from db, on the second page shows next 8 products
      .skip(productsPerPage * (pageNumber - 1))
      .sort(sort)

      // limits products appear per page for pagination
      .limit(productsPerPage)

    res.json({
      products,
      pageNumber,
      totalProducts,
      productsInStock,
      //represents how many pages (links) will be displaying in pagination
      paginationLinksNumber: Math.ceil(totalProducts / productsPerPage),
    })
  } catch (err) {
    next(err)
  }
}

//get product details

const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).sort('-1').orFail()
    res.json(product)
  } catch (err) {
    next(err)
  }
}

//get popular products (best selling products) for homepage
const getBestsellers = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ sales: -1 }).limit(7)
    res.json(products)
  } catch (err) {
    next(err)
  }
}

//get products for admin dashboard
const getProductsForAdmin = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ name: 'asc' }).orFail()
    const totalProducts = await Product.countDocuments()
    return res.json({ products, totalProducts })
  } catch (err) {
    next(err)
  }
}

//delete user in admin dashboard
const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).orFail()
    await product.remove()
    res.send('product deleted')
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getProducts,
  getProductById,
  getBestsellers,
  getProductsForAdmin,
  deleteProduct,
}
