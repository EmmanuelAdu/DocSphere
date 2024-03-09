/**
 * Allows All route endpoints authentication
 */
const { User } = require('../models');
const jwt = require('jsonwebtoken')
const config = require('../config/config')
// Generating a jsonwebtoken for authentication during signIn
function jwtSignUser(newUser) {
  //const oneWeek = 60 * 60 * 24 * 7
  const userPayload = {
    email: newUser.email,
    password: newUser.password
  };
  console.log(newUser)
  console.log("JWT Secret:", config.authentication.jwtSecret)
  return jwt.sign(userPayload, config.authentication.jwtSecret, { expiresIn: '1h'})
}

module.exports = {
  async register(req, res) {
    try {
      const existingUser = await User.findOne({ where: { email: req.body.email } });
      if (existingUser) {
        return res.status(400).send({ error: "This email is already in use" });
      }
      
      const newUser = await User.create({
        email: req.body.email,
        password: req.body.password
      });

      res.status(201).send({
        message: `User with email ${newUser.email} created successfully`
      });
    } catch (error) {
      console.error("Error registering user:", error); // Add this line to log the error
      res.status(500).send({ error: "An error occurred while registering the user" });
    }
  },

  async login(req, res) {
    try {
      const {email, password} = req.body
      const newUser = await User.findOne({ where: { email: email } });
      if (!newUser) {
        res.status(403).send({
          error: 'The login information is incorrect'
        })
      }
      // Checks to see if password matches
      const isPassword = await newUser.comparePassword(password)
      if (!isPassword) {
        res.status(403).send({
          error: 'The login information is incorrect. Password Mismatches'
        })
      }
      res.send({
        newUser: newUser.toJSON(),
        token: jwtSignUser(newUser.toJSON())
      })
      console.log("You have been login successfully")
    } catch (error) {
      res.status(500).send({ error: error});
      console.log(error)
    }
  }
};
