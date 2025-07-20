let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const idx = Math.floor(Math.random() * options.length);
  return options[idx];
};

const gameDraw = () => {
  console.log("Game was Draw.");
   msg.innerText = "The Game Was Draw! Play Again!";
   msg.style.backgroundColor = "#081b31"
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You Win");
    msg.innerText = 'You Win.';
    msg.style.backgroundColor = "Green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log ("You Lost")
    msg.innerText = 'You Lost.';
     msg.style.backgroundColor = "Red";
  }
  console.log(`Score: You ${userScore} - ${compScore} Computer`);
};


const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice =", compChoice);

  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else if (userChoice === "scissor") {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin);
  }
};

// Set up event listeners for all choice buttons
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    playGame(choiceId);
  });
});
