const User = require('../models/user')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, "secret key", {expiresIn : '3d'})
}

// Login user
const loginUser = async (req, res)=>{
    const {name, password} = req.body
    try {
    const user = await User.login(name, password);
    const token = createToken(user._id);

    res.status(200).json({name, token});
    } catch (error) {
        res.json(error)
    }
}


module.exports = loginUser;