const {client, dbName} = require("../config/mongo")
const db = client.db(dbName);
const activity = db.collection("activities");

module.exports = activity