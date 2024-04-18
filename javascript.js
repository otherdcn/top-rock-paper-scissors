console.log("Hi there!");
console.log("I'm Lee, the computer :-D!");
console.log("Let's play a game of Rock, Papers, Scissors!");
console.log("--------------------------------------------");

const choices = ['rock','paper','scissors'];

function getComputerChoice() {
  // const choices = ['rock','paper','scissors'];
  const computerSelection = Math.floor(Math.random()*choices.length);
  return choices[computerSelection];
}

console.log(`Computer chose: ${getComputerChoice()}`);