#!/usr/bin/env node
import { username1 } from '../src/cli.js';
import readlineSync from 'readline-sync';
export const username3 = console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let result = 0;
const check = () => {
	let rand = Math.floor(Math.random() * 1000);
	for (let i = 1; i <= rand; i += 1) {
		if (rand % i === 0) {
			presult += 1;
		}
	}
	return rand;
};
for (let i = 0; i < 3; i += 1) {
	let presult = 0;
	const check = () => {
        let rand = Math.floor(Math.random() * 1000);
        for (let i = 1; i <= rand; i += 1) {
                if (rand % i === 0) {
                        presult += 1;
	                }
	        }
	        return rand;
	};
	let rand2 = check();
	const username4 = console.log('Question: ' + rand2);
        const username5 = readlineSync.question('Your answer: ');

	if ((username5 === "yes" && presult === 2) || (username5 === "no" && presult!== 2)) {
		console.log('Correct!');
		result += 1;
	} else {
		if (presult === 2) {
			console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
			break;
		} else if (presult !== 2) {
			console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
			break;
		}
	}
};
if (result === 3) {
        console.log('Congratulations, ' + username1 + '!');
} else {
        console.log("Let's try again, " + username1 + '!');
};
