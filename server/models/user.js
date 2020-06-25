const mongoose = require ('mongoose')

const Scheema = mongoose.Schema
const userSchema = new Scheema({

    name: String,
    email: String,
    mobile: String
})
module.exports = mongoose.model('user', userSchema, 'People')