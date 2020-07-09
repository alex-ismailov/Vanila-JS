import http from 'http';

const server = http.createServer((request, response) => {
  response.write('Hello from http server');
  response.end();
});

const port = 4000;
server.listen(port, () => {
  console.log('HTTP Server has been started');
});

// telnet localhost 4000
/* 
GET / HTTP/1.1
host: localhost
connection: close
 */