const startBtn = document.querySelector("#start-btn");
const resetBtn = document.querySelector("#reset-btn");
const quizQuestion = document.querySelector("#quiz-question");

function startGame() {
  quizQuestion.style.display = "block";
  startBtn.style.display = "none";
  resetBtn.style.display = "block";
}

function resetGame() {
  quizQuestion.style.display = "none";
  startBtn.style.display = "block";
  resetBtn.style.display = "none";
}

startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);
