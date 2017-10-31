const mongoose = require('mongoose')
mongoose.Promise = global.Promise

var options = {
    server: {
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 300000
        },
        replset: {
            socketOptions: {
                keepAlive: 300000,
                connectTimeoutMS: 300000
            }
        }
    }
}

var mongodbUri = 'mongodb://bravi:bravi123@ds141175.mlab.com:41175/bravi-test'

module.exports = mongoose.connect(mongodbUri, options)