const Book = require('../models/book')

//Get book information
const getBook = async (req, res) => {
    try {
        const response = await Book.find({}).sort({createdAt: -1});
        res.json(response)
    } catch (error) {
        res.json(error.message)
    }
}


//Get book information
const getAvailableBook = async (req, res) => {
    try {
        const response = await Book.find({rentBy: null}).sort({createdAt: -1});
        res.json(response)
    } catch (error) {
        res.json(error.message)
    }
}

//Get book information
const getFilteredBook = async (req, res) => {
    const {min, max} = req.body;
    try {
        const response = await Book.find({price: { $gte: min, $lte: max }}).sort({createdAt: -1});
        res.json(response)
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {getBook, getAvailableBook, getFilteredBook};