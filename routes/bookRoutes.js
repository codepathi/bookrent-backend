const express = require('express')
const {getBook, getAvailableBook, getFilteredBook} = require('../controllers/getBook')
const createBook = require('../controllers/createBook')
const updateBook = require('../controllers/updateBook')

//Get router 
const router = express.Router()
// Get list of one item
router.get('/book', getBook)

// Get list of one item
router.put('/book/priceFilter', getFilteredBook)

// Get filtered book list
router.get('/book/available', getAvailableBook)

// Post book information
router.post('/book', createBook)


//Update book
router.put('/book/:id', updateBook)

module.exports = router