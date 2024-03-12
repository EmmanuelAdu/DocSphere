/**
 * module function that defines sequelize object `User` with corresponding datatypes
 * for its attributes
 */
const Promise = require('bluebird') // bluebird for calling promises
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

// Function to hash password
function hashPassword(newUser) {
  const SALT_FACTOR = 8;

  if (!newUser.changed('password')) {
    return;
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(newUser.password, salt, null))
    .then(hash => {
      newUser.setDataValue('password', hash);
    });
}
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      //beforeCreate: hashPassword,
      //beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  }
  )
  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }
  return User
}