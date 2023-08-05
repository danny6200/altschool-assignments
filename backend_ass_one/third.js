//Import the http module
const http = require("http");

//Create the server variables
const host = "localhost";
const port = 3000;

//Implement the requestListener function
const requestListener = function(req, res) {
    res.writeHead(200);
    res.end("Hello world")
}

//Create the server object/processs/instance
const server = http.createServer(requestListener);

//Start the server process
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});