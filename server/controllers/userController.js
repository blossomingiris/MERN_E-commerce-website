const User = require('../models/UserModel')
const { hashedPassword, comparePasswords } = require('../utils/hashedPassword')
const generateAuthToken = require('../utils/generateAuth')

/*users actions:
- register new user
- login user 
- get user profile information
- update user profile */

//user registration
const registerUser = async (req, res, next) => {
  try {
    const { name, lastName, email, password } = req.body
    if (!(name && lastName && email && password)) {
      return res.status(400).send('All inputs are required')
    }

    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(400).send('user exists')
    } else {
      const hashPassword = hashedPassword(password)
      const user = await User.create({
        name,
        lastName,
        email: email.toLowerCase(),
        password: hashPassword,
      })
      res
        .cookie(
          'access_token',
          //when user register create jwt
          generateAuthToken(
            user._id,
            user.name,
            user.lastName,
            user.email,
            user.isAdmin
          ),
          {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
          }
        )
        .status(201)
        .json({
          success: 'User created',
          userCreated: {
            _id: user._id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
          },
        })
    }
  } catch (err) {
    next(err)
  }
}

//login user
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body
    if (!(email && password)) {
      return res.status(400).send('All inputs are required')
    }
    const user = await User.findOne({ email })

    //compare passwords
    if (user && comparePasswords(password, user.password)) {
      let cookieParams = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      }

      return (
        res
          //when user successfully login create cookie 'access_token' to check if user have access to to given resource or not
          .cookie(
            'access_token',
            generateAuthToken(
              user._id,
              user.name,
              user.lastName,
              user.email,
              user.isAdmin
            ),
            cookieParams
          )
          .json({
            success: 'user logged in',
            userLoggedIn: {
              _id: user._id,
              name: user.name,
              lastName: user.lastName,
              email: user.email,
              isAdmin: user.isAdmin,
            },
          })
      )
    } else {
      return res.status(401).send('email or password is incorrect')
    }
  } catch (err) {
    next(err)
  }
}

//updated user profile with additional information (address, city, country, etc)
const updateUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).orFail()
    user.name = req.body.name || user.name
    user.lastName = req.body.lastName || user.lastName
    user.email = req.body.email || user.email
    user.phoneNumber = req.body.phoneNumber
    user.address = req.body.address
    user.country = req.body.country
    user.postcode = req.body.postcode
    user.city = req.body.city
    user.state = req.body.state
    await user.save()
    res.json({
      success: 'user updated',
      userUpdated: {
        _id: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    })
  } catch (err) {
    next(err)
  }
}

//get user profile
const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password').orFail()
    return res.send(user)
  } catch (err) {
    next(err)
  }
}

/*admins actions:
- get all users
- get single user
- update user profile with admin/user role
- delete user from admin dashboard */

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select('-password')
    return res.json(users)
  } catch (err) {
    next(err)
  }
}

//get single user for admin dashboard
const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password').orFail()
    return res.send(user)
  } catch (err) {
    next(err)
  }
}

//update single user in admin dashboard
const updateUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).orFail()
    user.name = req.body.name || user.name
    user.lastName = req.body.lastName || user.lastName
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin
    await user.save()
    res.json({
      success: 'user updated',
      userUpdated: {
        _id: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    })
  } catch (err) {
    next(err)
  }
}

//delete user from admin dashboard
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).orFail()
    await user.remove()
    res.send('user deleted')
  } catch (err) {
    next(err)
  }
}
module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
  updateUserProfile,
  getUserProfile,
}
