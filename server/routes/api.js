const express = require('express')
const router = express.Router()
const User = require('../models/user')
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

router.post('/register', (req, res) => {
    let userData = req.body
    let user = User(userData)
    user.save((error, registerdUser) => {

        if (error){
            console.log(error)
        }
        else{
            res.status(200).send(registerdUser)
        }
        
    })
})

router.post('/fetch', (req, res) => {
    let userData = req.body
    User.findOne({email: userData.email}, (err, user) => {
      if (err) {
        console.log(err)    
      } else {
        if (!user) {
          res.status(401).send('Invalid Email')
        } else 
        if ( user.password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
        
          res.status(200).send(user)
         
        }
      }
    })
  })

module.exports = router