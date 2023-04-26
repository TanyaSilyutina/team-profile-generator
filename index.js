// Runs the app
const fs = require("fs");
const inquirer = require("inquirer");
const template = require("./src/template");
const managerClass = require("./lib/Manager");

async function init() {

    const team = [];
    const manager = await getManager();
    team.push(manager);

    // while user does not want to quit {
    //    prompt what do
    //    if what do add eng, add eng, etc,
    // }
    const managerPrompt = await inquirer.prompt([
        {
            type: "list",
            name: "next",
            message: "What's next? ",
            choices: ["Add engineer", "Add intern", "Finish building my team"],
        },
    ]);
    try {
        fs.writeFileSync("./dist/output.html", template(team));
        if (managerPrompt.next === "Finish building my team") {
            // return user input
        }

    } catch (err) {
        console.log("Logging the error: ", err);
    }


    console.log("Success. The file has been generated in the 'dist' folder.");
}

async function getEmployeeDetails(employeeType) {
    const {name, id, email} = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: `Please enter the team ${employeeType}'s name: `,
        },
        {
            type: "input",
            name: "id",
            message: `Please enter the team ${employeeType}'s employee ID: `,
        },
        {
            type: "input",
            name: "email",
            message: `Please enter the team ${employeeType}'s email: `,
        },
    ]);
    return {name, id, email};
}

async function getManager() {
    const {name, id, email} = await getEmployeeDetails("manager");
    const {managerOffice} = await inquirer.prompt([
        {
            type: "input",
            name: "managerOffice",
            message: "Please enter the team manager's office number: ",
        },
    ]);
    return new managerClass(name, id, email, managerOffice)
}


init();