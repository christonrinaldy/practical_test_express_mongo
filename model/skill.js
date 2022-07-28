const {client, dbName} = require("../config/mongo")
const db = client.db(dbName);
const skill = db.collection("skills");

module.exports = skill