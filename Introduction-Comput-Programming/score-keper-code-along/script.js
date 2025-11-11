let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");

let p1Button = document.querySelector("#p1Button");
let p2Button = document.querySelector("#p2Button");
let resetButton = document.querySelector("#reset");

let playto = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;

let winningScore = 3;
let isGameOver = false;

function initGame() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;

  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;

  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("winner", "loser");
}

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score == winningScore) {
      isGameOver = true;
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
    }
  }
  p1Display.textContent = p1Score;
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score == winningScore) {
      isGameOver = true;
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
    }
  }
  p2Display.textContent = p2Score;
});

resetButton.addEventListener("click", initGame);

playto.addEventListener("change", function () {
  winningScore = Number(this.value);
  initGame();
});
