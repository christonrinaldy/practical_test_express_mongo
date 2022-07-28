const { ObjectId } = require("mongodb");
const activity = require("../model/activity");
const Skill = require("../model/skill");
const user = require("../model/user");

class ActivityContoller {
    static async addActivity(req, res) {
        try {
            const { skill, participants, startdate, enddate } = req.body;

            if (new Date(enddate) < new Date(startdate)) {
                throw new Error();
            }
            const foundParticipants = await user.find({ _id: { $in: participants.map(val => { return ObjectId(val) }) }, skill: { $all: [skill] } }, { projection: { password: 0, email: 0, username: 0 } }).toArray();
            if ((participants.length > 0 && foundParticipants.length != participants.length) || participants.length == 0 || foundParticipants.length == 0) {
                throw new Error()
            }
            try {
                if (await Skill.findOne({ skill_name: skill }) == null) {
                    throw new Error()
                }
                else {
                    req.body.startdate = new Date(req.body.startdate);
                    req.body.enddate = new Date(req.body.enddate);
                    req.body.participants = foundParticipants
                    await activity.insertOne(req.body);
                    res.status(200).send({ message: "create success" });
                }
            } catch (err) {
                res.status(422).send({ message: "Data cannot be processed" })
            }
        } catch (err) {
            res.status(422).send({ message: "Data cannot be processed" })
        }

    }
    static async deleteActivity(req, res) {
        const { ID } = req.params;
        try {
            const foundActivity = await activity.findOne({ _id: ObjectId(ID) })
            if (foundActivity == null) {
                res.status(422).send({ message: "Data cannot be processed" })
            } else {
                await activity.deleteOne({ _id: ObjectId(ID) });
                res.status(200).send({ message: "delete success" });
            }
        } catch (err) {

        }
    }
    static async updateActivity(req, res) {
        const { ID } = req.params;
        const { participants, startdate, enddate } = req.body

        const foundActivity = await activity.findOne({ _id: ObjectId(ID) });
        if (foundActivity == null) {
            return res.status(422).send({ message: "Data cannot be processed" })
        }
        const { skill } = foundActivity;
        //validate participants
        if (participants !== undefined) {
            try {
                const foundParticipants = await user.find({ _id: { $in: participants.map(val => { return ObjectId(val) }) }, skill: { $all: [skill] } }, { projection: { password: 0, email: 0, username: 0 } }).toArray();
                if ((participants.length > 0 && foundParticipants.length != participants.length) || participants.length == 0 || foundParticipants.length == 0) {
                    throw new Error()
                }
            } catch (err) {
                return res.status(422).send({ message: "Data cannot be processed" })
            }

        }

        try {
            //validate date
            if (startdate !== undefined && enddate !== undefined) {
                req.body.startdate = new Date(startdate);
                req.body.enddate = new Date(enddate);

                if (new Date(enddate) < new Date(startdate)) {
                    throw new Error()
                }
            } else if (startdate === undefined && enddate !== undefined) {
                req.body.enddate = new Date(enddate);
                if (new Date(foundActivity.startdate) > new Date(enddate)) {
                    throw new Error()
                }
            } else if (startdate !== undefined && enddate === undefined) {
                req.body.startdate = new Date(startdate);
                if (new Date(startdate) > new Date(foundActivity.enddate)) {
                    throw new Error()
                }
            }
            await activity.updateOne({ _id: ObjectId(ID) }, { $set: req.body });
            res.status(200).send({ message: "update success" });

        } catch (err) {
            res.status(422).send({ message: "Data cannot be processed" })
        }
    }
    static async getAllActivities(req, res) {
        try {
            const { skill_id } = req.params;
            const foundSkill = await Skill.findOne({ _id: ObjectId(skill_id) })
            if (foundSkill === null) {
                res.status(422).send({ message: "Data cannot be processed" })
            } else {
                const data = await activity.find({ skill: foundSkill.skill_name }, {}).sort({ startdate: -1 }).toArray()
                res.status(200).send(data);
            }
        } catch (err) {
            res.status(422).send({ message: "Data cannot be processed" })
        }

    }
}
module.exports = ActivityContoller