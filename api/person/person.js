const restful = require('node-restful')
const mongoose = restful.mongoose

const contactSchema = new mongoose.Schema({
    contactType: { type: String },
    desc: { type: String }
})

const personSchema = new mongoose.Schema({
    name: { type: String },    
    contacts: [contactSchema]
})

module.exports = restful.model('Person', personSchema)