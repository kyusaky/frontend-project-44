#!/usr/bin/env node

import welcomeUser from '../src/cli.js';
import { generationMathOperator, calcNums } from '../helpers/helpers.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = welcomeUser();

console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');

let count = 0;

for (let i = 0; i < 3; i = i + 1) {
  const num1 = Math.floor(Math.random() * 101);
  const num2 = Math.floor(Math.random() * 101);
  const operator = generationMathOperator();

  console.log(`Question: ${num1} ${operator} ${num2}`);
  const answer = readlineSync.question('Your answer: ');

  let result = calcNums(num1, num2, operator).toString();

  if (result === answer) {
    console.log('Currect!');
    count = count + 1;
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`, `Let's try again, ${name}!`);
    break;
  }
}

if (count === 3) {
  console.log(`Congratulations, ${name}!`);
}