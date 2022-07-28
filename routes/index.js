const route = require("express").Router();

const registerRoute = require("./registration/index");
const activityRoute = require("./activity/index");
const authRoute =  require("./auth/index");
const skillRoute =  require("./skill/index");
const ActivityContoller = require("../controller/ActivityController");
const authentication = require("../middleware/authentication");

route.get('/activities/:skill_id',authentication, ActivityContoller.getAllActivities)
route.use('/auth', authRoute);
route.use('/user', registerRoute)
route.use('/activity', activityRoute)
route.use('/skills', skillRoute)
module.exports = route