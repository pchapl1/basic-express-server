'use strict';

const app = require('./src/server');
const PORT = process.env("PORT");

app.start(PORT);