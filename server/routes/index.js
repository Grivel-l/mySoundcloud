const fs = require('fs');

module.exports = (app, sockets) => {
  const loadRoutes = (additionalPath = '') => {
    const path = `${__dirname}/.${additionalPath}`
    fs.readdirSync(path).map(file => {
      if (file !== '.' && file !== '..') {
        if (fs.statSync(`${path}/${file}`).isDirectory()) {
          loadRoutes(`${additionalPath}/${file}`);
        } else {
          if (file.includes('.route.js')) {
            require(`${path}/${file}`)(app, sockets);
          }
        }
      }
    });
  };

  loadRoutes();
  console.log('All routes loaded');
};
