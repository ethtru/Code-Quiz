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
    answer: "1. Functionality",
    options: ["1. Functionality", "2. Pizzazz", "3. Storage", "4. Structure"],
  },
  {
    question: "Javascript adds ______ to an application.",
    answer: "1. Functionality",
    options: ["1. Functionality", "2. Pizzazz", "3. Storage", "4. Structure"],
  },
  {
    question: "Javascript adds ______ to an application.",
    answer: "1. Functionality",
    options: ["1. Functionality", "2. Pizzazz", "3. Storage", "4. Structure"],
  },
  {
    question: "Javascript adds ______ to an application.",
    answer: "1. Functionality",
    options: ["1. Functionality", "2. Pizzazz", "3. Storage", "4. Structure"],
  },
  {
    question: "Javascript adds ______ to an application.",
    answer: "1. Functionality",
    options: ["1. Functionality", "2. Pizzazz", "3. Storage", "4. Structure"],
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
  //pass the question number variable rather than the actual number
  // need to listen for answer selection and check for right or wrong
  // if wrong ==> update time left
  // if right ==> present next question
}

function timer() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      countdown.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      countdown.textContent = timeLeft;
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `countdown` to an empty string
      countdown.textContent = "0";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
    }
  }, 1000);
}
