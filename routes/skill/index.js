const route = require("express").Router();
const SkillController = require("../../controller/SkillController");
const authentication = require("../../middleware/authentication");

route.use(authentication);
route.get('/', SkillController.getAllSkills)
module.exports = route