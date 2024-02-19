console.log('Hello World')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())

app.post('/register', (req, res) => {
  res.send(`Hello ${req.body.email}! Welcome to my API`)
})

app.listen(process.env.PORT || 8081)
