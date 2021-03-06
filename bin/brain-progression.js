#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { username1 } from '../src/cli.js';

console.log('What number is missing in the progression?');
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

const censore = (array1) => {
  const rand5 = Math.floor(Math.random() * 10);
  answer = array1[rand5];
  const space = '..';
  const newmass = [];
  for (let n = 0; n < array1.length; n += 1) {
    if (n === rand5) {
      newmass.push(space);
    } else {
      newmass.push(array1[n]);
    }
  }
  return newmass;
};

const join = (array) => {
  const str = array.join(' ');
  return str;
};

let result = 0;
for (let i = 0; i < 3; i += 1) {
  console.log(`Question: ${join(censore(progression()))}`);
  const username5 = readlineSync.question('Your answer: ');

  if (Number(username5) === answer) {
    console.log('Correct!');
    result += 1;
  } else {
    console.log(`'${username5}' is wrong answer ;(. Correct answer was '${answer}'.`);
    break;
  }
}

if (result === 3) {
  console.log(`Congratulations, ${username1}!`);
} else {
  console.log(`Let's try again, ${username1}!`);
}
