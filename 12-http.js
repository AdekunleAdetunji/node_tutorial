// import the http module
const http = require("http");

// create sever
const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.end("Welcome to the home page")
    }
    if (req.url == "/about"){
        res.end("This is the about page")
    }
    res.end(
        `
    <h1>Oops!</h1>
    <p>Page cannot be found</p>
    <a href="/">back</a>
        `
    )
})

server.listen(5000)