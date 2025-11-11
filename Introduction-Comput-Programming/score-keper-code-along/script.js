let resetButton = document.querySelector("#reset");

let playto = document.querySelector("#playto");

let winningScore = 3;
let isGameOver = false;

let p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

let p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

function initGame() {
  isGameOver = false;
  p1.score = 0;
  p2.score = 0;

  p1.display.textContent = p1.score;
  p2.display.textContent = p2.score;

  p1.display.classList.remove("winner", "loser");
  p2.display.classList.remove("winner", "loser");
}

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score == winningScore) {
      isGameOver = true;
      player.button.disable = true;
      opponent.button.disable = true;
      player.display.classList.add("winner");
      opponent.display.classList.add("loser");
    }
    player.display.textContent = player.score;
  }
}

p1Button.addEventListener("click", function () {
  updateScore(p1, p2);
});
p2Button.addEventListener("click", function () {
  updateScore(p2, p1);
});
resetButton.addEventListener("click", initGame);

playto.addEventListener("change", function () {
  winningScore = Number(this.value);
  initGame();
});
