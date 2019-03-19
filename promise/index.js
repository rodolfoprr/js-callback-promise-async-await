const request = require('./request');

request()
    .then(response => {
        console.log('All good', response);
    })
    .catch(error => {
        console.log('Ooops!', error);
    });
