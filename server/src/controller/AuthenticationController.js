/**
 * Allows All route endpoints authentication
 */
const { User } = require('../models');

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
      const existingUser = await User.findOne({ where: { email: req.body.email } });
      if (!existingUser) {
        console.log('User was not found')
      }
      console.log("You have been login successfully")
    } catch (error) {
      console.error("Error registering user:", error); // Add this line to log the error
      res.status(500).send({ error: "An error occurred while registering the user" });
    }
  }
};
