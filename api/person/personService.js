const _ = require('lodash')
const Person = require('./person')

Person.methods(['get', 'post', 'put', 'delete'])
Person.updateOptions({ new: true, runValidators: true })

Person.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle

    if (bundle.errors) {
        var errors = parserErrors(bundle.errors)
        res.status(500).json({errors}) 
    } else {
        next()
    }
}

function parserErrors(nodeRestfulErrors) {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

Person.route('count', function(req, res, next) {
    Person.count(function(error, value) {
        if (error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = Person