const { PROFILE } = require("../enum");
const User = require("../model/user");
const bcrypt = require('bcrypt');

class UserController {
    static async register(req, res) {
        try {
            const { username, profile } = req.body;
            const foundUser = await User.findOne({ username })
            if (foundUser) {
                res.status(422).send({ message: "Data cannot be processed" })
            } else {
                if (PROFILE.hasOwnProperty(String(profile).toUpperCase())) {
                    req.body.skill = req.body.skill !== undefined ? req.body.skill.split(",") : [];
                    req.body.password = bcrypt.hashSync(req.body.password, 5);
                    await User.insertOne(req.body);
                    res.status(200).send({ message: "create success" });
                } else {
                    res.status(422).send({ message: "Data cannot be processed" })
                }

            }
        } catch (err) {
            console.log("err", err)
            res.status(422).send({ message: "Data cannot be processed" })
        }

    }

}
module.exports = UserController