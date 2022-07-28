const registerAuthorization = (req, res, next) => {
    if (req.userLogin != undefined && req.userLogin.profile === 'board') {
        next()
    } else {
        res.status(401).send({ message: 'Unauthorized User' });
    }
}
module.exports = registerAuthorization 