import { createServer } from 'http';

const server = createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
  });

  const url = new URL(req.url, 'http://localhost:8000');

  const body = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>
                Node Basics
            </title>
        </head>
        <body>
            <h1 style="color:green">
                Hello ${url.searchParams.get('name')}
            </h1>
        </body>
    </html>
  `;

  res.end(body);
});

server.listen(8000, () =>
  console.log(`server is listening on PORT ${server.address().port}`)
);
