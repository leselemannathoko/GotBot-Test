const mongoose = require ('mongoose')

const Scheema = mongoose.Schema
const userSchema = new Scheema({

    name: String,
    email: String,
<<<<<<< HEAD
=======
    name: String,
>>>>>>> 56acb0b83b70ea787cfe85be16ab6a51b8f1a384
    mobile: String
})
module.exports = mongoose.model('user', userSchema, 'People')