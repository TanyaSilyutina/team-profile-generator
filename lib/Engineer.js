// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const employee = require("Employee");

class Engineer extends employee {
    constructor(name, id, email, githubName) {
        super(name, id, email);
        this.githubName = githubName;
    }
}
Engineer.prototype.getRole = function () {
    return "Engineer";
}
Engineer.prototype.getGithub = function () {};





// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'
