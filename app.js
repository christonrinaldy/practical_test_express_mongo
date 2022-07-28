require('dotenv').config()
const { urlencoded } = require('express');
const express = require("express");
const { client } = require('./config/mongo');
const app = express()
const PORT = process.env.PORT || 3001
const route = require('./routes/index');

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(route);

app.listen(PORT, async () => {
    client.connect().then(() => console.log("db is connected"))
    console.log(`server is listening to http://localhost:${PORT}`)
})