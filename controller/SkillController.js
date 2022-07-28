require('dotenv').config({ path: '../.env' })
const skill = require("../model/skill");

class SkillController {
    static async getAllSkills(req, res) {
        try {
            const data = await skill.find().toArray()
            res.status(200).send(data)
        } catch(err) {
            res.status(500)
        }
    }
}
module.exports = SkillController