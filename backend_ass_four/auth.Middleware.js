const {getAllUsers} = require("./users/users.Controller")

const basicAuth = async (req, res, next) => {
    authHeader = req.headers.authorization
    if(!authHeader){
        return res.status(400).json({
            message: "Request needs username and password!"
        })
    } else {
        auth_base64 = authHeader.split(" ")[1]
        userNameAndPassword = Buffer.from(auth_base64, "base64").toString().split(":")
        // console.log(userNameAndPassword)
        username = userNameAndPassword[0]
        password = userNameAndPassword[1]

        users = await getAllUsers()
        existingUser = users.find((user) => user.username === username && user.password === password)
        if(existingUser){
            req.user = existingUser
            next()
        } else {
            return res.status(401).json({
                "message": "Please Sign Up"
            })
        }
    }
}

const api_KeyAuth = async (req, res, next) => {
    authHeader = req.headers
    // console.log(authHeader)
    if(!authHeader.api_key){
        return res.status(401).json({
            "message": "Request needs api_key"
        })
    } else {
        users = await getAllUsers()
        existingUser = users.find((user) => user.api_key === authHeader.api_key)
        if(existingUser){
            req.user = existingUser
            next()
        } else {
            return res.status(401).json({
                "message": "Please Sign Up"
            })
        }
    }
}


const isAdmin = (req, res, next) => {
    if(req.user.user_rank === "admin"){
        next()
    } else {
        return res.status(403).json({
            "message": "You do not have the access rights."
        })
    }
}




module.exports = {
    basicAuth,
    api_KeyAuth,
    isAdmin
}