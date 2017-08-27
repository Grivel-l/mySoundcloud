const fetch = require('../../helpers/fetch');

module.exports = (app, sockets) => {
  app.get('/music/action', (req, res) => {
    sockets.emit('actionMusic');
  });
};
