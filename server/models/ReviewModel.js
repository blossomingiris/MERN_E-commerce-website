const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    user: {
      _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      username: { type: String, require: true },
    },
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model('Review', reviewSchema)
module.exports = Review
