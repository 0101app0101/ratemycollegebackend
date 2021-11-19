const mongoose = require('mongoose')

const metadata = new mongoose.Schema({
    popularColleges:{
        type:Array
    }
})

module.exports = mongoose.model('metadata',metadata)
