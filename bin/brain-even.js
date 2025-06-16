#!/usr/bin/env node

import readlineSync from 'readline-sync'
import welcomeUser from '../src/cli.js'
import { isCheckingNumber } from '../helpers/helpers.js'

console.log('Welcome to the Brain Games!')

const name = welcomeUser()
console.log(`Hello, ${name}!`)

console.log(`Answer "yes" if the number is even, otherwise answer "no".`)

let count = 0

for (let i = 0; i < 3; i = i + 1) {
  const num = Math.floor(Math.random() * 101)
  console.log(`Question: ${num}`)
  const answer = readlineSync.question('Your answer: ')

  if (isCheckingNumber(num, answer)) {
    console.log('Currect!')
    count = count + 1
  }
  else {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`, `Let's try again, ${name}!`)
    break
  }
}

if (count === 3) {
  console.log(`Congratulations, ${name}!`)
}