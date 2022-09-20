// Employee is the parent class
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, identity, email, github) {
        super(name, identity, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer; 