require('dotenv').config({path: '../.env'});
const { ObjectId } = require('mongodb');
const { client, dbName } = require('../config/mongo');
const db = client.db(dbName);
const skill = db.collection("skills");

skill.insertMany([
    {
        _id: ObjectId("62e1ecc8b975fc636d056150"),
        skill_name: "culture"
    },
    {
        skill_name: "history"
    },
    {
        skill_name: "economy"
    },
    {
        skill_name: "research"
    }
]).finally(() => {
    process.exit(0)
})