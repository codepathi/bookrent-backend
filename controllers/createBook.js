const Book = require('../models/book')

// Post book
const createBook = async (req, res)=>{
    const {author, title, price} = req.body
    try {
        const book = await Book.create({
            author,
            title,
            price,
            rentBy: null,
            rented: false
            })
    res.status(200).json(book);
    } catch (error) {
        res.json(error)
    }
}


module.exports = createBook;