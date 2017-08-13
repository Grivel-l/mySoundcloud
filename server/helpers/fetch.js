const fetch = require('node-fetch');

module.exports = url => {
  return fetch(url).then(response => response.json());
};
