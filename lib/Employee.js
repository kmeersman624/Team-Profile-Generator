// TODO: Write code to define and export the Employee class
// //The first class is an Employee parent class with the following properties and methods:

// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}
    this.getname = function () {
        return this.name;
    };
    this.getID = function () {
        return this.id;
    };
    this.getEmail = function () {
        return this.email;
    };
    this.getRole = Function () {
        return "Employee";
    };

module.exports = Employee;