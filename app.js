const http = require("http");

const server = http.createServer((req, res) => {

    if(req.url === "/") {
        res.write("<h1>Welcome to our hompage</h1>");
    }
    if(req.url === "/about") {
        res.write("<p>About page</p>");
    }
    
    res.end();
})

server.listen(5000);