const route = require("express").Router();
const UserController = require("../../controller/UserController");
const authentication = require("../../middleware/authentication");
const registerAuthorization  = require("../../middleware/registration/register-authorization");

route.use(authentication, registerAuthorization);
route.post('/', UserController.register)
module.exports = route