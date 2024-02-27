/**
 * Validates inputs before process for all register endpoints
 */
const Joi = require('joi')

// Define validation schema for email and password
const emailSchema = Joi.string().email().required()
const passwordSchema = Joi.string().min(6).required()

// Define custom error messages
const emailErrorMessage = 'Please enter a valid email address'
const passwordErrorMessage = 'Password must be at least 6 characters long'

module.exports = {
  register(req, res, next) {
    // Validate request body using Joi schemas
    const schema = Joi.object({
      email: emailSchema,
      password: passwordSchema
    })
    
    const { error } = schema.validate(req.body, { abortEarly: false }) // Abort early to show all errors
    if (error) {
      // If validation fails, construct custom error message
      const errorMessage = error.details.map(detail => {
        switch (detail.context.key) {
          case 'email':
            return emailErrorMessage
          case 'password':
            return passwordErrorMessage
          default:
            return detail.message
        }
      }).join('. ')
      
      return res.status(400).send({ error: errorMessage })
    }
    
    // If validation succeeds, call next middleware/controller
    next()
  }
}
