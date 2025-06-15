#!/usr/bin/env node.
import welcomeUser from 'frontend-project-44\src\cli.js';
console.log('Welcome to the Brain Games!')

const name = welcomeUser()

console.log(`Hello, ${name}!`)