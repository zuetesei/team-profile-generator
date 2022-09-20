// Employee is the parent class
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, identity, email, school) {
        super(name, identity, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern; 