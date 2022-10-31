const express = require('express')
const app = express()

const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')

const jwt = require('jsonwebtoken')

//logout route, delete cookies when user/admin is logged out
app.get('/logout', (req, res) => {
  return res.clearCookie('access_token').send('access token was deleted')
})

//route to check token for login as user or admin
app.get('/get-token', (req, res) => {
  try {
    const accessToken = req.cookies['access_token']
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY)
    return res.json({ token: decoded.name, isAdmin: decoded.isAdmin })
  } catch (err) {
    return res.status(401).send('Unauthorized. Invalid token')
  }
})

app.use('/products', productRoutes)

app.use('/categories', categoryRoutes)

app.use('/users', userRoutes)

app.use('/orders', orderRoutes)

module.exports = app
