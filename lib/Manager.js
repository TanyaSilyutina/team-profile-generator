// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}
Manager.prototype.getRole = function () {
    return "Manager";
}

Manager.prototype.getOfficeNumber = function() {
    return this.officeNumber;
}

const testManager = new Manager();

module.exports = Manager;

// The other three classes will extend Employee.
// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'
