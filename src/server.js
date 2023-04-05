'use strict';

const express = require('express');

const cors = require('cors');

const app = express(); // singleton

app.use(cors());

// module.exports = start