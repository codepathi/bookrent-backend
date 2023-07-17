const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bcrypt = require('bcrypt');

const userSchema = new Schema({
    
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }

}, {timestamps: true})


// Static method for signup
userSchema.statics.signup = async function(name, password) {
    
    const exists = await this.findOne({name});

    if(exists){
        throw Error("Username already in use")
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({name, password: hash});

    return user;

}


// Static method for login
userSchema.statics.login = async function(name, password) {
    
    if(!name || !password) {
        throw Error ("No username or password")
    }

    const user = await this.findOne({name});

    if(!user){
        throw Error("No user exist with such username")
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error("Incorrect password")
    }

    return user;
}

module.exports = mongoose.model('User', userSchema)