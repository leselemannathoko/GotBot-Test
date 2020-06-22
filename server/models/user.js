const mongoose = require ('mongoose')

const Scheema = mongoose.Schema
const userSchema = new Scheema({

    email: String,
    name: String,
    mobile: String
})
module.exports = mongoose.model('user', userSchema, 'People')