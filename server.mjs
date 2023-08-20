import { createServer } from 'http';

const server = createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8',
  });
  res.write('Hello');
  res.write(', My name is Yash and this is my ');
  res.end('World\n');
});

server.listen(8000, () =>
  console.log(`server is listening on PORT ${server.address().port}`)
);
