var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!']
    }, 
    email: {
        type: String,
        required: [true, 'email is required!']
    },
    password: {
        type: String,
        required: [true, 'password is required!']
    }
})

var User = mongoose.model('User', userSchema)

module.exports = User