const notFoundMiddleware = (req,res,next) => {
    res.status(404).send('Post not found!')
}

module.exports = notFoundMiddleware