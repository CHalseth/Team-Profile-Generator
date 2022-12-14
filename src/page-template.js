const managerCardCreator = (Manager) => {
    const { name, ID, email, number } = Manager;

    return `
    <div class = "column is-one-quarter m-4>
        <div class = "card">
            <div class = "card-content has-background-link">
                <p class = "title has-text-white">${name}</p>
                <p class = "subtitle has-text-white">
                <span class = "icon">
                <i class = "fa-solid fa-mug-hot"></i>
                </span> Manager</p>
            </div>
            <div class = "card-content has-background-link-light">
                <p class = "p-2 mb-1 mt-4 box">ID: ${ID}</p>
                <p class = "p-2 my-1 box">Email: <a href = "mailto: ${email}">${email}</a></p>
                <p class = "p-2 mt-1 mb-4 box">Office Number: ${number}</p>
            </div>
        </div>
    </div>
    `;
};

const internCardCreator = (Intern) => {
    const { name, ID, email, school } = Intern;
    console.log(Intern);
    return `
    <div class = "column is-one-quarter m-4">
        <div class = "card">
            <div class = "card-content has-background-link">
                <p class = "title has-text-white">${name}</p>
                <p class = "subtitle has-text-white">
                <span class = "icon">
                <i class = "fa-solid fa-graduation-cap"></i>
                </span> Intern</p>
            </div>
            <div class = "card-content has-background-link-light">
                <p class = "p-2 mb-1 mt-4 box">ID: ${ID}</p>
                <p class = "p-2 my-1 box">Email: <a href = "mailto: ${email}">${email}</a></p>
                <p class = "p-2 mt-1 mb-4 box">School: ${school}</p>
            </div>
        </div>
    </div>
    `;
};

const engineerCardCreator = (Engineer) => {
    console.log(Engineer);
    const { name, ID, email, github } = Engineer;
    return `
    <div class = "column is-one-quarter m-4">
        <div class = "card">
            <div class = "card-content has-background-link">
                <p class = "title has-text-white">${name}</p>
                <p class = "subtitle has-text-white">
                <span class = "icon">
                <i class = "fa-solid fa-glasses"></i>
                </span> Engineer</p>
            </div>
            <div class = "card-content has-background-link-light">
                <p class = "p-2 mb-1 mt-4 box">ID: ${ID}</p>
                <p class = "p-2 my-1 box"> Email: <a href = "mailto: ${email}">${email}</a></p>
                <p class = "p-2 my-1 mb-4 box">'Github: <a href = "https://github.com/${github}" target = "_blank">${github}</a></p>
            </div>
        </div>
    </div>
    `;
};

const employeeCardSeperator = (employees) => {
    const employeesTemplates = employees.map((employee) => {
        const role = employee.getRole();
        if (role === 'Manager') {
            console.log(employee);
            return managerCardCreator(employee);
        }
        if (role === 'Engineer') {
            return engineerCardCreator(employee);
        }
        if (role === 'Intern') {
            return internCardCreator(employee);
        }
    });
    return employeesTemplates.join('');
};
module.exports = (templateData) => {
    console.log(templateData);
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset = "UTF-8">
            <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
            <meta http-equiv = "X-UA-Compatible" content = "ie=edge">
            <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity = "sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin = "anonymous" referrerpolicy = "no-referrer"/> 
            <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
            <title>MyTeam Profile</title>
        </head><link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity = "sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin = "anonymous" referrerpolicy = "no-referrer" />
        
        <body>
        <header>
        <div class = "is-flex is-justify-content-center has-background-danger has-text-white is-size-2 p-5 mb-6">
            <h1>My Team</h1>
        </div>
        </header>
        <div class = "column is-centered is-multiline">
            
            ${employeeCardSeperator(templateData)}
            
        </div>
        </body>
        `;
};
