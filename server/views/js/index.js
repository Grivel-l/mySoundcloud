(() => {
  document.addEventListener('DOMContentLoaded', () => {
    SC.initialize({
      client_id: '73cd8f8567fdd940d6c4ca9faa77e065'
    });
    const socket = io.connect('http://localhost:3000');
    socket.on('playMusic', ({id}) => {
      SC.stream(`/tracks/${id}`)
      .then(player => player.play());
    });
  });
})();
