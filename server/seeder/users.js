//dummy data for users

const bcrypt = require('bcryptjs')
const ObjectId = require('mongodb').ObjectId

const users = [
  {
    name: 'admin',
    lastName: 'admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('admin@admin.com', 10),
    isAdmin: true,
  },
  {
    name: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    password: bcrypt.hashSync('john@doe.com', 10),
  },
  {
    _id: ObjectId('6383454fd25d0d6b9c87159b'),
    name: 'Jane',
    lastName: 'Doe',
    email: 'jane@doe.com',
    password: bcrypt.hashSync('jane@doe.com', 10),
  },
]

module.exports = users
