const http = require('http');

module.exports = callback =>
  http.get('http://localhost:3000/accounts', response => {
    let data = '';

    // A chunk of data has been recieved.
    response.on('data', chunk => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    response.on('end', () => {
      const finalData = JSON.parse(data);

      if (response.statusCode === 500) {
        return callback(finalData);
      }

      callback('', finalData);
    });
  });
