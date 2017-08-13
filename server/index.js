const express = require('express');
const io = require('socket.io');

const routes = require('./routes/index.js');
const loadSockets = require('./sockets/index.js');
const app = express();
const http = require('http').Server(app);
const sockets = io(http);

http.listen(3000, () => {
  console.log('Server is running');
  app.use(express.static(`${__dirname}/views/`));
  app.set('views', `${__dirname}/views`);
  app.set('x-powered-by', false);
  app.set('view engine', 'ejs');

  loadSockets(sockets);
  routes(app);
});
