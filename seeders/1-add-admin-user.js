require('dotenv').config({ path: '../.env' });
const bcrypt = require("bcrypt");
const { client, dbName } = require('../config/mongo');
const { PROFILE } = require('../enum');
const db = client.db(dbName);
const user = db.collection("users");

const data = {
    name: process.env.USER_ADMIN_NAME,
    email: process.env.USER_ADMIN_EMAIL,
    username: process.env.USER_ADMIN_USERNAME,
    password: bcrypt.hashSync(process.env.USER_ADMIN_PASSWORD, 5),
    profile: PROFILE.BOARD,
    skill: process.env.USER_ADMIN_SKILLS.split(",")
}
user.findOne({ username: data.username })
    .then(async res => {
        if (res == null) {
            const stat = await user.insertOne(data);
        } else {
        }
    })
    .catch(err => {
        console.log(err)
    })
    .finally(() => {
        process.exit(0);
    })