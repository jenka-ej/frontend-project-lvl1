#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { username1 } from '../src/cli.js';

console.log('Find the greatest common divisor of given numbers.');
let result = 0;
for (let i = 0; i < 3; i += 1) {
  const rand = Math.floor(Math.random() * 100);
  const rand1 = Math.floor(Math.random() * 100);
  console.log(`Question: ${rand} ${rand1}`);
  const username5 = readlineSync.question('Your answer: ');
  const nod = (num, num1) => {
    let del = 0;
    let del1 = 0;
    if (num < num1) {
      for (let m = num; m !== 0; m -= 1) {
        if (num1 % m === 0 && num % m === 0) {
          del = m;
          break;
        }
      }
      return del;
    }
    if (num > num1) {
      for (let m = num1; m !== 0; m -= 1) {
        if (num1 % m === 0 && num % m === 0) {
          del1 = m;
          break;
        }
      }
      return del1;
    }
    return num;
  };

  if (nod(rand, rand1) === Number(username5)) {
    console.log('Correct!');
    result += 1;
  } else {
    console.log(`'${username5}' is wrong answer ;(. Correct answer was '${nod(rand, rand1)}'.`);
    break;
  }
}

if (result === 3) {
  console.log(`Congratulations, ${username1}!`);
} else {
  console.log(`Let's try again, ${username1}!`);
}
