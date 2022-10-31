const GoogleStrategy = require('passport-google-oauth').Strategy
// var GoogleStrategy = require('passport-google-oidc')
const passport = require('passport')
const User = require('../models/UserModel')
require('dotenv').config()

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/api/users/google/callback',
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        let existsUser = await User.findOne({ 'google.id': profile.id })
        // if user exists return the user
        if (existsUser) {
          return done(null, existsUser)
        }
        // if user does not exist create a new user
        console.log('Creating new user...')
        const newUser = new User({
          method: 'google',
          google: {
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
          },
        })
        await newUser.save()
        return done(null, newUser)
      } catch (error) {
        return done(error, false)
      }
    }
  )
)

// const GoogleStrategy = require('passport-google-oauth20').Strategy
// const passport = require('passport')

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: 'http://localhost:5000/api/users/google/callback',
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile)
//     }
//   )
// )

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})
