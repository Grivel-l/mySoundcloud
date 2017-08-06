export default  url => {
  return fetch(url)
  .then(response => {
    return response.json();
  });
};
