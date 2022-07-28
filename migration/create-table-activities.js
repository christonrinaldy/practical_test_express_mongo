const { db } = require('../config/mongo');
module.exports = createCollectionActivities = () => {
    return new Promise((resolve, reject) => {
        db.createCollection("activities", {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["skill", "title", "description", "startdate", "enddate", "participants"],
                    properties: {
                        skill: {
                            bsonType: "string",
                        },
                        title: {
                            bsonType: "string",
                        },
                        description: {
                            bsonType: "string",
                        },
                        startdate: {
                            bsonType: "date",
                        },
                        enddate: {
                            bsonType: "date",
                        }, 
                        participants: {
                            bsonType: "array",
                        }
                    }
                }
            }
        }, function (err, res) {
            if (err) resolve(err);
            resolve("Collection created!");
        });
    })



}
