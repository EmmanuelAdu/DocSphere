/**
 * Process all connections to port and database
 * database: name of database
 * user: name of user connecting to database
 * password: password of user for connecting to database
 */
module.exports = {
  port: process.env.PORT || 8081,
  db: {
    DATABASE: process.env.DB_NAME || 'tabtracker',
    USER: process.env.DB_USER || 'renzo_i',
    PASSWORD: process.env.DB_PASS || 'password',
    OPTIONS: {
      dialect: 'mysql',
      POST: process.env.DB_HOST || 'localhost',
      PORT: process.env.DB_PORT || 3306
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
console.log("JWT Secret Exported:", module.exports.authentication.jwtSecret);
