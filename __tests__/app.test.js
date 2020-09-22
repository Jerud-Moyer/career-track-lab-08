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
    .post('/echo')
    .send('status code 200');

    expect(response.text)
    .toEqual('status code 200')
  })

  it('returns html with an h1 with the word red from /red', async() => {
    const response = await request(app)
    .get('/red');

    expect(response.text).toEqual('<html><body><h1>red</h1></body></html>')
  })

  it('returns html with an h1 with the word green from /green', async() => {
    const response = await request(app)
    .get('/green');

    expect(response.text).toEqual('<html><body><h1>green</h1></body></html>')
  })

  it('returns html with an h1 with the word red from /blue', async() => {
    const response = await request(app)
    .get('/blue');

    expect(response.text).toEqual('<html><body><h1>blue</h1></body></html>')
  })
});
