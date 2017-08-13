const express = require('express');

const routes = require('./routes/index.js');
const app = express();

app.listen(3000, () => {
  console.log('Server is running');
  app.use(express.static(`${__dirname}/views/`));
  app.set('views', `${__dirname}/views`);
  app.set('x-powered-by', false);
  app.set('view engine', 'ejs');
  routes(app);
});
