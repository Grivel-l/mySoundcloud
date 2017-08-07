module.exports = app => {
  app.get('/music/play', (req, res) => {
    console.log(req.query.client_id);
    console.log(req.query.idTrack);
    res.send('');
  });
};
