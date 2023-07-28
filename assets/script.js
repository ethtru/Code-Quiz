var welcomeScreen = document.getElementById("welcome-container");
var quizScreen = document.getElementById("quiz-container");
var quizEnd = document.getElementById("quiz-end-container");
var highScores = document.getElementById("highscores-container");
var countdown = document.getElementById("countdown");
var timeLeft = 30;
var questionText = document.getElementById("question-text");
var orderedList = document.getElementsByClassName("answers");
// var userChoice = //????;
var questionNumberIndex = 0;

var quizData = [
  {
    question: "Javascript adds ______ to an application.",
    options: ["1. Functionality", "2. Pizzazz", "3. Storage", "4. Structure"],
    answer: "1. Functionality",
  },
  {
    question: "Who created Javascript?",
    options: [
      "1. Elon Musk",
      "2. Big Bird",
      "3. Brendan Eich",
      "4. George Washington",
    ],
    answer: "3. Brendan Eich",
  },
  {
    question: "A function within a function is called a _____.",
    options: [
      "1. Doubler",
      "2. Method",
      "3. Squared Function",
      "4. Baby function",
    ],
    answer: "2. Method",
  },
  {
    question:
      "You can pass ______ into a function by placing them within the paretheses.",
    options: ["1. A football", "2. Gas", "3. Answers", "4. Parameters"],
    answer: "4. Parameters",
  },
  {
    question:
      "The link to the Javascript file should be added to the ______ of the HTML file.",
    options: ["1. End", "2. Beginning", "3. Middle", "4. Astral plane"],
    answer: "1. End",
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

function presentQuestion(num) {
  questionText.textContent = quizData[num].question;
  quizData[num].options.forEach((elem, index) => {
    console.log(orderedList[index]);
    orderedList[index].textContent = elem;
  });
}

function administerQuiz() {
  presentQuestion(questionNumberIndex);
  for (var i = 0; i < orderedList.length; i++) {
    orderedList[i].addEventListener("click", function (event) {
      var button = event.target;
      console.log(button.textContent);
      console.log(quizData[questionNumberIndex].answer);
      if (button.textContent === quizData[questionNumberIndex].answer) {
        console.log("You got it right");
      }
      nextQuestion();
    });
  }
}

function nextQuestion() {
  questionNumberIndex++;
  if (questionNumberIndex < quizData.length) {
    presentQuestion(questionNumberIndex);
  } else {
    console.log("Quiz completed!");
  }
}
