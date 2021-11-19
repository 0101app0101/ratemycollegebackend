const express = require('express')
const router = express.Router()
const State = require('../model/state')

router.get('/names', async (req,res) => {
    try{
 
     const states = await State.find()
     res.json(states).status(200)
 
    }catch (e){
     res.status(500).json({errormsg:e})
    }
 })


module.exports = router