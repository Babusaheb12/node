const http = require('http');

const server =http.createServer((req, res) =>{
console.log("request event");
console.log(req.url);
});

const PORT = 5003;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});