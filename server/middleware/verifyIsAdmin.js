//middleware to check user/admin access

const verifyIsAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    return res.status(401).send('Unauthorized. Admin required')
  }
}

module.exports = { verifyIsAdmin }
