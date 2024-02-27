/**
 * Module to process all server-side routes
 * @param {1} app : app is the initialize express 
 */
const AuthenticationController = require('./controller/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')

module.exports = (app) => {
    app.post('/register', AuthenticationPolicy.register, AuthenticationController.register)
}