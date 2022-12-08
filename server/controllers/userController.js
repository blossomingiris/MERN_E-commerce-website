const User = require('../models/UserModel')
const { hashedPassword, comparePasswords } = require('../utils/hashedPassword')
const generateAuthToken = require('../utils/generateAuth')

//get users for admin dashboard
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select('-password')
    return res.json(users)
  } catch (err) {
    next(err)
  }
}

//delete user in admin dashboard
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).orFail()
    await user.remove()
    res.send('user deleted')
  } catch (err) {
    next(err)
  }
}

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
          generateAuthToken(
            user._id,
            user.name,
            user.lastName,
            user.email,
            user.isAdmin
          ),
          {
            httpOnly: true,
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

      return res
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
    } else {
      return res.status(401).send('email or password is incorrect')
    }
  } catch (err) {
    next(err)
  }
}

// const loginUserGoogleSuccess = (req, res, next) => {
//   try {
//     if (req.user) {
//       res.status(200).json({
//         success: true,
//         message: 'login success',
//         user: req.user,
//         //   cookies: req.cookies
//       })
//     }
//   } catch (err) {
//     next(err)
//   }
// }

// const loginUserGoogleFail = (req, res, next) => {
//   try {
//     res.status(401).json({
//       success: false,
//       message: 'fail to logged in',
//     })
//   } catch (err) {
//     next(err)
//   }
// }

//updated user profile with additional information

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
    // if (req.body.password !== user.password) {
    //   user.password = hashedPassword(req.body.password)
    // }
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

const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).orFail()
    return res.send(user)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getUsers,
  deleteUser,
  registerUser,
  loginUser,
  // loginUserGoogleFail,
  // loginUserGoogleSuccess,
  updateUserProfile,
  getUserProfile,
}
