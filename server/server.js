const express = require('express')
const app = express()
require('dotenv').config()

const apiRoutes = require('./api/apiRoutes')

app.get('/', (req, res) => {
  res.json({ message: 'API running..' })
})

//MongoDB connection

const connectDB = require('./config/db')
connectDB()

//middleware to handle errors in console

app.use((error, req, res, next) => {
  console.error(error)
  next(error)
})

//middleware to handle errors in browser
app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message, stack: error.stack })
})

//middleware to handle json data
app.use(express.json())

app.use('/api', apiRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log('Backend server is running')
})
