//*seeder.js runs manually in console with command 'node seeder/seeder'
// inserting seeder data (initial data) into DB

const connectDB = require('../config/db')
connectDB()

const categoryData = require('./categories')
const reviewsData = require('./reviews')
const usersData = require('./users')
const ordersData = require('./orders')
const productsData = require('./products')

const Category = require('../models/CategoryModel')
const Product = require('../models/ProductModel')
const Review = require('../models/ReviewModel')
const User = require('../models/UserModel')
const Order = require('../models/OrderModel')

const importData = async () => {
  try {
    //clean db collections to avoid data duplication
    await Category.collection.deleteMany({})
    await Product.collection.deleteMany({})
    await Review.collection.deleteMany({})
    await User.collection.deleteMany({})
    await Order.collection.deleteMany({})

    //add new product category data to db
    await Category.insertMany(categoryData)

    //add user review data to db
    const reviews = await Review.insertMany(reviewsData)

    //1. add particular review id to each product in products collection
    //TODO: for reference
    const sampleProducts = productsData.map((product) => {
      reviews.map((review) => {
        product.reviews.push(review._id)
      })
      //add modify product to array of products
      return { ...product }
    })

    //2. add products data to db
    await Product.insertMany(sampleProducts)

    //add users data to db
    await User.insertMany(usersData)

    //add orders data to db
    await Order.insertMany(ordersData)

    console.log('Data was proceeded to DB successfully')

    //terminate process when no more async operations are happening
    process.exit()
  } catch (error) {
    console.error(`Error while proceeding data: ${error.message}`)
    //Exit code 1 is for when unhandled fatal exceptions occur that was not handled by the domain
    process.exit(1)
  }
}

importData()
