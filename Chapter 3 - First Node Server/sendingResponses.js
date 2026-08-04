const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<head><title>complete coding</title></head>');
    res.write('<body><h1>like / share / subscribe</h1></body>');
    res.write('</html>');
    res.end();
});

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});