const activityAuthorization = (req, res, next) => {
    // console.log(req.userLogin)
    if(req.userLogin != undefined && req.userLogin.profile === 'expert') {
        next()
    } else {
        res.status(401).send({ message: 'Unauthorized User' });
    }
}
module.exports = activityAuthorization 