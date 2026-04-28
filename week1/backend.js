const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/api' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello from backend!' }));
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(4500, () => {
    console.log('Server running on port 3000');
});