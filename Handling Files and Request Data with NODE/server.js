 const http = require("http");
 const fs = require("fs");  
 const port = 4000;

function reqHandler (req, res) {
    if(req.url === "/") {
        res.setHeader("Content-Type", "text/html") 
        res.statusCode = 200;
        res.write("<html><body>");
        res.write("<form action='/users' method='POST'>");
        res.write("<input type='text' name='user'>");
        res.write("<button>Submit</button>");
        res.write("</form>");
        res.write("</body></html>");
        return res.end()
    }

    if(req.url === "/users" && req.method === "POST") {
        const body = []
        req.on("data", (chunk) => {
            body.push(chunk)
        })
        req.on("end", () => {
            console.log(Buffer.concat(body).toString());
            fs.writeFileSync("users.txt", Buffer.concat(body).toString());
            res.statusCode = 302;
            res.setHeader("Loaction", "/")
            return res.end()
        })
    }
}

const server = http.createServer(reqHandler);
server.listen(port);