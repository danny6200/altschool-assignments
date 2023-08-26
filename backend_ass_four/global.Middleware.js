const checkBody = (req, res, next) => {
    if(!Object.keys(req.body).length){
        return res.status(400).send({
            "data": "null",
            "error": "Bad Request - request must have a body"
        })
    } else {
        next();
    }
}



module.exports = {
    checkBody
}