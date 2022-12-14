const Category = require('.././models/CategoryModel')

// fetching all categories from db and sorting them in ascending order
// if there is no category in db (orFail() method) than throw an error
const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({}).sort({ name: 'desc' }).orFail()
    res.json(categories)
  } catch (err) {
    next(err)
  }
}

const createNewCategory = async (req, res, next) => {
  try {
    const { category } = req.body
    if (!category) {
      res.status(400).send('Category is invalid')
    }
    const categoryExists = await Category.findOne({ name: category })
    if (categoryExists) {
      res.status(400).send('Category is already exists')
    } else {
      const newCategory = await Category.create({ name: category })
      //201 - the request has been fulfilled and resulted in a new category being created
      res.status(201).send({ newCategory: newCategory })
    }
  } catch (err) {
    next(err)
  }
}

const deleteCategory = async (req, res, next) => {
  try {
    if (req.params.category !== 'Choose category') {
      categoryExists = await Category.findOne({
        name: decodeURIComponent(req.params.category),
      }).orFail()
      await categoryExists.remove()
      res.json({ categoryDeleted: true })
    }
  } catch (err) {
    next(err)
  }
}

//saving attributes for particular category
const addAttributes = async (req, res, next) => {
  const { key, val, categoryChoosen } = req.body
  if (!key || !val || !categoryChoosen) {
    return res.status(400).send('All inputs are required')
  }
  try {
    const category = categoryChoosen.split('/')[0]
    const categoryExists = await Category.findOne({ name: category }).orFail()
    if (categoryExists.attrs.length > 0) {
      // if key exists in the database then add a value to the key
      var keyDoesNotExistsInDatabase = true
      categoryExists.attrs.map((item, idx) => {
        if (item.key === key) {
          keyDoesNotExistsInDatabase = false
          let copyAttributeValues = [...categoryExists.attrs[idx].value]
          copyAttributeValues.push(val)
          let newAttributeValues = [...new Set(copyAttributeValues)] // Set ensures unique values
          categoryExists.attrs[idx].value = newAttributeValues
        }
      })

      if (keyDoesNotExistsInDatabase) {
        categoryExists.attrs.push({ key: key, value: [val] })
      }
    } else {
      // push to the array
      categoryExists.attrs.push({ key: key, value: [val] })
    }
    await categoryExists.save()
    let cat = await Category.find({}).sort({ name: 'asc' })
    return res.status(201).json({ categoriesUpdated: cat })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getCategories,
  createNewCategory,
  deleteCategory,
  addAttributes,
}
