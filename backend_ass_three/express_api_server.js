const express = require("express")
const itemRouter = require("./routes/items.Router")

const PORT = 4000

const app = express()
app.use(express.json())

app.use("/items", itemRouter)

//Handle unknown routes
app.get("*", (req, res) => {
    res.status(404).json({
        "data": "null",
        "error": "Resource Not Found"
    })
})

app.listen(4000, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})