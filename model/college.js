const mongoose = require('mongoose')

const location = {
    country:{
        type:String
    },
    state:{
        type:String
    },
    city:{
        type:String
    },
    address:{
        type:String
    }
}
const stars = {
    star1:{
        type:Number
    },
    star2:{
        type:Number
    },
    star3:{
        type:Number
    },
    star4:{
        type:Number
    }
}
const college = new mongoose.Schema({
            
    id: {
        type:String
    },
    name:{
        type:String
    },
    location: {
        type:location
    },
    // reviews:{
    //     type:Number
    // },
    comments: {
        type:Array
    },
    ratings:{
        type:Number
    },
    stars: {
        type:stars
    }
    
})

module.exports = mongoose.model('college',college)