const inquirer = require('inquirer');
const {questions} = require('./helpers/question.js');

const bootstrap = async () => {

    await inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
    });
    
}

bootstrap();