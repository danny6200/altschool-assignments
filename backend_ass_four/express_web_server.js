const express = require("express")
const path = require("path")

const PORT = 3000
const homeFilePath = path.join(__dirname, "public", "index.html")
const notFoundPath = path.join(__dirname, "public", "404.html")
const app = express()

app.use(express.static("public"))

app.get("/index.html", (req, res) => {
    res.status(200).sendFile(homeFilePath)
})

app.get("*", (req, res) => {
    res.sendFile(notFoundPath)
})

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})