// Runs the app
const fs = require("fs");
const inquirer = require("inquirer");
const template = require("./src/template");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Generate the output
async function init() {

    const team = [];
    const manager = await getManager();
    team.push(manager);

    while (true) {
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
// Get answers for the repeated 3 questions
async function getEmployeeDetails(employeeType) {
    const {name, id, email} = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: `Please enter the team ${employeeType}'s name: `,
            validate: function (name) {
                // Check that string is not just whitespace and is not empty
                let valid = /\S/.test(name) && name.length > 0;
                if (!valid) {
                    console.log(" (!) Please enter a valid name.");
                } else {
                    return true;
                }
            },
        },
        {
            type: "input",
            name: "id",
            message: `Please enter the team ${employeeType}'s employee ID: `,
            validate: function (id) {
                // Check that string is not just whitespace and is not empty
                let valid = /\S/.test(id) && id.length > 0;
                if (!valid) {
                    console.log(" (!) Please enter a valid employee ID.");
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: `Please enter the team ${employeeType}'s email: `,
            validate: function (email) {
                // Check for valid email address
                let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (!valid) {
                    console.log(" (!) Please enter a valid email address.");
                } else {
                    return true;
                }
            }
        },
    ]);
    return {name, id, email};
}
// Get manager inputs
async function getManager() {
    const {name, id, email} = await getEmployeeDetails("manager");
    const {managerOffice} = await inquirer.prompt([
        {
            type: "input",
            name: "managerOffice",
            message: "Please enter the team manager's office number: ",
            validate: function (managerOffice) {
                // Check that string is not just whitespace and is not empty
                let valid = /\S/.test(managerOffice) && managerOffice.length > 0;
                if (!valid) {
                    console.log(" (!) Please enter a valid manager office.");
                } else {
                    return true;
                }
            },
        },
    ]);
    return new Manager(name, id, email, managerOffice);
}

// Get engineer inputs
async function getEngineer() {
    const {name, id, email} = await getEmployeeDetails("engineer");
    const {githubName} = await inquirer.prompt([
        {
            type: "input",
            name: "githubName",
            message: "Please enter the team's engineer GitHub username: ",
            validate: function (githubName) {
                // Check that string is not just whitespace and is not empty
                let valid = /\S/.test(githubName) && githubName.length > 0;
                if (!valid) {
                    console.log(" (!) Please enter a valid GitHub username.");
                } else {
                    return true;
                }
            },
        },
    ]);
    return new Engineer(name, id, email, githubName);
}

// Get intern inputs
async function getIntern() {
    const {name, id, email} = await getEmployeeDetails("intern");
    const {school} = await inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "Please enter the team's intern school: ",
            validate: function (school) {
                // Check that string is not just whitespace and is not empty
                let valid = /\S/.test(school) && school.length > 0;
                if (!valid) {
                    console.log(" (!) Please enter a valid school name.");
                } else {
                    return true;
                }
            },
        },
    ]);
    return new Intern(name, id, email, school);
}

init();