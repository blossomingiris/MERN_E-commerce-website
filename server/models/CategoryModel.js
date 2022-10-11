const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  name: { type: String, required, unique: true },
  description: { type: String, default: 'default category description' },
  image: { type: String, default: '/assets/beauty-category.png' },
  attrs: [{ key: { type: String }, value: [{ type: String }] }],
})

categorySchema.index({ description: 1 })

const Category = mongoose.model('Category', categorySchema)
module.export = Category
