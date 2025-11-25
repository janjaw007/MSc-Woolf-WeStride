const startBtn = document.querySelector("#start-btn");
const resetBtn = document.querySelector("#reset-btn");
const quizQuestion = document.querySelector("#quiz-question");
// const scoreEL = document.querySelector("#score");
const scoreEndgameEL = document.querySelector("#scoreEndgame");

// const toastTrigger = document.getElementById("liveToastBtn");
// const toastLiveExample = document.getElementById("liveToast");

const endGame = new bootstrap.Modal(document.getElementById("endGame"));

let score = 0;
let scoreEndgame = 0;
let answeredCount = 0;
let gameOver = false;

const quizQuestionArr = [
  {
    id: 1,
    questionTitle: "1. ประตูกลัวอะไร",
    questionChoiceA: "1. กลัวไฟ",
    questionChoiceB: "2. กลัวน้ำ",
    questionChoiceC: "3. กลัวลม",
    questionAns: "A",
  },
  {
    id: 2,
    questionTitle: "2. เงินสกุลอะไรน่ากลัวที่สุด",
    questionChoiceA: "1. เงินยูโร",
    questionChoiceB: "2. เงินปอนด์",
    questionChoiceC: "3. เงินบาท",
    questionAns: "C",
  },
];

function startGame() {
  quizQuestion.style.display = "block";
  startBtn.style.display = "none";
  resetBtn.style.display = "block";
  // scoreEL.style.display = "block";
  gameOver = false;

  quizQuestionArr.forEach((quiz) => {
    quizQuestion.insertAdjacentHTML(
      "beforeend",
      `<div class="quiz-item my-4" data-question-id="${quiz.id}" id="quiz-${quiz.id}">
          <div class="mb-3">
            <h6>${quiz.questionTitle}</h6>
          </div>

          <div class="d-flex flex gap-3">
            <button class="btn btn-light w-100 text-start" data-answer="A">
              ${quiz.questionChoiceA}
            </button>
            <button class="btn btn-light w-100 text-start" data-answer="B">
              ${quiz.questionChoiceB}
            </button>
            <button class="btn btn-light w-100 text-start" data-answer="C">
              ${quiz.questionChoiceC}
            </button>
          </div>
        </div>`
    );
  });
}

function resetGame() {
  // scoreEL.textContent = 0;
  scoreEndgameEL.textContent = 0;
  score = 0;
  scoreEndgame = 0;
  quizQuestion.style.display = "none";
  quizQuestion.innerHTML = "";
  startBtn.style.display = "block";
  resetBtn.style.display = "none";
  // scoreEL.style.display = "none";
  answeredCount = 0;
  gameOver = false;
}

startBtn.addEventListener("click", function () {
  startGame();
  quizQuestionArr.forEach((quiz) => {
    document.querySelectorAll(`#quiz-${quiz.id} button`).forEach((button) => {
      button.addEventListener("click", function () {
        if (button.dataset.answer == quiz.questionAns) {
          button.classList.add("btn-success");
          score = score + 1;
          // scoreEL.textContent = score;
          document
            .querySelectorAll(`#quiz-${quiz.id} button`)
            .forEach((button) => {
              button.disabled = true;
            });
        } else {
          document
            .querySelector(
              `#quiz-${quiz.id} button[data-answer="${quiz.questionAns}"]`
            )
            .classList.remove("btn-light");
          document
            .querySelector(
              `#quiz-${quiz.id} button[data-answer="${quiz.questionAns}"]`
            )
            .classList.add("btn-warning");
          button.classList.add("btn-danger");
          document
            .querySelectorAll(`#quiz-${quiz.id} button`)
            .forEach((button) => {
              button.disabled = true;
            });
        }
        answeredCount++;
        if (answeredCount == quizQuestionArr.length) {
          console.log(score);
          endGame.show();
          scoreEndgameEL.textContent = score;
          gameOver = true;
        }

        console.log(gameOver);

        // const toastBootstrap =
        //   bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        button.classList.remove("btn-light");
        // toastBootstrap.show();
      });
    });
  });
});
resetBtn.addEventListener("click", resetGame);
