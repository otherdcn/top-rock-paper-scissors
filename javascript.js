console.log("Hi there!");
console.log("I'm Lee, the computer :-D!");
console.log("Let's play a game of Rock, Papers, Scissors!");

console.log("--------------------------------------------");

const choices = ['rock','paper','scissors'];
const scoreBoard = {
  'Player': 0,
  'Lee': 0,
  'Stalemate': 0
};

const playerScore = document.querySelector("#player_score");
const computerScore = document.querySelector("#computer_score");
const drawScore = document.querySelector("#stalemate_score");
const roundResultText = document.querySelector("#round_result");

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

function playGame(e) {
  let target = e.target;
  let playerSelection;
  let computerSelection = getComputerChoice();

  let result;

  switch(target.id) {
    case 'rock_button':
      playerSelection = "rock";
      result = playRound(playerSelection,computerSelection);
      break;
    case 'paper_button':
      playerSelection = "paper";
      result = playRound(playerSelection,computerSelection);
      break;
    case 'scissors_button':
      playerSelection = "scissors";
      result = playRound(playerSelection,computerSelection);
      break;
    default:
      console.log('Nothing was pressed');
      playerSelection = ":-(";
      break;
  }

  result = playRound(playerSelection,computerSelection);

  console.log(`You chose: ${playerSelection}`);
  console.log(`Lee chose: ${computerSelection}`);
  console.log(`You ${result}!`);

  roundResultText.textContent = `Result: You chose ${playerSelection} <---> Lee chose ${computerSelection} || You ${result}`;

  calculateScore(result);
}

const buttonDivCollection = document.querySelector("#option_buttons");
buttonDivCollection.addEventListener("click", playGame);

function calculateScore(result) {
  switch (result) {
    case 'win':
      scoreBoard['Player'] += 1;
      break;
    case 'lose':
      scoreBoard['Lee'] += 1;
      break;
    default:
      scoreBoard['Stalemate'] += 1;
      break;
  }

  for (const outcome in scoreBoard) {
    console.log(`- ${outcome}: ${scoreBoard[outcome]}`);
  }

  console.log("--------------------------------------------");

  playerScore.textContent = scoreBoard['Player'];
  computerScore.textContent = scoreBoard['Lee'];
  drawScore.textContent = scoreBoard['Stalemate'];
}