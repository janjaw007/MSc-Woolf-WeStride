const startBtn = document.querySelector("#start-btn");
const resetBtn = document.querySelector("#reset-btn");
const quizQuestion = document.querySelector("#quiz-question");

let score = 0;

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
  document.querySelector("#score").textContent = 0;
  score = 0;
  quizQuestion.style.display = "none";
  quizQuestion.innerHTML = "";
  startBtn.style.display = "block";
  resetBtn.style.display = "none";
}

startBtn.addEventListener("click", function () {
  startGame();
  quizQuestionArr.forEach((quiz) => {
    document.querySelectorAll(`#quiz-${quiz.id} button`).forEach((button) => {
      button.addEventListener("click", function () {
        if (button.dataset.answer == quiz.questionAns) {
          console.log("Right Answer");
          score = score + 1;
          document.querySelector("#score").textContent = score;
          console.log(score);
          document
            .querySelectorAll(`#quiz-${quiz.id} button`)
            .forEach((button) => {
              button.disabled = true;
            });
        } else {
          console.log("Wrong Answer");
          document
            .querySelectorAll(`#quiz-${quiz.id} button`)
            .forEach((button) => {
              button.disabled = true;
            });
        }
      });
    });
  });
});
resetBtn.addEventListener("click", resetGame);
