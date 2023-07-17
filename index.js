require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const bookRoutes = require('./routes/bookRoutes')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')

//Express app
const app = express();

//Install cors
app.use(cors())

//Use json inside expresss
app.use(express.json())

//Routes
app.use('/', bookRoutes)
app.use('/', userRoutes)

//Connect to mongoose
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(8800, ()=>{
        console.log("Connected!")
    })
})
.catch((error)=>{console.log(error)})



