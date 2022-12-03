var startButton = document.querySelector("#start-button");
var submitBtn = document.querySelector("#submit");
var instructions = document.querySelector("#instructions");

var main = document.querySelector("#main")
var timerEl = document.querySelector("#timer");
var scoreEl = document.querySelector("#score");
var title = document.querySelector("#name");
var quizEl = document.querySelector("#quiz-page");
var qPrompt = document.querySelector("#qPrompt");
var result = document.querySelector("#result");
var endPage = document.querySelector("#end-page");
var player = document.querySelector("#player-name");
var submitBtn = document.querySelector("#submit");
var hsPage = document.querySelector("#highscore-page");

var choiceBtns = document.querySelectorAll(".choice")
var btn1 = document.querySelector("#A");
var btn2 = document.querySelector("#B");
var btn3 = document.querySelector("#C");
var btn4 = document.querySelector("#D");
var qIndex = 0; //each block in questions is a qIndex
var timeLeft = 30; //CHANGE BACK TO 30

function startTimer() {
    
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
    main.style.display = "none";
    renderQuestion(qIndex);
}

function renderQuestion(qIndex) {
    qPrompt.textContent = questions[qIndex].question;
    btn1.textContent = questions[qIndex].choices[0];
    btn2.textContent = questions[qIndex].choices[1];
    btn3.textContent = questions[qIndex].choices[2];
    btn4.textContent = questions[qIndex].choices[3];

    document.getElementById("choice-btns").style.display = "flex";
    document.getElementById("choice-btns").style.flexDirection = "column";
}

// function nextQuestion() {
    
// }

let questions = [
    {
        question: "Which of the following is NOT a JavaScript data type?",
        choices: ["a. string", "b. integer", "c. array", "d. flexbox"],
        correct: "d"
    },{
        question: "Which of the following is the strict comparison operator?",
        choices: ["a. =","b. ==","c. ===","d .===="],
        correct: "c"
    },{
        question: "What is the index of the 5th item in an array with 5 items?", 
        choices: ["a. [6]","b. [5]","c. [4]","d. [3]"],
        correct: "c"
    },{
        question: "What data type is enclosed in double or single quotes?",
        choices: ["a. string","b. array","c. list","d. function"],
        correct: "a"
    }
];


function checkAnswer(event) {
    event.preventDefault();
    result.style = "display: block; text-align: center";
    setInterval(function() {
        result.style = "display: none";
    }, 1500)

    if (event.target.value === questions[qIndex].correct) {
        result.textContent = "Correct!";
        console.log(event.target.value);
        console.log(questions[qIndex].correct);
        qIndex += 1;
        renderQuestion(qIndex);
    } else {
        result.textContent = "Incorrect!";
        timeLeft = timeLeft - 5;
        qIndex += 1;
        renderQuestion(qIndex);
    }
    if (qIndex < questions.length) {
        renderQuestion(qIndex);
    }
    
}

function endQuiz() {
    quizEl.style = "display: none;";
    endPage.style = "display: block;";
    //store inputted name in local and recall it in highscore
}

for (var i = 0; i < choiceBtns.length; i++) {
    choiceBtns[i].addEventListener('click', checkAnswer);
}

startButton.addEventListener('click', function(event){
    startTimer();
    startQuiz();
});


submitBtn.addEventListener('click', function(event){
    localStorage.setItem("name", player.value);
})
// main.style.display = "none;";
// hsPage.style.display = "block;";

timerEl.setAttribute('style', 'font-size: 20px; font-weight: bold; padding-top: 18px;');
scoreEl.setAttribute('style', 'font-size: 20px; font-weight: bold; padding-top: 18px;');