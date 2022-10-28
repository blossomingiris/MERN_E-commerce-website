const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

const hashedPassword = (password) => bcrypt.hashSync(password, salt)

//compare passwords when user logging in
const comparePasswords = (inputPassword, hashPassword) =>
  bcrypt.compareSync(inputPassword, hashPassword)

module.exports = { hashedPassword, comparePasswords }
