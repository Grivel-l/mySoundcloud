const fetch = require('../../helpers/fetch');

module.exports = (app, sockets) => {
  app.get('/music/play', (req, res) => {
    fetch(`http://api.soundcloud.com/tracks/${req.query.idTrack}?client_id=${req.query.client_id}`)
    .then(track => {
      sockets.emit('playMusic', {id: track.id});
      res.send();
    });
  });
};
