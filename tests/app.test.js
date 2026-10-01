const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return status 200', async () => {
    const res = await request(app).get('/');
    // check the status here
  });
});