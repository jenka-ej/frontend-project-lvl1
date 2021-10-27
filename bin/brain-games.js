#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const username1 = readlineSync.question('May I have your name? ');
console.log(`Hello, ${username1}!`);
