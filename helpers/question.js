module.exports = {
    questions: [{
            name: 'pname',
            type: 'input',
            message: 'Project name: ',
            validate: function (input) {
                if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
                else return 'Project name may only include letters, numbers, underscores and hashes.';
            }
        },

        {
            name: 'lang',
            type: 'list',
            message: 'Select Language: ',
            choices: [
                "nodejs"
            ]
        },

        {
            name: 'db',
            type: 'list',
            message: 'Select your Database: ',
            choices: [
                "neo4j",
                "postgresql",
                "other"
            ]
        },

        {
            name: 'architecture',
            type: 'list',
            message: "Select the Software Architecture: ",
            choices: [
                "monolithic",
                "microservices"
            ]
        },

        {
            name: 'api',
            type: 'list',
            message: "Select your Service type: ",
            choices: [
                "RESTful API",
                "GraphQL API"
            ],
            filter: (val) => {

                const first = val.charAt(0).toLowerCase();

                switch (first) {
                    case 'r':
                        return 'rest'
                    case 'g':
                        return 'graph'
                }
            }
        },

        {
            name: 'deploy',
            type: 'list',
            message: 'Select your deployement tool: ',
            choices: [
                "none",
                "docker"
            ]
        }
    ]
}