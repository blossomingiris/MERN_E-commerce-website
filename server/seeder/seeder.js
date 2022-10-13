//*seeder.js runs manually in console with command 'node seeder/seeder.js'
// inserting seeder data (initial data) into DB

const connectDB = require('../config/db')
connectDB()

const categoryData = require('./categories')
const reviewsData = require('./reviews')
const usersData = require('./users')
const ordersData = require('./orders')

const Category = require('../models/CategoryModel')
const Review = require('../models/ReviewModel')
const User = require('../models/UserModel')
const Order = require('../models/OrderModel')

const importData = async () => {
  try {
    //clean category data to avoid growing db
    await Category.collection.deleteMany({})
    await Review.collection.deleteMany({})
    await User.collection.deleteMany({})
    await Order.collection.deleteMany({})

    //add new product category data to db
    await Category.insertMany(categoryData)
    //add user review data to db
    const reviews = await Review.insertMany(reviewsData)
    //modify products collection by add users reviews to each product
    // const sampleProducts = productData.map((product) => {
    //   reviews.map((review) => {
    //     product.review.push(review._id)
    //   })
    //   return { ...product }
    // })
    // await Product.insertMany(sampleProducts)

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
