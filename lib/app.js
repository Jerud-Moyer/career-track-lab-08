const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    if(request.path === '/' && request.method === 'GET') {
      socket.end(createResponse({ body: '<html><body><h1>hi</h1></body></html>', status: '200 ok', contentType: 'text/plain' }))
    } else if(request.path === '/echo' && request.method === 'POST') {
      socket.end(createResponse({ body: 'plain text', status: '200 ok', contentType: 'text/plain' }))
    
    } else {
    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  }});
});

module.exports = app;
