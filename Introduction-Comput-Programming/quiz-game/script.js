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
    questionChoiceA: "1. กลัวไฟ (หนีไฟ)",
    questionChoiceB: "2. กลัวน้ำ",
    questionChoiceC: "3. กลัวลม",
    questionAns: "A",
  },
  {
    id: 2,
    questionTitle: "2. เงินสกุลอะไรน่ากลัวที่สุด",
    questionChoiceA: "1. เงินยูโร",
    questionChoiceB: "2. เงินปอนด์",
    questionChoiceC: "3. เงินบาท (บาดเจ็บ)",
    questionAns: "C",
  },
  {
    id: 3,
    questionTitle: "3. งูอะไรอยู่บนหัว",
    questionChoiceA: "1. งูเหลือม",
    questionChoiceB: "2. งูเห่า (เหา)",
    questionChoiceC: "3. งูหลาม",
    questionAns: "B",
  },
  {
    id: 4,
    questionTitle: "4. ม้าอะไรสีแดง",
    questionChoiceA: "1. ม้าลาย",
    questionChoiceB: "2. ม้านิลมังกร",
    questionChoiceC: "3. มะเขือเทศ",
    questionAns: "C",
  },
  {
    id: 5,
    questionTitle: "5. กาอะไรมี 4 ขา",
    questionChoiceA: "1. กาแฟ",
    questionChoiceB: "2. เก้าอี้",
    questionChoiceC: "3. กางเกง",
    questionAns: "B",
  },
  {
    id: 6,
    questionTitle: "6. ไฟอะไรหนี้เยอะที่สุด",
    questionChoiceA: "1. ไฟไหม้",
    questionChoiceB: "2. ไฟแดง",
    questionChoiceC: "3. ไฟแนนซ์",
    questionAns: "C",
  },
  {
    id: 7,
    questionTitle: "7. จังหวัดอะไรไม่มีไฟ ใช้เทียนไขตลอด",
    questionChoiceA: "1. ยะลา",
    questionChoiceB: "2. เพชรบุรี (เพ็ด-ซะ-วิต-บุรี)",
    questionChoiceC: "3. กระบี่",
    questionAns: "B",
  },
  {
    id: 8,
    questionTitle: "8. ปลาอะไรทำแผลได้",
    questionChoiceA: "1. ปลาเก๋า",
    questionChoiceB: "2. ปาเจโร่",
    questionChoiceC: "3. พลาสเตอร์ (ปลา-สเตอร์)",
    questionAns: "C",
  },
  {
    id: 9,
    questionTitle: "9. เกาะอะไรมีเสาเยอะที่สุด",
    questionChoiceA: "1. เกาะเสม็ด",
    questionChoiceB: "2. เกาะล้าน",
    questionChoiceC: "3. เกาะกลางถนน",
    questionAns: "C",
  },
  {
    id: 10,
    questionTitle: "10. ซุปอะไรมีของขายเยอะที่สุด",
    questionChoiceA: "1. ซูเปอร์มาร์เก็ต",
    questionChoiceB: "2. ซุปหน่อไม้",
    questionChoiceC: "3. ซุปไก่สกัด",
    questionAns: "A",
  },
];
function startGame() {
  let countDownDate = new Date().getTime() + 1000 * 60 * 1.5;
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
      let message = score >= 5 ? "สุดยอดเซียนถามตอบ! 🎉" : "พยายามอีกนิดนะ!";

      // 1. สร้างตัวแปรดึง 'กล่องขาว' (Dialog) ออกมาเพื่อใส่ Effect
      const modalDialog = document.querySelector("#endGame .modal-dialog");

      // 2. ยัด Class เด้งดึ๋งเข้าไปที่กล่องขาว
      modalDialog.classList.add("animate__animated", "animate__zoomInDown");
      endGame.show();
      scoreEndgameEL.textContent = `${score} / ${quizQuestionArr.length} คะแนน (${message})`;
      clearInterval(x);
      gameOver = true;
    }

    document.getElementById("timeMin").textContent = minutesRemaining;
    document.getElementById("timeSec").textContent =
      secondsRemaining < 10 ? "0" + secondsRemaining : secondsRemaining;
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
  toastLiveExample.classList.add(
    "animate__animated",
    "animate__rotateInDownRight"
  );
  quizQuestionArr.forEach((quiz) => {
    document.querySelectorAll(`#quiz-${quiz.id} button`).forEach((button) => {
      button.addEventListener("click", function () {
        if (button.dataset.answer == quiz.questionAns) {
          button.classList.add("btn-success");

          // ✅ ต้องเพิ่มบรรทัดนี้ (Base Class)
          button.classList.add("animate__animated");
          button.classList.add("animate__tada");
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
          // ✅ ต้องเพิ่มบรรทัดนี้ (Base Class)
          button.classList.add("animate__animated");
          button.classList.add("animate__shakeX");
          document
            .querySelectorAll(`#quiz-${quiz.id} button`)
            .forEach((button) => {
              button.disabled = true;
            });
        }
        answeredCount++;
        if (answeredCount == quizQuestionArr.length) {
          let message =
            score >= 5 ? "สุดยอดเซียนถามตอบ! 🎉" : "พยายามอีกนิดนะ!";

          // 1. สร้างตัวแปรดึง 'กล่องขาว' (Dialog) ออกมาเพื่อใส่ Effect
          const modalDialog = document.querySelector("#endGame .modal-dialog");

          // 2. ยัด Class เด้งดึ๋งเข้าไปที่กล่องขาว
          modalDialog.classList.add("animate__animated", "animate__zoomInDown");
          endGame.show();
          scoreEndgameEL.textContent = `${score} / ${quizQuestionArr.length} คะแนน (${message})`;
          clearInterval(x);
          gameOver = true;
        }

        button.classList.remove("btn-light");
      });
    });
  });
});
resetBtn.addEventListener("click", resetGame);
