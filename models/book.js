const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookSchema = new Schema({
    author:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    rentBy:{
        type: String,
        required: false
    },
    rented:{
        type: Boolean,
        required: true
    }

}, {timestamps: true})


module.exports = mongoose.model('Book', bookSchema)