const express = require('express')

module.exports = function(server) {
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //Person Route
    const personServive = require('../api/person/personService')
    personServive.register(router, '/people')    
}