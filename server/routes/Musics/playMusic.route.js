const fetch = require('../../helpers/fetch');

module.exports = app => {
  app.get('/music/play', (req, res) => {
    fetch(`http://api.soundcloud.com/tracks/${req.query.idTrack}?client_id=${req.query.client_id}`)
    .then(track => {
      console.log('Play music', track.id);
      res.send();
    });
  });
};
