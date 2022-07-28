const createDb = require("./create-db");
const createTableActivities = require("./create-table-activities");
const createTableSkills = require("./create-table-skills");
const createTableUsers = require("./create-table-users");

async function run () {
    await createDb();
    await createTableActivities()
    await createTableSkills();
    await createTableUsers();
    process.exit(0);
}
run()