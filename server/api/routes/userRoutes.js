const express = require('express')
const router = express.Router()

const { verifyIsAdmin } = require('../../middleware/verifyIsAdmin')
const { verifyIsLoggedIn } = require('../../middleware/verifyIsLoggedIn')

const {
  registerUser,
  loginUser,
  updateUser,
  updateUserProfile,
  getUserProfile,
  getUsers,
  getUser,
  deleteUser,
} = require('../../../server/controllers/userController')

//new user register route
router.post('/register', registerUser)

//user logged in route
router.post('/login', loginUser)

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('http://localhost:3000/users/login')
})

// user profile info route
router.use(verifyIsLoggedIn)
router.put('/profile', updateUserProfile)
//get user profile with added info
router.get('/profile/:id', getUserProfile)

//admin routes
router.use(verifyIsLoggedIn)
router.use(verifyIsAdmin)
router.get('/', getUsers)
router.delete('/:id', deleteUser)
router.get('/:id', getUser)
router.put('/:id', updateUser)

module.exports = router
