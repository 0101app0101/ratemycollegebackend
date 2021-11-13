const express = require('express')
const router = express.Router()
const College = require('../model/college')
//get all colleges
router.get('/', async (req,res) => {
   try{

    const colleges = await College.find()
    res.json(colleges).status(200)

   }catch (e){
    res.status(500).json({errormsg:e})
   }
})

router.get('/:id', async (req,res) => {
    try{
 
     const colleges = await College.findById(req.params.id)
     res.json(colleges).status(200)
 
    }catch (e){
     res.status(500).json({errormsg:e})
    }
 })

router.post('/createcollege', async (req,res)=> {



        const college = new College({
            name:req.body.name,
            location:{
                country:req.body.location.country,
                state:req.body.location.state,
                city:req.body.location.city,
                address:req.body.location.address
            },
            comments:req.body.comments,
            ratings:req.body.ratings,
            stars:{
                star1:req.body.stars.star1,
                star2:req.body.stars.star2,
                star3:req.body.stars.star3,
                star4:req.body.stars.star4
            }
        })

        try{
             
           const createNewCollege = await college.save()
           res.json(createNewCollege).status(200)

        }catch(e){
            res.status(500).json({errormsg:e})
    }
})

router.put('/addreview',async (req,res)=>{

    const updatedCollege = {

        $push:{comments:req.body.comments},
        ratings:req.body.ratings,
        stars:{
            star1:req.body.stars.star1,
            star2:req.body.stars.star2,
            star3:req.body.stars.star3,
            star4:req.body.stars.star4
        }
    
    } 

        const updatecolleges = await College.findByIdAndUpdate(req.body.id,updatedCollege,
            function (err, docs) {
                if (err){
                    res.status(500).json({errormsg:err})
                }
                else{
                    res.json({updated:docs}).status(200)
                    
                    
                    
                }})

  
    })


module.exports = router