require('dotenv').config()
mongoose = require('mongoose')


mongoose.connect(process.env.DB_URL)
const database = mongoose.connection
database.on('error',(error)=>(console.error()))
database.once('open',()=>console.log("connected"))


module.exports  = database