const generateTeamProfile = team => {
    console.log(team);
    const html = [];

    const generateManagerCard = manager => {
        console.log(manager);
        let managerHTML = `
        <div class="card">
            <div class="card-header">
            ${manager.name} 
            </div>
            <ul class="list-group">
                <li class="list-group-item"> ID: ${manager.managerID}></li>
                <li class="list-group-item"> Email: <span id="email"><a href="mailto:${manager.managerEmail}">${manager.managerEmail}</a></span></li>
                <li class="list-group-item"> Office Number: ${manager.managerOfficeNumber}</li>
            </ul>
        </div>
        `;
        html.push(managerHTML);
    }

    const generateEngineerCard = engineer => {
        console.log(engineer);
        let engineerHTML = `
        <div class="card">
            <div class="card-header">
            ${engineer.name}
            </div>
            <ul class="list-group">
                <li class="list-group-item"> ID: ${engineer.employeeID}></li>
                <li class="list-group-item"> Email: <span id="email"><a href="mailto:${engineer.employeeEmail}">${engineer.employeeEmail}</a></span></li>
                <li class="list-group-item"> Office Number: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        `;
        html.push(engineerHTML)
    }

    const generateInternCard = intern => {
        let internHTML = `
        <div class="card">
            <div class="card-header">
            ${intern.name}
            </div>
            <ul class="list-group">
                <li class="list-group-item"> ID: ${intern.employeeID}></li>
                <li class="list-group-item"> Email: <span id="email"><a href="mailto:${intern.employeeEmail}">${intern.employeeEmail}</a></span></li>
                <li class="list-group-item"> Office Number: ${intern.school}</li>
            </ul>
        `;
        html.push(internHTML)
    }


};

module.exports = team => {
    return ` 
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title> Team Profiles </title>
    </head>

    <body>
    <main>
        ${generateTeamProfile(team)}
    </main>
    </body>
    </html>`
};