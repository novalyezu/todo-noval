var Todo = require('../model/todo.model')

module.exports = {
    getPlanning: function(req, res) {
        Todo.find({
            status: 0
        }).then(function(found) {
            res.status(200).json(found)
        }).catch(function(error) {
            res.status(500).json(error)
        })
    },

    createPlanning: function(req, res) {
        Todo.create({
            title: req.body.title,
            activity: req.body.activity,
            status: 0
        }).then(function(result) {
            res.status(201).json(result)
        }).catch(function(error) {
            res.status(500).json(error)
        })
    },

    updatePlanning: function(req, res) {
        Todo.updateOne({
            _id:req.params.id
        }, {
            status: 1
        }).then(function(result) {
            res.status(200).json({
                msg: "Berhasil masuk ke daftar todo"
            })
        }).catch(function(error) {
            res.status(500).json(error)
        })
    },

    getTodo: function(req, res) {
        Todo.find({
            status: 1
        }).then(function(found) {
            res.status(200).json(found)
        }).catch(function(error) {
            res.status(500).json(error)
        })
    },

    updateTodo: function(req, res) {
        Todo.updateOne({
            _id:req.params.id
        }, {
            status: 2
        }).then(function(result) {
            res.status(200).json({
                msg: "Masuk ke daftar sedang dilakukan"
            })
        }).catch(function(error) {
            res.status(500).json(error)
        })
    },

    getDoing: function(req, res) {
        Todo.find({
            status: 2
        }).then(function(found) {
            res.status(200).json(found)
        }).catch(function(error) {
            res.status(500).json(error)
        })
    },

    updateDoing: function(req, res) {
        Todo.updateOne({
            _id:req.params.id
        }, {
            status: 3
        }).then(function(result) {
            res.status(200).json({
                msg: "Selesai aktifitas"
            })
        }).catch(function(error) {
            res.status(500).json(error)
        })
    },

    getDone: function(req, res) {
        Todo.find({
            status: 3
        }).then(function(found) {
            res.status(200).json(found)
        }).catch(function(error) {
            res.status(500).json(error)
        })
    },

    deleteTodo: function(req, res) {
        Todo.remove({
            _id:req.params.id
        }).then(function(result) {
            res.status(200).json({
                msg: "Berhasil menghapus todo"
            })
        }).catch(function(error) {
            res.status(500).json(error)
        })
    },
}