const express    = require('express')
    , bodyParser = require('body-parser')
    , cors       = require('cors')
    , mongoose   = require('mongoose')
    , morgan     = require('morgan')
    , config     = require('./config/router')
    , app        = express()


app.use(morgan('combined'))
config(app)

app.listen(9000, () => {
  console.log('listening...on 9000')
})
