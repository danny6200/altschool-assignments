const express = require("express")
const controller = require("../items.Controller")
const middleware = require("../items.Middleware")

const router = express.Router()

router.get("/", controller.getAllItems)

router.get("/:id", controller.getOneItem)

router.post("/", middleware.checkBody, middleware.checkSize, controller.addItem)

router.patch("/:id", middleware.checkBody, controller.updateOneItem)

router.delete("/:id", controller.deleteItem)

module.exports = router