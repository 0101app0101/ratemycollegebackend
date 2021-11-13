const express = require('express')
const ConnectDB = require("./ConnectDB")
const collegerouter = require('./routes/collegerouter')
const app = express()

app.listen(8000)


app.use(express.json())
app.use("/api/colleges", collegerouter)




