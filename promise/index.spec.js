const getPersonNameAndBalance = require('./get-person-name-and-balance');
const nock = require('nock');

describe.only('Callback', () => {
  test('200', () => expect(getPersonNameAndBalance()).resolves.toEqual('John J. Travolta - $10.00'));

  test('500 - Person', () => {
    nock('http://localhost:3000', { allowUnmocked: true })
      .get('/person')
      .reply(500, {
        message: 'Internal Server Error - Person'
      });

    return expect(getPersonNameAndBalance()).rejects.toEqual({ message: 'Internal Server Error - Person'});
  });

  test('500 - Account Balance', () => {
    nock('http://localhost:3000', { allowUnmocked: true })
      .get('/account-balance')
      .reply(500, {
        message: 'Internal Server Error - Account Balance'
      });

    return expect(getPersonNameAndBalance()).rejects.toEqual({ message: 'Internal Server Error - Account Balance'});
  });
});
