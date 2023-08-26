const express = require("express")
const controller = require("../items/items.Controller")
const middleware = require("../items/items.Middleware")
const globalMiddleware = require("../global.Middleware")
const authMiddleware = require("../auth.Middleware")

const router = express.Router()

// router.use(authMiddleware.basicAuth)
router.use(authMiddleware.api_KeyAuth)

router.get("/", controller.getAllItems)

router.get("/:id", controller.getOneItem)

router.post("/", authMiddleware.isAdmin, globalMiddleware.checkBody, middleware.checkSize, controller.addItem)

router.patch("/:id", authMiddleware.isAdmin, globalMiddleware.checkBody, controller.updateOneItem)

router.delete("/:id", authMiddleware.isAdmin, controller.deleteItem)

module.exports = router