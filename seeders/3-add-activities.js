require('dotenv').config({ path: '../.env' });
const { ObjectId } = require('mongodb');
const { client, dbName } = require('../config/mongo');
const user = require('../model/user');
const db = client.db(dbName);
const activity = db.collection("activities");

user.find({ username: { $in: ["competitor3", "competitor4"] } }, {projection: { password: 0, email: 0, username: 0 }}).toArray()
    .then(res => {
        let participants = res
        activity.insertMany([
            {
                _id: ObjectId("62e1eb744db8ba0f92a629cf"),
                skill: "culture",
                description: "Delegations of nations present their cultural heritage",
                title: "Cultural Week",
                startdate: new Date("2022-07-28"),
                enddate: new Date("2022-08-30"),
                participants
            }, {
                _id: ObjectId("62e207f5ba84fe93a7742de9"),
                skill: "culture",
                description: "for delete test",
                title: "deleted test",
                startdate: new Date("2022-07-28"),
                enddate: new Date("2022-08-30"),
                participants
            }
        ]).finally(() => {
            process.exit(0)
        })
    })
