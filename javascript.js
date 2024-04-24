const choices = ['rock','paper','scissors'];
const scoreBoard = {
  'Player': 0,
  'Lee': 0,
  'Stalemate': 0
};

const playerScore = document.querySelector("#player_score");
const computerScore = document.querySelector("#computer_score");
const drawScore = document.querySelector("#stalemate_score");
const roundResultText = document.querySelector("#result");

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
      break;
    case 'paper_button':
      playerSelection = "paper";
      break;
    case 'scissors_button':
      playerSelection = "scissors";
      break;
    default:
      playerSelection = ":-(";
      break;
  }

  result = playRound(playerSelection,computerSelection);

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

  playerScore.textContent = scoreBoard['Player'];
  computerScore.textContent = scoreBoard['Lee'];
  drawScore.textContent = scoreBoard['Stalemate'];

  for (const player in scoreBoard) {
    if ((scoreBoard[player] === 5) && (player !== 'Stalemate')) {
      announceWinner(player);
    }
  }
}

function announceWinner(player) {
  const restartButton = document.createElement("button");
  function reloadPage() {
    window.location.reload();
    return false;
  }

  switch(player){
    case 'Player':
      roundResultText.textContent = `Congratz! YOU WIN!`;
      roundResultText.style.backgroundColor = 'green';
      break;
    case 'Lee':
      roundResultText.textContent = `GAME OVER! I WIN!`;
      roundResultText.style.backgroundColor = 'red';
      break;
    default:
      roundResultText.textContent = `Woops! Error :-(`;
      roundResultText.style.backgroundColor = 'grey';
      break;
  }
  restartButton.textContent = "Restart Game"
  restartButton.style.width = "145px";

  buttonDivCollection.textContent = "";
  buttonDivCollection.appendChild(restartButton);

  restartButton.addEventListener("click", reloadPage);
}