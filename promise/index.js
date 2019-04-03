const getPersonNameAndBalance = require('./get-person-name-and-balance');

getPersonNameAndBalance()
    .then(response => console.log(response))
    .catch(error => console.log(error));
