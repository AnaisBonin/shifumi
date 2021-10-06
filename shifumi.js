

const chalk = require('chalk');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pierre = "pierre";
const feuille = "feuille";
const ciseaux = "ciseaux";

const answers = [pierre, feuille, ciseaux];

const random = Math.floor(Math.random() * answers.length);
console.log(random, answers[random]);


rl.question(chalk.cyan(`${pierre} ${feuille} ${ciseaux} ?`), (answer) => {
    // TODO: Log the answer in a database

    if(!answers.includes(answer)){
    console.log('Wrong entry', answer);
    rl.close();
    return 
    }

    const robotChoice = answers[Math.floor(Math.random() * answers.length)];
    console.log(chalk.blue(`${answer}`));
    console.log (chalk.yellow(`Robot choice: ${robotChoice}`));


    if (answer == robotChoice) {
        console.log(chalk.bgWhiteBright(`Egalité`));
    } else if (
        (answer === pierre && robotChoice === ciseaux) ||
        (answer === feuille && robotChoice === pierre) ||
        (answer === ciseaux && robotChoice === feuille)
    ){
        console.log(chalk.bgGreenBright(`Gagné`));
    }else {
        console.log(chalk.bgRed(`Perdu`));
    }

    rl.close();
  });