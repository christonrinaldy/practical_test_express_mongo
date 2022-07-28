const { client, MongoClient, uri } = require('../config/mongo');
console.log(uri)
module.exports = createDb = () => {
    return new Promise(resolve => {
        MongoClient.connect(uri, function (err, db) {
            if (err) resolve(err.name);
            resolve("Database created!");
        })
    })
     // mydatabase is the name of db 
    
}
