const express = require('express')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const app = express()
require('dotenv').config()

const apiRoutes = require('./api/apiRoutes')

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

const path = require('path')
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.json({ message: 'API running...' })
  })
}

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
  console.log(`Backend server is running on port ${process.env.PORT}`)
})
