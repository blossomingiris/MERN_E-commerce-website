const express = require('express')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
// const cors = require('cors')
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
  if (process.env.NODE_ENV === 'development') {
    console.error(error)
  }
  next(error)
})

//middleware to handle errors in browser
app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    res.status(500).json({ message: error.message, stack: error.stack })
  } else {
    res.status(500).json({
      message: error.message,
    })
  }
})

//middleware to read json data
app.use(express.json())

//middleware to handle cookies
app.use(cookieParser())

//for google auth
app.use(
  cookieSession({
    name: 'session',
    keys: ['Xenia'],
    maxAge: 24 * 60 * 60 * 100,
  })
)

//middleware for google login functionality
app.use(passport.initialize())
app.use(passport.session())

app.use('/api', apiRoutes)

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running')
})
