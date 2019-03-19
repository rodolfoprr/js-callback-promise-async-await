const request = require('./request');

request((error, response) => {
  if (error) {
    return console.log('Ooops!', error);
  }

  console.log('All good', response);
});
