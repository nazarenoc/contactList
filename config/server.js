const port = process.env.PORT || 5001

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const AllowCors = require('./cors')
const morgan = require('morgan')
const config = require('./database')

server.use( bodyParser.json({limit: '50mb'}) );
server.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit:50000
}));

server.use(AllowCors)

server.use(morgan('dev'))

server.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api')
})

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server