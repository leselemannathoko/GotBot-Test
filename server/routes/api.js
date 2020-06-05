const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const db = "mongodb+srv://test:1234@cluster0-hdjuw.mongodb.net/Users?retryWrites=true&w=majority"

mongoose.connect(db, err => {

    if(err)
     {
         console.error('Error' + err); 
     }

    else{
        console.log('Connectect to MongoDB')
    }
})

router.get('/', (req, res) => {
    res.send('From API route')
})

module.exports = router