//Import the modules to be used
const http = require("http")
const fs = require("fs")
const path = require("path")

const itemsDbPath = path.join(__dirname, "db", "items.json")
const PORT = 4000
const HOSTNAME = "localhost"

const requestHandler = (req, res) => {
    if (req.url === "/items" && req.method === "GET"){
        getAllItems(req, res)
    } else if (req.url.startsWith("/items") && req.method === "GET"){
        getAnItem(req, res)
    } else if (req.url === "/items" && req.method === "POST"){
        addItem(req, res)
    } else if (req.url === "/items" && req.method === "PUT"){
        updateItem(req, res)
    } else if (req.url === "/items" && req.method === "DELETE"){
        deleteItem(req, res)
    } else {
        res.writeHead(404)
        res.end({
            data: "null",
            err: "Resource not found or Method not found"
        })
    }
}

function getAllItems(req, res){
    fs.readFile(itemsDbPath, (err, data) => {
        if(err){
            res.writeHead(500)
            res.end("Internal Server Error")
        }
        res.writeHead(200)
        const items = JSON.parse(data)
        res.end(JSON.stringify(items))
    })  
}

function getAnItem(req, res){
    const itemId = req.url.split("/")[2]
    fs.readFile(itemsDbPath, (err, data) => {
        if(err){
            res.writeHead(500)
            res.end("Internal Server Error")
        }
        const items = JSON.parse(data)
        const itemIndex = items.findIndex(item => item.id == itemId)
        if(itemIndex == -1){
            res.writeHead(404)
            res.end("Item not found")
        }
        const requiredItem = items[itemIndex]
        res.writeHead(200)
        res.end(JSON.stringify(requiredItem))
    })
}

function addItem(req, res){
    const body = []
    req.on("data", (chunk) => {
        body.push(chunk)
    })

    req.on("end", () => {
        const parsedBody= Buffer.concat(body).toString()
        const newItem = JSON.parse(parsedBody)

        fs.readFile(itemsDbPath, (err, data) => {
            if(err){
                res.writeHead(500)
                res.end("Internal Server Error")
            }
            const items = JSON.parse(data)
            const newItemId = items[items.length - 1].id + 1
            newItem.id = newItemId
            const allItems = JSON.stringify([...items, newItem])

            fs.writeFile(itemsDbPath, allItems, (err) => {
                if(err){
                    res.writeHead(500)
                    res.end("Internal Server Error")
                }
                res.writeHead(201)
                res.end("Item Added Successfully")
            })
        })  
    })
}

function updateItem(req, res){
    const body = []
    req.on("data", (chunk) => {
        body.push(chunk)
    })

    req.on("end", () => {
        const parsedBody= Buffer.concat(body).toString()
        const updateDetails = JSON.parse(parsedBody)

        fs.readFile(itemsDbPath, (err, data) => {
            if(err){
                res.writeHead(500)
                res.end("Internal Server Error")
            }
            const items = JSON.parse(data)
            const updateIndex = items.findIndex(item => item.id == updateDetails.id)
            const updateItem = {...items[updateIndex], ...updateDetails}
            items[updateIndex] = updateItem
            const updatedItemList = JSON.stringify(items)
            
            fs.writeFile(itemsDbPath, updatedItemList, (err) => {
                if(err){
                    res.writeHead(500)
                    res.end("Internal Server Error")
                }
                res.writeHead(200)
                res.end("Update is Successful")
            })
        })  
    })
}

function deleteItem(req, res){
    const body = []
    req.on("data", (chunk) => {
        body.push(chunk)
    })
    
    req.on("end", () => {
        const parsedBody= Buffer.concat(body).toString()
        const deleteDetails = JSON.parse(parsedBody)
    
        fs.readFile(itemsDbPath, (err, data) => {
            if(err){
                res.writeHead(500)
                res.end("Internal Server Error")
            }
            const items = JSON.parse(data)
            const deleteIndex = items.findIndex(item => item.id == deleteDetails.id)
            
            items.splice(deleteIndex, 1)
            const newItemList = JSON.stringify(items)

            fs.writeFile(itemsDbPath, newItemList, (err) => {
                if(err){
                    res.writeHead(500)
                    res.end("Internal Server Error")
                }
                res.writeHead(200)
                res.end("Deletion Successful")
            })
        })
    })
}
server = http.createServer(requestHandler)

server.listen(4000, "localhost", () => {
    console.log(`Server is listening on http://${HOSTNAME}:${PORT}`)
})