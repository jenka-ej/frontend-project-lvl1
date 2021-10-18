#!/usr/bin/env node
import { username1 } from '../src/cli.js';
import readlineSync from 'readline-sync';
export const username3 = console.log('What is the result of the expression?');
let result = 0;
for (let i = 0; i < 1; i += 1) {
        const rand = Math.floor(Math.random() * 98);
	const rand1 = Math.floor(Math.random() * 98);
	const rand2 = Math.floor(Math.random() * 98);
	const rand3 = Math.floor(Math.random() * 98);
	const rand4 = Math.floor(Math.random() * 98);
	const rand5 = Math.floor(Math.random() * 98);
	const expression1 = rand + rand1;
	const expression2 = rand2 - rand3;
	const expression3 = rand4 * rand5;
        const username4 = console.log('Question: ' + rand + ' + ' + rand1);
        const username5 = readlineSync.question('Your answer: ');

        if (Number(username5) === expression1) {
                console.log('Correct');
                result += 1;
        } else {
                console.log("'" + username5 + "'" + " is wrong answer ;(. Correct answer was '" + expression1 + "'.");
                break;
        }

	const username6 = console.log('Question: ' + rand2 + ' - ' + rand3);
	const username7 = readlineSync.question('Your answer: ');

	if (Number(username7) === expression2) {
                console.log('Correct');
                result += 1;
        } else {
                console.log("'" + username7 + "'" + " is wrong answer ;(. Correct answer was '" + expression2 + "'.");
                break;
        }

	const username8 = console.log('Question: ' + rand4 + ' * ' + rand5);
	const username9 = readlineSync.question('Your answer: ');
	
	if (Number(username9) === expression3) {
                console.log('Correct');
                result += 1;
        } else {
                console.log("'" + username9 + "'" + " is wrong answer ;(. Correct answer was '" + expression3 + "'.");
                break;
        }
};

if (result === 3) {
        console.log('Congratulations, ' + username1 + '!');
} else {
        console.log("Let's try again, " + username1 + '!');
};
