/**
 * module function that defines sequelize object `User` with corresponding datatypes
 * for its attributes
 */

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING
  })
  return User
}