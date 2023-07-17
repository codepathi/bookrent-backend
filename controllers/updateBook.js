const Book = require('../models/book')

// Post book
const updateBook = async (req, res)=>{
    const {id} = req.params
    try {
        await Book.findOneAndUpdate({_id: id}, 
            {...req.body})
            .then((err)=>{
                res.json(err)
            })
    } catch (error) {
        res.json(error)
    }
}


module.exports = updateBook;