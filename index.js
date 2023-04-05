'use strict';

const app = require('./src/server');
const PORT = process.env("PORT")

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}!!!!`);
});