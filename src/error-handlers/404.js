'use strict';

function handle404(req, res, next) {

    req.status(404).send("404 Error")

}

module.exports = handle404;