require('dotenv').config({ path: '../.env' })
const jwt = require("jsonwebtoken")
const authentication = async (req, res, next) => {
    try {
        const { token } = req.query;
        const authentic = jwt.verify(token, process.env.SECRET)
        if (authentic) {
            req.userLogin = authentic;
            next()
        } else {
            res.status(401).send({ message: 'Unauthorized User' });
        }
    } catch (err) {
        res.status(401).send({ message: 'Unauthorized User' });
    }

}
module.exports = authentication