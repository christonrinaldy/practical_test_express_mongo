const route = require("express").Router();
const AuthController = require("../../controller/AuthController");

route.post('/login', AuthController.login);
route.get('/logout', AuthController.logout);

module.exports = route;