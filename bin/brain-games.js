#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { username3, username4, username5 } from '../src/cli.js';

console.log(username3);
readlineSync.question(username4);
console.log(username5);
