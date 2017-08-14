export default  url => {
  return fetch(url)
  .then(response => {
    const contentType = response.headers.map['content-type'];
    if (contentType !== undefined && contentType[0].includes('json')) {
      return response.json();
    } else {
      return Promise.resolve();
    }
  });
};
