// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require("Employee");

class Intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}
Intern.prototype.getRole = function () {
    return "Intern";
}

Intern.prototype.getSchool = function () {};

// In addition to Employee's properties and methods, Intern will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern'