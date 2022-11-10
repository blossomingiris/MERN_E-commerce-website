const express = require('express')
const passport = require('passport')
const router = express.Router()

const { verifyIsAdmin } = require('../../middleware/verifyIsAdmin')
const { verifyIsLoggedIn } = require('../../middleware/verifyIsLoggedIn')

const {
  registerUser,
  loginUser,
  // loginUserGoogleSuccess,
  // loginUserGoogleFail,
  updateUserProfile,
  getUserProfile,
  getUsers,
} = require('../../../server/controllers/userController')

//user register route
router.post('/register', registerUser)

//user logged in route
router.post('/login', loginUser)

//user logged in with google routes

// router.get('/login/success', loginUserGoogleSuccess)

// router.get('/login/success', loginUserGoogleFail)

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('http://localhost:3000/users/login')
})

//TODO: google auth
// router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// router.get(
//   '/google/callback',
//   passport.authenticate('google', {
//     successRedirect: 'http://localhost:3000/',
//     failureRedirect: '/login/failed',
//   })
// )

// user profile info route
router.use(verifyIsLoggedIn)
router.put('/profile', updateUserProfile)

//get user profile with added info
router.get('/profile/:id', getUserProfile)

//admin routes
router.use(verifyIsAdmin)
router.get('/', getUsers)

module.exports = router