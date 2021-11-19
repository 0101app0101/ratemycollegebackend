const express = require('express')
const router = express.Router()
const State = require('../model/state')
const College = require('../model/college')


router.get('/names', async (req,res) => {
    try{
 
     const states = await State.find()
     res.json(states).status(200)
 
    }catch (e){
     res.status(500).json({errormsg:e})
    }
 })

router.get('/colleges/:id', async (req,res)=>{
    try{
    const colleges =  await College.find({"location.state.code":req.params.id})
    res.json(colleges).status(200)

    }catch(e){
        res.status(500).json({errormsg:e})
    }

})

module.exports = router