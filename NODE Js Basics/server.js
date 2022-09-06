// Import http library
const http = require("http");

const port = 4000;

// Create Server
const server = http.createServer(function (req, res) {
    console.log("url", req.url);
    console.log("method", req.method);

    if(req.url === "/") {
        res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write("<html><body>");
    res.write("<form method='GET' action='/users'><input type='text'><button>Submit</button></form>");
    res.write("</html></body>");
    res.end();
    }

    if(req.url === "/weather") {
        res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write("<html><body>");
    res.write("<h1>Today is too hot</h1>");
    res.write("</html></body>");
    res.end();
    }

    if(req.url === "/users" && req.method === "POST") {
        console.log("User Created");
        res.write("User Created");
        res.end();
    }

    if(req.url === "/users" && req.method === "GET") {
        const users = ["Mohaib", "Mushaf", "Talal"];
        res.write(`${users[0]} ${users[1]} These are users`);
        return res.end();
    }
});

// const server2 = http.createServer(function (req, res) {
//     res.write("This is server 2");
//     res.end;
// })
// server2.listen(5000);

server.listen(port);