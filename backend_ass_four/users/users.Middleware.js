const {getAllUsers} = require("./users.Controller")
let existingUser;


const isUnique = async (req, res, next) => {
    newUser = req.body
    usersObj = await getAllUsers()
    // console.log(usersObj)
    // console.log(newUser)
    if(usersObj.length !== 0){
        existingUserName = usersObj.find((user) => user.username === newUser.username)

        if(existingUserName){
            return res.status(400).json({
                "message": "Username exists already."
            })
        } else {
            next()
        }
    } else {
        next()
    }
}


module.exports = {
    isUnique
}