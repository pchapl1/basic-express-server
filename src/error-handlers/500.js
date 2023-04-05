'use strict';

function handle500(err, req, res, next){
    res.status(500).send("Server Error: ", err);
}

module.exports = handle500;