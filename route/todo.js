var route = require('express').Router()
var todoCtrl = require('../controller/todo.controller')
var isLogin = require('../middleware/isLogin')

route.get('/planning', todoCtrl.getPlanning)
route.post('/planning', isLogin, todoCtrl.createPlanning)
route.put('/planning/:id', isLogin, todoCtrl.updatePlanning)

route.get('/todo', todoCtrl.getTodo)
route.put('/todo/:id', isLogin, todoCtrl.updateTodo)

route.get('/doing', todoCtrl.getDoing)
route.put('/doing/:id', isLogin, todoCtrl.updateDoing)

route.get('/done', todoCtrl.getDone)

route.delete('/delete/:id', isLogin, todoCtrl.deleteTodo)

module.exports = route