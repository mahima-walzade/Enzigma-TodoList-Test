const express = require ('express')
const mongoose = require ('mongoose')
const cors = require('cors')

const routes =require('./routes/ToDoRoutes')
require('dotenv').config()

const app =express()
const PORT = process.env.port || 5700

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://0.0.0.0:27017/online').then(()=>{
    console.log("Database Connected")
})
app.use(routes)

app.listen(PORT,()=>console.log(`Listening on:${PORT}`))
