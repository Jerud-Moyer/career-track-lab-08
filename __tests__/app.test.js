const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('returns hi in the body', async() => {
    const response = await request(app)
    .get('/');

    expect(response.text)
    .toEqual('<html><body><h1>hi</h1></body></html>')
  })

  it('returns status code 200 and plain text in body', async() => {
    const response = await request(app)
    .post('/echo');

    expect(response.body)
    .toEqual({ body: 'plain text', status: '200 ok', contentType: 'text/plain' })
  })
});
