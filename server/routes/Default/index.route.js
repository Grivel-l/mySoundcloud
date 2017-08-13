module.exports = app => {
  app.get('/', (req, res) => {
    res.render('index', {}, (error, html) => {
      if (error === null) {
        res.send(html);
      } else {
        res.send('An error has occured');
        console.log('Erorr', error);
      }
    });
  });
};
