let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("submitGuess").addEventListener("click", function () {
  const numberOfAttempts = document.getElementById("numberOfAttempts");
  const userGuess = Number(document.getElementById("guessInput").value);
  attempts++;
  numberOfAttempts.innerText = `Number of guesses: ${attempts}`;
  let message = "";

  if (userGuess === randomNumber) {
    message = `Congratulations! You guessed the number in ${attempts} attempts`;
    document.getElementById("resultMessage").style.color = "green";
    resetGame();
  } else if (userGuess > randomNumber) {
    message = `Too big! Try a smaller number.`;
    document.getElementById("resultMessage").style.color = "red";
  } else if (userGuess < randomNumber) {
    message = `Too small! Try a bigger number.`;
    document.getElementById("resultMessage").style.color = "red";
  }

  document.getElementById("resultMessage").textContent = message;
});

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
}
