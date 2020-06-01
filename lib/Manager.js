// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee {
  construtor(name, id, email, officeNumber) {
    super(name, id, email);
    this.number = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
