import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.write("<h1>Home</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.write("<h1>About</h1>");
    res.end();
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
    res.write("<h1>404 Not Found</h1>");
    res.end();
  }
});

server.listen(8080, () => {
  console.log("Server Up");
});
