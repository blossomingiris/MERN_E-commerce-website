const connectDB = require('../config/db')

connectDB()

const categoryData = require('./categories')

const Category = require('../models/CategoryModel')

const importData = async () => {
  try {
    //clean category data
    await Category.collection.deleteMany({})
    //add new category data
    await Category.insertMany(categoryData)
    console.log('Data proceeded to DB successfully')
    process.exit()
  } catch (error) {
    console.error('Error while proceeding data')
    process.exit(1)
  }
}

importData()
