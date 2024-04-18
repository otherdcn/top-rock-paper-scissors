console.log("Hi there!");
console.log("I'm Lee, the computer :-D!");
console.log("Let's play a game of Rock, Papers, Scissors!");

console.log("--------------------------------------------");

const choices = ['rock','paper','scissors'];

function getPlayerChoice() {
  let playerSelection;
  let wrongInput = false;

  do {
    const playerInput = prompt("Rock? Paper? Scissors?");

    playerSelection = playerInput.toLowerCase();

    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
      wrongInput = false;
    } else {
      alert(`Unkown input or misspelling (${playerInput}). Please type Rock, Paper or Scissors.`);
      wrongInput = true;
    }

  } while (wrongInput);

  return playerSelection
}

function getComputerChoice() {
  const computerSelection = Math.floor(Math.random()*choices.length);
  return choices[computerSelection];
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(`You chose: ${playerSelection}`);
console.log(`Lee chose: ${computerSelection}`);

function playRound(playerSelection,computerSelection) {

  const possibleOutcomes = [['rock','rock','draw'],
                 ['rock','paper','lose'],
                 ['rock','scissors','win'],
                 ['paper','paper','draw'],
                 ['paper','scissors','lose'],
                 ['paper','rock','win'],
                 ['scissors','scissors','draw'],
                 ['scissors','rock','lose'],
                 ['scissors','paper','win']
                ];

  for (let i = 0; i < possibleOutcomes.length; i++) {
    if (playerSelection === possibleOutcomes[i][0] && computerSelection === possibleOutcomes[i][1]) {
      return `You ${possibleOutcomes[i][2]}!`;
    }
  }
}

console.log("--------------------------------------------");

const result = playRound(playerSelection,computerSelection);

console.log(result);