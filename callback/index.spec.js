const request = require('./request');
const serverResponse = require('../server/data.json');
const nock = require('nock');

describe('Callback', () => {
  test('200', done => {
    request((error, response) => {
      expect(error).toBe('');
      expect(response).toEqual(serverResponse.accounts);
      done();
    });
  });

  test('500', done => {
    nock('http://localhost:3000')
      .get('/accounts')
      .reply(500, {
        message: 'Internal Server Error'
      });

    request((error, response) => {
      expect(response).toBeUndefined();
      expect(error.message).toBe('Internal Server Error');
      done();
    });
  });
});
