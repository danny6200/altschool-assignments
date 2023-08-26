const express = require("express")
const controller = require("../users/users.Controller")
const middleware = require("../users/users.Middleware")
const globalMiddleware = require("../global.Middleware")

const uRouter = express.Router()


//CREATE users
uRouter.post("/", globalMiddleware.checkBody, middleware.isUnique, controller.createUser)





module.exports = uRouter