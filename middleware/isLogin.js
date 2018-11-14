module.exports = function(req, res, next) {
    var token = req.headers.token
    if(token) {
        next()
    } else {
        res.status(403).json({
            msg: "Anda harus login!"
        })
    }
}