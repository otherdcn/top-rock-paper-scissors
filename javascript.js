console.log("Hi there!");
console.log("I'm Lee, the computer :-D!");
console.log("Let's play a game of Rock, Papers, Scissors!");
console.log("--------------------------------------------");

const choices = ['rock','paper','scissors'];

function getplayerChoice() {
  let playerSelection;
  let wrongInput = false;

  do {
    const playerInput = prompt("Rock? Paper? Scissor?");

    playerSelection = playerInput.toLowerCase();

    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissor') {
      wrongInput = false;
    } else {
      alert(`Unkown input or misspelling (${playerInput}). Please type Rock, Paper or Scissor.`);
      wrongInput = true;
    }

  } while (wrongInput);

  return playerSelection
}

function getComputerChoice() {
  const computerSelection = Math.floor(Math.random()*choices.length);
  return choices[computerSelection];
}

const playerSelection = getplayerChoice();
const computerSelection = getComputerChoice();

console.log(`You chose: ${playerSelection}`);
console.log(`Lee chose: ${computerSelection}`);