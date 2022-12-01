var startButton = document.querySelector("#start-button");
var instructions = document.querySelector("#instructions");

var timerEl = document.querySelector("#timer");
var scoreEl = document.querySelector("#score");
var title = document.querySelector("#name");
var quizEl = document.querySelector("#quiz");
var choices = document.querySelector("#choices");
var question = document.querySelector("#question");



startButton.addEventListener('click', function(){
    startTimer();
    startQuiz();
});

function startTimer() {
    var timeLeft = 30;
    var timeInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft >= 0) {
            // if(isCorrect && timerEl > 0);
            //next question function
            //score function
        }
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            endQuiz(); //end quiz function
        }
    }, 1000);
}

function startQuiz() {
    instructions.remove();
    startButton.remove();
    title.remove();
    renderQuestion();
}

function renderQuestion() {
    let q = questions[qIndex];
    console.log(q);
    // display question
}

var qIndex = 0;

let questions = [
    {
        question: "Which of the following is NOT a JavaScript data type?",
        choice: ["a. string", "b. integer", "c. array", "d. flexbox"],
        correct: "d. flexbox"
    },{
        question: "Which of the following is the strict comparison operator?",
        choices: ["a. =","b. ==","c. ===","d .===="],
        correct: "c. ==="
    },{
        question: "What is the index of the 5th item in an array with 5 items?", 
        choices: ["a. [6]","b. [5]","c. [4]","d. [3]"],
        correct: "c. [4]"
    },{
        question: "What data type is enclosed in double or single quotes?",
        choices: ["a. string","b. array","c. list","d. function"],
        correct: "a. string"
    }
]



// function endQuiz() {

// }




timerEl.setAttribute('style', 'font-size: 20px; font-weight: bold; padding-top: 18px;');
scoreEl.setAttribute('style', 'font-size: 20px; font-weight: bold; padding-top: 18px;');