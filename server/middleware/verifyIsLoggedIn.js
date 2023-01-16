//middleware to check access to resource (if access token exists or not)
const jwt = require('jsonwebtoken')
const verifyIsLoggedIn = (req, res, next) => {
  try {
    const token = req.cookies.access_token
    if (!token) {
      //403 error - user trying to access the resource that requires authentication (token wasn't provided)
      return res.status(403).send('A token is required for authentication')
    }
    try {
      //decode user data token
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
      req.user = decoded
      next()
    } catch (err) {
      //401 error - user request has not been applied because it lacks valid authentication credentials for the page
      return res.status(401).send('Unauthorized. Invalid Token')
    }
  } catch (err) {
    next(err)
  }
}

module.exports = { verifyIsLoggedIn }
