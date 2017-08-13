module.exports = sockets => {
  sockets.on('connection', socket => {
    console.log('A socket has just connected');
  });
};
