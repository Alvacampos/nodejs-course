const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<p>Hi</p>');
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="usarname"><button type="submit">Send</button>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<ul><li>User 1</li><li>User 2</li></ul>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const dataBuffer = [];
    req.on('data', (chunk) => {
      dataBuffer.push(chunk);
    });
    return req.on('end', () => {
      const parseBody = Buffer.concat(dataBuffer).toString();
      console.log(parseBody.split('=')[1]);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
});

server.listen(4000);
