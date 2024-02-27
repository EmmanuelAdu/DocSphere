/**
 * module to process all backend server-side logic using express.js
 */
const express = require('express') // server-side framework
const cors = require('cors') // permits communication across servers
const bodyParser = require('body-parser') // returns all data retrieved to right output
const morgan = require('morgan') 
const {sequelize} = require('./models')
const config = require('./config/config')

/**
 * Starting express server
 */
const app = express()
app.use(morgan('combined')) //Use morgan middleware for loggin HTTP Request
app.use(cors())
app.use(bodyParser.json()) // Passes all data to json format

const routes = require('./routes')
routes(app)

/* const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
*/
// logging path before syncing
// console.log('Storage directory:', config.db.options.storage);

// connecting port to sequelize db
sequelize.sync()
  .then(() => {
    app.listen(config.port || 8081)
    console.log(`Server has started on ${config.port}`)
  })
  .catch(error => {
    console.error('Sequelize sync error:', error);
  });

