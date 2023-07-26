var welcomeScreen = document.getElementById("welcome-container");
var quizScreen = document.getElementById("quiz-container");
var quizEnd = document.getElementById("quiz-end-container");
var highScores = document.getElementById("highscores-container");
var countdown = document.getElementById("countdown");
var timeLeft = 30;
var questionText = document.getElementById("question-text");
var orderedList = document.getElementsByClassName("answers");
// make a question number variable that starts at 0

function presentQuestion(num) {
  questionText.textContent = quizData[num].question;
  quizData[num].options.forEach((elem, index) => {
    console.log(orderedList[index]);
    orderedList[index].textContent = elem;
  });
}

var quizData = [
  {
    question: "Javascript adds ______ to an application.",
    answer: "1. Funtionality",
    options: ["1. Functionality", "2. Pizzazz", "3. Storage", "4. Structure"],
  },
  {
    question: "Who created Javascript?",
    answer: "3. Brendan Eich",
    options: [
      "1. Elon Musk",
      "2. Big Bird",
      "3. Brendan Eich",
      "4. George Washington",
    ],
  },
  {
    question: "A function within a function is called a _____.",
    answer: "2. Method",
    options: [
      "1. Doubler",
      "2. Method",
      "3. Squared Function",
      "4. Baby function",
    ],
  },
  {
    question:
      "You can pass ______ into a function by placing them within the paretheses.",
    answer: "4. Parameters",
    options: ["1. A football", "2. Gas", "3. Answers", "4. Parameters"],
  },
  {
    question:
      "The link to the Javascript file should be added to the ______ of the HTML file.",
    answer: "1. End",
    options: ["1. End", "2. Beginning", "3. Middle", "4. Astral plane"],
  },
];

var startButton = document.getElementById("start-button");
console.log(startButton);
startButton.addEventListener("click", quizBegin);

function quizBegin() {
  console.log("quizBegin");
  welcomeScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  timer();
  administerQuiz();
}

function administerQuiz() {
  presentQuestion(0);
  if (answer === "1. Functionality");
}
//pass the question number variable rather than the actual number
// need to listen for answer selection and check for right or wrong
// if wrong ==> update time left
// if right ==> present next question

function timer() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      countdown.textContent = timeLeft;

      timeLeft--;
    } else if (timeLeft === 1) {
      countdown.textContent = timeLeft;
      timeLeft--;
    } else {
      countdown.textContent = "0";

      clearInterval(timeInterval);
    }
  }, 1000);
}
