const User = require('../models/user')

// Create user
const createUser = async (req, res)=>{
    const {name, password} = req.body
    try {
    const user = await User.signup(name, password);
    res.status(200).json(user);
    } catch (error) {
        res.json(error)
    }
}


module.exports = createUser;