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
    checkSize
}