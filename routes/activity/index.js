const ActivityContoller = require("../../controller/ActivityController");
const activityAuthorization = require("../../middleware/activities/activity_auth");
const authentication = require("../../middleware/authentication");

const route = require("express").Router();

route.use(authentication)
route.use(activityAuthorization)
route.put('/:ID', ActivityContoller.updateActivity);
route.delete('/:ID', ActivityContoller.deleteActivity);
route.post('/', ActivityContoller.addActivity);

module.exports = route