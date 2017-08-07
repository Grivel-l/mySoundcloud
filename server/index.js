const express = require('express');
const routes = require('./routes/index.js');

const app = express();

app.listen(3000, () => {
  console.log('Server is running');
  routes(app);
});
