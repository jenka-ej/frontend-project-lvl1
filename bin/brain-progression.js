#!/usr/bin/env node
import { username1 } from '../src/cli.js';
import readlineSync from 'readline-sync';
export const username3 = console.log('What number is missing in the progression?');
let answer = 0;
const progression = () => {
	const randbeg = Math.floor(Math.random() * 10);
	const counter = Math.floor(Math.random() * 10);
	let presult = randbeg;
	const mass = [];
	mass.push(randbeg);
	for (let m = 0; m < 9; m += 1) {
		presult += counter;
		mass.push(presult);
	}
	return mass;
};
const censore = (array) => {
	const rand5 = Math.floor(Math.random() * 10)
	answer = array[rand5];
	for (let i = 0; i < array.length; i += 1) {
		if (i === rand5) {
			array[i] = '..'; 
		}
	}
	return array;
};
const join = (array) => {
	let str = array.join(' ');
	return str;
};
let result = 0;
for (let i = 0; i < 3; i += 1) {
	const username4 = console.log('Question: ' + join(censore(progression())));
	const username5 = readlineSync.question('Your answer: ');

	if (Number(username5) === answer) {
		console.log('Correct');
		result += 1;
	} else {
		console.log("'" + username5 + "' is wrong answer ;(. Correct answer was '" + answer + "'.");
		break;
	}

};
if (result === 3) {
        console.log('Congratulations, ' + username1 + '!');
} else {
        console.log("Let's try again, " + username1 + '!');
};
