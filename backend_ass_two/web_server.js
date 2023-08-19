const http = require("http")
const fs = require("fs")

const PORT = 3000
const HOSTNAME = "localhost"

// RequestHandler Function
const requestHandler = (req, res) => {
    //Checks root route, Reads and Writes index.html file
    if(req.url === "/"){
        const file = fs.readFileSync("./index.html")
        res.setHeader("content-type", "text/html")
        res.writeHead(200)
        res.write(file)
        res.end()
    }

    if(req.url.endsWith(".html") && req.method === "GET"){
        //Checks the route, Looks for the file
        //Returns file if found or 404.html if file
        //is not found
        try {
            filename = req.url.split("/")[1]
            filePath = `./${filename}`

            const file = fs.readFileSync(filePath)
            res.setHeader("content-type", "text/html")
            res.writeHead(200)
            res.write(file)

        } catch (error) {
            const file = fs.readFileSync("./404.html")
            res.setHeader("content-type", "text/html")
            res.writeHead(404)
            res.write(file)
        }
        res.end()

    }
}

server = http.createServer(requestHandler)

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listening on http://${HOSTNAME}:${PORT}`)
})