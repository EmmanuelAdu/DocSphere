/**
 * Module to process all server-side routes
 * @param {1} app : app is the initialize express 
 */
const AuthenticationController = require('./controller/AuthenticationController')

module.exports = (app) => {
    app.post('/register', AuthenticationController.register)
}