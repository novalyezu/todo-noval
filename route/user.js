var route = require('express').Router()
var user = require('../controller/user.controller')

route.post('/register', user.register)
route.post('/login', user.login)

module.exports = route