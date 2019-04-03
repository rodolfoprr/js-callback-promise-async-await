const getPerson = require('./person');
const getAccountBalance = require('./account-balance');

module.exports = callback => {
  let personName = '';
  let accountBalance = '';

  getPerson((error, response) => {
    if (error) {
      return callback(error);
    }

    personName = `${response.firstName} ${response.middleName} ${response.lastName}`;

    getAccountBalance((error, response) => {
      if (error) {
        return callback(error);
      }

      accountBalance = response.balance;

      callback('', `${personName} - ${accountBalance}`);
    });
  });
};