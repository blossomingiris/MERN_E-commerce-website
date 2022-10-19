const express = require('express')
const router = express.Router()
const {
  getCategories,
  createNewCategory,
  deleteCategory,
  addAttributes,
} = require('../../../server/controllers/categoryController')

//get categories
router.get('/', getCategories)

//create new category
router.post('/', createNewCategory)

//delete category
router.delete('/:category', deleteCategory)

//add attributes to particular category
router.post('/attributes', addAttributes)


module.exports = router
