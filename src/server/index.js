const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/temanteman', function (req, res) {
    console.log('getting the db')
  db.getTeman()
    .then(teman => {  
        console.log("I have the data! " + teman)
        res.json(teman)
    })
})



module.exports = router