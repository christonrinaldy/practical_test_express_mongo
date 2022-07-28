const { db } = require('../config/mongo');
module.exports = createCollectionUsers = () => {
    // mydatabase is the name of db 
    return new Promise((resolve) => {
        db.createCollection("users", {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["name", "email", "username", "password", "profile"],
                    properties: {
                        name: {
                            bsonType: "string",
                        },
                        email: {
                            bsonType: "string",
                        },
                        username: {
                            bsonType: "string",
                        },
                        password: {
                            bsonType: "string",
                        },
                        profile: {
                            enum: [ "board", "expert", "trainer", "competitor" ],
                        },
                        skill: {
                            bsonType: "array",

                        }
                    }
                }
            }
        }, function (err, res) {
            if (err) resolve(err.name);
            resolve("Collection created!");
        });
    })
}