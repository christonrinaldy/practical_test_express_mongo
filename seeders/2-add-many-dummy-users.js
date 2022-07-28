require('dotenv').config({ path: '../.env' });
const bcrypt = require("bcrypt");
const { ObjectId } = require('mongodb');
const { client, dbName } = require('../config/mongo');
const { PROFILE } = require('../enum');
const db = client.db(dbName);
const user = db.collection("users");

const data0 = {
    _id: ObjectId("62e1f07aa75e2ae22e49a915"),
    name: "competitor zero",
    email: "competitor0@mail.com",
    username: "competitor0",
    password: bcrypt.hashSync("password", 5),
    profile: PROFILE.COMPETITOR,
    skill: ["history", "research"]
}
const data1 = {
    _id: ObjectId("62e1f07aa75e2ae22e49a916"),
    name: "competitor one",
    email: "competitor1@mail.com",
    username: "competitor1",
    password: bcrypt.hashSync("password", 5),
    profile: PROFILE.COMPETITOR,
    skill: ["research", "economy"]
}
const data2 = {
    _id: ObjectId("62e1f07aa75e2ae22e49a917"),
    name: "competitor two",
    email: "competitor2@mail.com",
    username: "competitor2",
    password: bcrypt.hashSync("password", 5),
    profile: PROFILE.COMPETITOR,
    skill: ["history"]
}
const data3 = {
    _id: ObjectId("62e1f07aa75e2ae22e49a918"),
    name: "competitor three",
    email: "competitor3@mail.com",
    username: "competitor3",
    password: bcrypt.hashSync("password", 5),
    profile: PROFILE.COMPETITOR,
    skill: ["culture", "economy"]
}
const data4 = {
    _id: ObjectId("62e1ecc833ab46c7911cd8bc"),
    name: "competitor four",
    email: "competitor4@mail.com",
    username: "competitor4",
    password: bcrypt.hashSync("password", 5),
    profile: PROFILE.COMPETITOR,
    skill: ["culture", "economy"]
}
const data5 = {
    _id: ObjectId("62e1ecc833ab46c7911cd8bd"),
    name: "expert zero",
    email: "expert0@mail.com",
    username: "expert0",
    password: bcrypt.hashSync("password", 5),
    profile: PROFILE.COMPETITOR,
    skill: ["culture", "economy"]
}
user.insertMany([
    data0, data1, data2, data3, data4, data5
])
    .then(() => {
        console.log("success seed dummy users")
    })
    .finally(() => {
        process.exit(0)
    })