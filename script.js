const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');
const playerContainer = document.getElementById('player');
const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerContainer = document.getElementById('computer');
const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

// Highlight user choice
const highlightChoice = element => {
  element.classList.replace('far', 'fas');
  element.style.color = '#000';
};

// Reset all selected icons
const resetSelected = () => {
  // Reset selected icons
  allGameIcons.forEach(icon => {
    icon.classList.replace('fas', 'far');
    if (playerContainer.contains(icon)) icon.style.color = '#061161';
    else icon.style.color = '#780206';
  });
  confetti.reset()
};

// Reset score & playerChoice/computerChoice
const resetAll = () => {
  playerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  playerChoiceEl.textContent = '';
  computerScoreNumber = 0;
  computerScoreEl.textContent = computerScoreNumber;
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
  resetSelected();
};

// Random computer choice
const computerRandomChoice = () => {
  const computerChoiceNumber = Math.floor(Math.random() * 5) + 1;
  if (computerChoiceNumber === 1) computerChoice = 'rock';
  if (computerChoiceNumber === 2) computerChoice = 'paper';
  if (computerChoiceNumber === 3) computerChoice = 'scissors';
  if (computerChoiceNumber === 4) computerChoice = 'lizard';
  if (computerChoiceNumber === 5) computerChoice = 'spock';
};

// Add 'selected' styling & update computer choice
const displayComputerChoice = () => {
  switch (computerChoice) {
    case 'rock':
      highlightChoice(computerRock);
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      highlightChoice(computerPaper);
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      highlightChoice(computerScissors);
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      highlightChoice(computerLizard);
      computerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      highlightChoice(computerSpock);
      computerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
};

// Check result, increase scores, update resultText
const updateScore = playerChoice => {
  // Check for tie
  if (playerChoice === computerChoice) {
    resultText.textContent = "That's a tie 👔";
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.includes(computerChoice)) {
      confetti({
        spread: 180,
        particleCount: 250,
      });
      playerScoreNumber++;
      resultText.textContent = 'You Won! 🎈';
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      computerScoreNumber++;
      resultText.textContent = 'You Lost... ☹';
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
};

// Call functions to process turn
const checkResult = playerChoice => {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
};

// Passing player selection value and styling icon
const select = playerChoice => {
  checkResult(playerChoice);
  // Add 'selected' class & update player choice
  switch (playerChoice) {
    case 'rock':
      highlightChoice(playerRock);
      playerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      highlightChoice(playerPaper);
      playerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      highlightChoice(playerScissors);
      playerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      highlightChoice(playerLizard);
      playerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      highlightChoice(playerSpock);
      playerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
};
