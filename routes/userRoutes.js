const express = require('express')
const createUser = require('../controllers/createUser')
const loginUser = require('../controllers/loginUser')

//Get router 
const router = express.Router()

// Login user
router.post('/login', loginUser)

// Post book information
router.post('/signup', createUser)

module.exports = router