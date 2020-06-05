const mongoose = require ('mongoose')

const Scheema = mongoose.Schema
const userSchema = new Scheema({

    email: String,
    password: String
})
module.exports = mongoose.model('user', userSchema, 'People')