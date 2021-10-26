#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { username1 } from '../src/cli.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let result = 0;
for (let i = 0; i < 3; i += 1) {
  const rand = Math.floor(Math.random() * 98);
  console.log('Question: ' + rand);
  const username5 = readlineSync.question('Your answer: ');

  if ((rand % 2 === 0 && username5 === "yes") || (rand % 2 !== 0 && username5 === "no")) {
    console.log('Correct');
    result += 1;
  } else {
    if (rand % 2 === 0) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      break;
    } else if (rand % 2 !== 0) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      break;
    }
  }
}

if (result === 3) {
  console.log('Congratulations, ' + username1 + '!');
} else {
  console.log("Let's try again, " + username1 + '!');
}
