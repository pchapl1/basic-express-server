'use strict';

const express = require('express');

const cors = require('cors');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const handle404 = require('./error-handlers/404');
const handle500 = require('./error-handlers/500');
const app = express(); // singleton
const PORT = process.env.PORT;
app.use(cors());
app.use(logger);
const data = {};

app.get('/person', validator, (req, res, next) => {

    data.name = req.query.data.name;
    res.status(200).json(data);

})

// these routes need to be after the success routes because of the order express goes
app.use(handle500);
app.use('*', handle404);


module.exports = {
    app,
    start: (PORT) => app.listen(PORT, ()=> {console.log(`Listening on port ${PORT}`)})
};