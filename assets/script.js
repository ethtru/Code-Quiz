var welcomeScreen = document.getElementById("welcome-container");
var quizScreen = document.getElementById("quiz-container");
var quizEnd = document.getElementById("quiz-end-container");
var highScores = document.getElementById("highscores-container");
var countdown = document.getElementById("countdown");
var timeLeft = 30;
var questionText = document.getElementById("question-text");
var orderedList = document.getElementsByClassName("answers");
var submitBtn = document.getElementById("submit-button");
var questionNumberIndex = 0;
var score = document.getElementById("score-text");
var highScoresList = document.getElementById("highscores-list");


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

var highScoreBtn = document.getElementById("high-scores-btn");
highScoreBtn.addEventListener("click", function (event) {
  button = event.target;
  highScores.classList.remove("hidden");
  welcomeScreen.classList.add("hidden");
  questionNumberIndex = 0;
});

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

var timeInterval;

function timer() {
  timeLeft = 30;
  countdown.textContent = timeLeft;

  timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      countdown.textContent = timeLeft;
      timeLeft--;
    } else {
      countdown.textContent = "0";
      clearInterval(timeInterval);
    }
  }, 1000);
}

function presentQuestion(num) {
  const { question, options } = quizData[num];
  questionText.textContent = question;

  for (let i = 0; i < orderedList.length; i++) {
    orderedList[i].textContent = options[i];
  }
}

function administerQuiz() {
  presentQuestion(questionNumberIndex);

  for (var i = 0; i < orderedList.length; i++) {
    orderedList[i].addEventListener("click", answerClickHandler);
  }
}

function answerClickHandler(event) {
  var button = event.target;
  console.log(button.textContent);
  console.log(quizData[questionNumberIndex].answer);
  if (button.textContent === quizData[questionNumberIndex].answer) {
    console.log("You got it right");
  } else {
    subtractTime(5);
  }
  nextQuestion();
}

function subtractTime(seconds) {
  if (timeLeft >= seconds) {
    timeLeft -= seconds;
  } else {
    timeLeft = 0;
  }
}

function nextQuestion() {
  questionNumberIndex++;
  if (questionNumberIndex < quizData.length) {
    presentQuestion(questionNumberIndex);
  } else {
    quizEndScreen();
    stopTimer();
  }
}

function stopTimer() {
  clearInterval(timeInterval);
}


var highScoresArray = [];

function quizEndScreen() {
  submitBtn.removeEventListener("click", answerClickHandler);
  quizScreen.classList.add("hidden");
  quizEnd.classList.remove("hidden");
  score.textContent = timeLeft;

 
  submitBtn.addEventListener("click", function (event) {
    button = event.target;
    quizEnd.classList.add("hidden");
    highScores.classList.remove("hidden");

    var userName = document.getElementById("user-name").value;


    var userScoreObject = {
        userName: userName || "Anonymous",
        timeLeft: timeLeft
    };
    highScoresArray.push(userScoreObject);
    updateHighScoreList();


  });
  highScoresScreen();
}


function updateHighScoreList() {
    highScoresList.innerHTML = "";
    highScoresArray.forEach((userScore, index) => {
      var listItem = document.createElement("li");
      listItem.textContent = `${index + 1}. ${userScore.userName} - ${userScore.timeLeft} seconds`;
      highScoresList.appendChild(listItem);
    });
  }


var goBack = document.getElementById("go-back-btn");
var clear = document.getElementById("clear-btn");

function highScoresScreen() {
  goBack.addEventListener("click", function (event) {
    button = event.target;
    highScores.classList.add("hidden");
    welcomeScreen.classList.remove("hidden");
    questionNumberIndex = 0;
  });
}
