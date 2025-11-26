const startBtn = document.querySelector("#start-btn");
const resetBtn = document.querySelector("#reset-btn");
const quizQuestion = document.querySelector("#quiz-question");
const timeEL = document.querySelector("#time");
const scoreEndgameEL = document.querySelector("#scoreEndgame");

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

const endGame = new bootstrap.Modal(document.getElementById("endGame"));

let score = 0;
let scoreEndgame = 0;
let answeredCount = 0;
let gameOver = false;
let x;

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
  let countDownDate = new Date().getTime() + 1000 * 60 * 0.125;
  x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    // กำหนดมิลิวินาทีใน 1 วัน
    const millisecondsPerDay = 86400000; // 1000 * 60 * 60 * 24
    // กำหนด 24 ชั่วโมง ใน 1 วัน
    const hoursPerDay = 24;
    // กำหนด 60 นาที ใน 1 ชั่วโมง
    const minutesPerHour = 60;
    // กำหนด 60 วินาที ใน 1 นาที
    const secondsPerMinute = 60;

    let minutesRemaining = Math.floor(
      (distance % (millisecondsPerDay / hoursPerDay)) /
        (millisecondsPerDay / hoursPerDay / minutesPerHour)
    );
    let secondsRemaining = Math.floor(
      (distance % (millisecondsPerDay / hoursPerDay / minutesPerHour)) /
        (millisecondsPerDay / hoursPerDay / minutesPerHour / secondsPerMinute)
    );
    if (minutesRemaining == 0 && secondsRemaining == 0) {
      countDownDate = new Date().getTime();
      gameOver = true;
      endGame.show();
    }
    console.log(gameOver);
    console.log(minutesRemaining);
    console.log(secondsRemaining);
    document.getElementById("timeMin").textContent = minutesRemaining;
    document.getElementById("timeSec").textContent = secondsRemaining;
  }, 1000);

  quizQuestion.style.display = "block";
  startBtn.style.display = "none";
  resetBtn.style.display = "block";
  timeEL.style.display = "block";
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
  clearInterval(x);
}

startBtn.addEventListener("click", function () {
  startGame();

  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastBootstrap.show();
  quizQuestionArr.forEach((quiz) => {
    document.querySelectorAll(`#quiz-${quiz.id} button`).forEach((button) => {
      button.addEventListener("click", function () {
        if (button.dataset.answer == quiz.questionAns) {
          button.classList.add("btn-success");
          score = score + 1;
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
          clearInterval(x);
          gameOver = true;
        }

        console.log(gameOver);
        button.classList.remove("btn-light");
      });
    });
  });
});
resetBtn.addEventListener("click", resetGame);
