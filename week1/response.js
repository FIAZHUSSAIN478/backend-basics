const http = require("http");
const server = http.createServer((req, resp) => {
    const age = 20;
    resp.setHeader("Content-Type", "text/html");
    resp.write(`
        <html></html>
        <head><title>node js </title></head>
        <body>
        <h1>Helo Fiaz How Are You</h1>
        <h2>`+ age + `</h2>
        <h2>`+ new Date() + `</h2>
        `)
    resp.end();
})
server.listen(4800)

