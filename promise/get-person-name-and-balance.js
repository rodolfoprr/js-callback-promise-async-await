const getPerson = require('./person');
const getAccountBalance = require('./account-balance');

module.exports = () => new Promise((resolve, reject) => {
  Promise.all([getPerson(), getAccountBalance()]).then(([ person, accountBalance ]) =>
    resolve(`${person.firstName} ${person.middleName} ${person.lastName} - ${accountBalance.balance}`)
  ).catch(error => reject(error));
});