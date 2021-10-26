#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { username1 } from '../src/cli.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let result = 0;
for (let i = 0; i < 3; i += 1) {
  let presult = 0;
  const check = () => {
    const rand = Math.floor(Math.random() * 1000);
    for (let m = 1; m <= rand; m += 1) {
      if (rand % m === 0) {
        presult += 1;
      }
    }
    return rand;
  };

  const rand2 = check();
  console.log(`Question: ${rand2}`);
  const username5 = readlineSync.question('Your answer: ');

  if ((username5 === 'yes' && presult === 2) || (username5 === 'no' && presult !== 2)) {
    console.log('Correct!');
    result += 1;
  } else if (presult === 2) {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    break;
  } else if (presult !== 2) {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    break;
  }
}

if (result === 3) {
  console.log(`Congratulations, ${username1}!`);
} else {
  console.log(`Let's try again, ${username1}!`);
}
