const Inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const generateSite = require('./src/generate-page');
const { default: inquirer } = require('inquirer');

// empty array to hold all team members that will be entered by user
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is your Employee ID Number? (Required)',
            validate: employeeID => {
                if (employeeID) {
                    return true;
                } else {
                    console.log("Please enter your Employee ID Number!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'What is your email address? (Required)',
            validate: employeeEmail => {
                if (employeeEmail) {
                    return true;
                } else {
                    console.log("Please enter your email address!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number? (Required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log("Please enter your office number!")
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeID, answers.employeeEmail, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select a type of employee you would like to add:',
            choices: ['Engineer', 'Intern', 'Team complete.']
        }
    ]).then(userChoice => {
        switch (userChoice.menu) {
            case 'Engineer':
                promptEngineer();
                break;
            case 'Intern':
                promptIntern();
                break;
            default:
                buildTeam();
        }
    })
};

const promptEngineer = () => {
    console.log(`
    =================
    Add a New Engineer
    =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Engineer\'s name? (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log("Please enter Engineer's name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is your Engineer\'s Employee ID Number? (Required)',
            validate: employeeID => {
                if (employeeID) {
                    return true;
                } else {
                    console.log("Please enter your Engineer's ID Number!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'What is your email address? (Required)',
            validate: employeeEmail => {
                if (employeeEmail) {
                    return true;
                } else {
                    console.log("Please enter your email address!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!')
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeID, answers.employeeEmail, answers.github);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`
    =================
    Add a New Intern
    =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Intern\'s name? (Required)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log("Please enter Intern's name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is your Intern\'s Employee ID Number? (Required)',
            validate: employeeID => {
                if (employeeID) {
                    return true;
                } else {
                    console.log("Please enter your Intern's ID Number!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'What is your email address? (Required)',
            validate: employeeEmail => {
                if (employeeEmail) {
                    return true;
                } else {
                    console.log("Please enter your email address!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does your intern attend?',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter the intern\'s school!')
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeID, answers.employeeEmail, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log(`
    ======================
    Finished generating your team profile! 
    ======================
    `);
}

// file system to create HTML 

promptManager();


