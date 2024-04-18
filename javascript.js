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
      return possibleOutcomes[i][2];
    }
  }
}

function playGame() {
  const bestOf = 5;
  let roundsPlayed = 0;
  let result;
  const score = {
    'Player Wins': 0,
    'Lee Wins': 0,
    'Stalemate': 0
  };
  let playerSelection;
  let computerSelection;

  while (roundsPlayed < bestOf) {
    console.log('Round '+(roundsPlayed+1));

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection,computerSelection);

    console.log(`You chose: ${playerSelection}`);
    console.log(`Lee chose: ${computerSelection}`);

    console.log(`You ${result}!`);

    switch (result) {
      case 'win':
        score['Player Wins'] += 1;
        break;
      case 'lose':
        score['Lee Wins'] += 1;
        break;
      default:
        score['Stalemate'] += 1;
        break;
    }

    roundsPlayed++;
  }

  console.log("--------------------------------------------");

  for (const outcome in score) {
    console.log(`- ${outcome}: ${score[outcome]}`);
  }
}

playGame();