const express = require('express')
const consign = require('consign')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(morgan(':method :url :response-time'))
app.use(express.json())
app.use(cors())

consign()
  .include('config/mongodb.js')
  .then('app/controllers')
  .then('app/routes')
  .into(app)

module.exports = app