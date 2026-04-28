const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>Welcome to Home Page</h1>");
    }
    else if (req.url === '/users' && req.method === 'GET') {

        const users = [
            { id: 1, name: "Ali" },
            { id: 2, name: "Ahmed" }
        ];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(3000);