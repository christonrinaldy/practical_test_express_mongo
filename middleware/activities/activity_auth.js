const activityAuthorization = (req, res, next) => {
    if (req.userLogin != undefined && req.userLogin.profile === 'expert') {
        next()
    } else {
        res.status(401).send({ message: 'Unauthorized User' });
    }
}
module.exports = activityAuthorization 