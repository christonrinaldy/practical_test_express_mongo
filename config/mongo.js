require('dotenv').config()
const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017/"+process.env.DB_NAME;

const dbName = process.env.DB_NAME
const client = new MongoClient(uri,{useUnifiedTopology:true});

client.connect()
const db = client.db(dbName);

module.exports = {client, MongoClient, dbName, db, uri}
