const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    address: { type: String },
    country: { type: String },
    city: { type: String },
    zipcode: { type: String },
    isAdmin: {
      type: Boolean,
      rrequired: true,
      default: false,
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)
module.exports = User
