const { db } = require('../config/mongo');
module.exports = createCollectionSkills = () => {
    // mydatabase is the name of db 
    return new Promise((resolve) => {
        db.createCollection("skills", {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["skill_name"],
                    properties: {
                        skill: {
                            bsonType: "string",
                        }
                    }
                }
            }
        }, function (err, res) {
            if (err) resolve(err.name);
            resolve("Collection created!",);
        });
    })
}