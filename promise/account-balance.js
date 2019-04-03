const http = require('http');

module.exports = () => new Promise((resolve, reject) => {
  http.get('http://localhost:3000/account-balance', response => {
    let data = '';

    // A chunk of data has been recieved.
    response.on('data', chunk => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    response.on('end', () => {
      const finalData = JSON.parse(data);

      if (response.statusCode === 500) {
        return reject(finalData);
      }

      resolve(finalData);
    });
  });
});