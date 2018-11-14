var mongoose = require('mongoose')

var todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!']
    },
    activity: {
        type: String
    },
    status: {
        type: Number
    }
}, { timestamps: true })

var Todo = mongoose.model('todo', todoSchema)

module.exports = Todo