var express = require('express')
var app = express()
var mongoose = require('mongoose')
var todo = require('./route/todo')
var user = require('./route/user')
var fs = require('fs')

mongoose.connect('mongodb://localhost:27017/todonoval')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', todo)
app.use('/', user)
app.get('/', function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    fs.readFile('./index.html', null, function(err, data) {
        if(err) {
            res.status(404).json({
                msg: "Not found!"
            })
        } else {
            res.write(data)
        }
        res.end()
    })
})

app.listen(3000)