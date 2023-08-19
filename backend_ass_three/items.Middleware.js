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

const checkSize = (req, res, next) => {
    const validSize = ["small", "medium", "large"]
    if(validSize.includes(req.body.size)){
        next();
    } else {
        res.status(400).send({
        "data": "null",
        "error": "Bad Request - size must be either small, medium, or large"
    })}
}



module.exports = {
    checkBody,
    checkSize
}