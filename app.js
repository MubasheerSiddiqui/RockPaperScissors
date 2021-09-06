let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const resetButton = document.querySelector("#reset-btn");

const getComputerChoice = () => {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const converter = (choice) => {
  switch (choice) {
    case "r":
      return "Rock";
    case "p":
      return "Paper";
    case "s":
      return "Scissors";
  }
};
const win = (userChoice, computerChoice) => {
  userScore++;
  userScore_span.innerText = userScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML =
    converter(userChoice) +
    smallUserWord +
    " Beats " +
    converter(computerChoice) +
    smallCompWord +
    ". You win! 🔥";

  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add("green-glow");
  setTimeout(function () {
    userChoice_div.classList.remove("green-glow");
  }, 700);
};
const lose = (userChoice, computerChoice) => {
  computerScore++;
  computerScore_span.innerText = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML =
    converter(userChoice) +
    smallUserWord +
    " loses to " +
    converter(computerChoice) +
    smallCompWord +
    ". You Lose! ";
  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add("red-glow");
  setTimeout(function () {
    userChoice_div.classList.remove("red-glow");
  }, 700);
};
const draw = (userChoice, computerChoice) => {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML =
    converter(userChoice) +
    smallUserWord +
    " equals " +
    converter(computerChoice) +
    smallCompWord +
    ". It's a Draw!";

  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add("gray-glow");
  setTimeout(function () {
    userChoice_div.classList.remove("gray-glow");
  }, 700);
};
const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;

    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
};

const reset = () => {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerText = userScore;
  computerScore_span.innerText = computerScore;
  result_p.innerHTML = "Make your Move";
};

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));

  resetButton.addEventListener("click", reset);
}

main();
