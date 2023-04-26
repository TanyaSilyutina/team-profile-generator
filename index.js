// Runs the app
const fs = require("fs");
const inquirer = require("inquirer");
const template = require("./src/template");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

async function init() {

    const team = [];
    const manager = await getManager();
    team.push(manager);

    while(true){
        const {next} = await inquirer.prompt([
            {
                type: "list",
                name: "next",
                message: "What's next? ",
                choices: ["Add engineer", "Add intern", "Finish building my team"],
            },
        ]);
        if (next === "Finish building my team") {
            break;
        } else if (next === "Add engineer") {
            const engineer = await getEngineer();
            team.push(engineer);
        } else if (next === "Add intern") {
            const intern = await getIntern();
            team.push(intern);
        }
    }
    try {
        fs.writeFileSync("./dist/output.html", template(team));

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
    // validate name, id, email
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
    return new Manager(name, id, email, managerOffice);
}
async function getEngineer() {
    const {name, id, email} = await getEmployeeDetails("engineer");
    const {githubName} = await inquirer.prompt([
        {
            type: "input",
            name: "githubName",
            message: "Please enter the team's engineer GitHub username: ",
        },
    ]);
    return new Engineer(name, id, email, githubName);
}
async function getIntern() {
    const {name, id, email} = await getEmployeeDetails("intern");
    const {school} = await inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "Please enter the team's intern school: ",
        },
    ]);
    return new Intern(name, id, email, school);
}

init();