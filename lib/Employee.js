class Employee {
    constructor(name, identity, email) {
        this.name = name;
        this.identity = identity;
        this.email = email;
    }
    // methods 
    getName() {
        return this.name;
    }
    getId() {
        return this.identity;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee; 