const generateTeamProfile = team => {
    console.log(team);
    const html = [];

    const generateManagerCard = manager => {
        console.log(manager);
        let managerHTML = `
        <div class="card border border-info col-3 .col-sm-6 mr-3 my-3">
            <div class="card-header"> 
            <i class="fa-solid fa-lg fa-user"></i> Manager
            </div>
            <div class="card-body">
            <h3 class="card-title"> ${manager.name} </h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fw-lighter"> ID: ${manager.identity}</li>
                <li class="list-group-item fw-lighter"> Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                <li class="list-group-item fw-lighter"> Office Number: ${manager.number}</li>
            </ul>
            </div>
        </div>
        `;
        html.push(managerHTML);
    }

    const generateEngineerCard = engineer => {
        console.log(engineer);
        let engineerHTML = `
        <div class="card border border-info col-3 .col-sm-6 mr-3 my-3">
            <div class="card-header">
            <i class="fa-solid fa-lg fa-hammer"></i> Engineer
            </div>
            <div class="card-body">
            <h3 class="card-title"> ${engineer.name} </h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fw-lighter"> ID: ${engineer.identity}</li>
                <li class="list-group-item fw-lighter"> Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                <li class="list-group-item fw-lighter"> Github Profile: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
            </div>
        </div>
        `;
        html.push(engineerHTML)
    }

    const generateInternCard = intern => {
        let internHTML = `
        <div class="card border border-info col-3 .col-sm-6 mr-3 my-3">
            <div class="card-header"> 
            <i class="fa-solid fa-lg fa-seedling"></i> Intern
            </div>
            <div class="card-body">
            <h3 class="card-title"> ${intern.name} </h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item fw-lighter"> ID: ${intern.identity}</li>
                <li class="list-group-item fw-lighter"> Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li class="list-group-item fw-lighter"> School: ${intern.school}</li>
            </ul>
            </div>
        </div>
        `;
        html.push(internHTML)
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManagerCard(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineerCard(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateInternCard(team[i]);
        }
    }

    return html.join('');

};

module.exports = team => {
    return ` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/83aacc2b97.js" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500&display=swap" rel="stylesheet">
        <title> Dev Team Profile </title>
        <style>
        header, 
        body {
            font-family: 'Montserrat';
            font-weight: 500;
        }
      </style>
    </head>

    <header>
    <h1 class="bg-info text-white text-center"> Meet the XYZ Dev Team </h1>
    </header>
    
    <body>
    <main>
    <div class="container">
        <div class="row justify-content-center"> ${generateTeamProfile(team)} </div>
    </div>
    </main>
   
    </body>
    </html>`
};