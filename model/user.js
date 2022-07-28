const {client, dbName} = require("../config/mongo")
const db = client.db(dbName);
const user = db.collection("users");

module.exports = user