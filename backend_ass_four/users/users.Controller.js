const fsPromises = require("fs").promises
const path = require("path")

const dbDirName = path.dirname(__dirname)
const userDbPath = path.join(dbDirName, "db", "users.json")

const getAllUsers = async () => {
    try {
        users = await fsPromises.readFile(userDbPath, "utf-8")
        if(!users){
            usersObj = []
        } else {
            usersObj = JSON.parse(users)
        }
        return usersObj 
    } catch (error) {
        console.log(error)
    }
     
}

const createUser = async (req, res) => {
    newUser = req.body
    usersObj = await getAllUsers()

    newUser.api_key = `${newUser.username}_${newUser.password}`

    if(newUser.username !== "Daniel"){
        newUser.user_rank = "user"
    } else {
        newUser.user_rank = "admin"
    }
    usersObj.push(newUser)
    allUsers = JSON.stringify(usersObj)
    await fsPromises.writeFile(userDbPath, allUsers)
    res.status(201).json({
        "data": usersObj,
        "error": "null"
    })
}




module.exports = {
    getAllUsers,
    createUser
}