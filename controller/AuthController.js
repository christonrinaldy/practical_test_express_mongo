require('dotenv').config({ path: '../.env' })
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/user");

class AuthController {
    static async login(req, res, next) {
        try {
            const { username, password } = req.body;
            var foundUser = await User.findOne({ username })
            if (foundUser == null) {
                res.status(401).send({ message: "invalid login" })
            } else {
                const valid = bcrypt.compareSync(password, foundUser.password)
                if (valid) {
                    delete foundUser.password
                    const token = jwt.sign(foundUser, process.env.SECRET)
                    res.status(200).send({ token, profile: foundUser.profile })
                } else {
                    console.log(valid)
                    res.status(401).send({ message: "invalid login" })
                }
            }
        } catch (err) {

        }
    }
    static async logout(req, res) {
        try {
            const { token } = req.query;

            if (token === undefined) {
                res.status(401).send({ message: 'unauthorized user' })
            }

            const verified = jwt.verify(token, process.env.SECRET);

            if (verified) {
                res.status(200).send({ message: 'logout success' })
            } else {
                res.status(401).send({ message: 'unauthorized user' })
            }
        } catch (err) {
            res.status(401).send({ message: 'unauthorized user' })
        }
    }
}
module.exports = AuthController