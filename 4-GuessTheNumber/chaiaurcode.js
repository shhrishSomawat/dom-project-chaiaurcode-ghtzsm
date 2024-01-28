//generating random number between 1 to 100

const randNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlots = document.querySelector('.guesses');
const Remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
