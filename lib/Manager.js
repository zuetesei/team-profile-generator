// Employee is the parent class
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, identity, email, number) {
        super(name, identity, email);
        this.number = number;
    }
    getOfficeNumber() {
        return this.number;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;