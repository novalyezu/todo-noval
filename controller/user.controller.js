var User = require('../model/user.model')
var hash = require('bycjwt')

module.exports = {
    register: function(req, res) {
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash.bcencode(req.body.password),
        }).then(function(result) {
            res.status(201).json(result)
        }).catch(function(error) {
            res.status(500).json(error)
        })
    },

    login: function(req, res) {
        User.findOne({
            email: req.body.email
        }).then(function(result) {
            var token = {
                email: result.email,
                password: result.password
            }
            if(hash.bcdecode(req.body.password, result.password)) {
                res.status(200).json({
                    token: hash.jwtencode(token)
                })
            } else {
                res.status(403).json({
                    msg: "Email / password salah!"
                })
            }
        }).catch(function(error) {
            res.status(500).json(error)
        })
    }
}