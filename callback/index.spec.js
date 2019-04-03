const getPersonNameAndBalance = require('./get-person-name-and-balance');
const nock = require('nock');

describe('Callback', () => {
  test('200', done => {
    getPersonNameAndBalance((error, response) => {
      expect(error).toBe('');
      expect(response).toEqual("John J. Travolta - $10.00");
      done();
    });
  });

  test('500 - Person', done => {
    nock('http://localhost:3000')
      .get('/person')
      .reply(500, {
        message: 'Internal Server Error - Person'
      });

    getPersonNameAndBalance((error, response) => {
      expect(response).toBeUndefined();
      expect(error.message).toBe('Internal Server Error - Person');
      done();
    });
  });

  test('500 - Account Balance', done => {
    nock('http://localhost:3000', { allowUnmocked: true })
      .get('/account-balance')
      .reply(500, {
        message: 'Internal Server Error - Account Balance'
      });

    getPersonNameAndBalance((error, response) => {
      expect(response).toBeUndefined();
      expect(error.message).toBe('Internal Server Error - Account Balance');
      done();
    });
  });
});
