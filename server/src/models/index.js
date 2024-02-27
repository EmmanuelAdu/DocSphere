/**
 * This index.js file is responsible for connecting the database
 * to the models objects i.e (User, Doctor)
 */
const fs = require('fs') // fs: file system to access all files in node
const path = require('path') // path: relative and absolute path to 
const config = require('../config/config') // connects to the DB
const Sequelize = require('sequelize') 
const db = {} // Responsible for storing and exporting all objects

// Connecting to db
const sequelize = new Sequelize(config.db.DATABASE, config.db.USER, config.db.PASSWORD, config.db.OPTIONS)
// function to return name of model either user.js
fs.readdirSync(__dirname)
  .filter(file => file !== "index.js")
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes) // passing sequelize(db connection and Sequelize DataTypes to the Model Objects)
    db[model.name] = model // registering models within the db object
  })

db.sequelize = sequelize // Make all db objects connect to db
db.Sequelize = Sequelize // Make all db objects make changes to db
module.exports = db // exports db objects
