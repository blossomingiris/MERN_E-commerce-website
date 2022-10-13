const mongoose = require('mongoose')
const Review = require('./ReviewModel')

const imageSchema = mongoose.Schema({
  path: { type: String, required: true },
})

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    images: [imageSchema],
    category: { type: String, required: true },
    count: { type: Number, required: true },
    size: { type: Number, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    rewiewsNumber: { type: Number },
    sales: { type: Number, default: 0 },
    attrs: [{ key: { type: String }, value: { type: Array } }],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Review,
      },
    ],
  },
  { timestamps: true }
)

//query for user search based on name and description of the product
productSchema.index(
  { name: 'text', description: 'text' },
  { name: 'TextIndex' }
)

productSchema.index({ 'attrs.key': 1, 'attrs.value': 1 })

const Product = mongoose.model('Product', productSchema)
module.exports = Product
