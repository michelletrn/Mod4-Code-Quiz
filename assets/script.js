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
var finalScore = document.querySelector("#final-score");
var hsBtn = document.querySelector("#highscores-button")
var clearbtn = document.querySelector("#clear-highscores");


var choiceBtns = document.querySelectorAll(".choice")
var btn1 = document.querySelector("#A");
var btn2 = document.querySelector("#B");
var btn3 = document.querySelector("#C");
var btn4 = document.querySelector("#D");
var qIndex = 0; //each block in questions is a qIndex
var timeLeft = 30; //CHANGE BACK TO 30
var score = 0;

let questions = [ //list of questions
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
    },{
        question: "Where would you insert the JavaScript script tag in your HTML document?",
        choices: ["a. top of the body element","b. above the body element closing tag","c. within the footer element","d. it does not matter"],
        correct: "b"
    }
];

function startTimer() { //starts the timer, timer starts at 30 seconds, checks if the conditions are met and then calls the desired function
    
    var timeInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            endQuiz(); 
        }

        if (qIndex < questions.length) {
            renderQuestion(qIndex);
        } else {
            clearInterval(timeInterval);
            // timerEl.textContent = 0; //this line makes the secs left to 0
            endQuiz();//so now it ends but it stills show how many secs were left
        }
    }, 1000);
}

function startQuiz() { //hides the starting page contents and calls for the questions to be displayed
    main.style.display = "none";
    renderQuestion(qIndex);
}

function renderQuestion(qIndex) { //adds text content to display the question and the answer choices
    qPrompt.textContent = questions[qIndex].question;
    btn1.textContent = questions[qIndex].choices[0];
    btn2.textContent = questions[qIndex].choices[1];
    btn3.textContent = questions[qIndex].choices[2];
    btn4.textContent = questions[qIndex].choices[3];

    document.getElementById("choice-btns").style.display = "flex";
    document.getElementById("choice-btns").style.flexDirection = "column";
}

function checkAnswer(event) { //checks if the value of the button selected matches the correct answer in the questions list, displays correct/incorrect and subtracts time or adds points as appropriate
    event.preventDefault();
    result.style = "display: block; text-align: center";
    setInterval(function() {
        result.style = "display: none";
    }, 1500)

    if (event.target.value === questions[qIndex].correct) {
        result.textContent = "Correct! +10 points!";
        score = score + 10;
        scoreEl.textContent = score;
        qIndex += 1;
        renderQuestion(qIndex);
    } else {
        result.textContent = "Incorrect! -5 seconds!";
        timeLeft = timeLeft - 5;
        qIndex += 1;
        renderQuestion(qIndex);
    }

}

function endQuiz() { //is called when the conditions of the quiz ending meets, it displays the end page where the player enters their name and their final score is displayed
    quizEl.style = "display: none;";
    endPage.style = "display: block;";
    finalScore.textContent += timeLeft + score;
}

function highscores() { //high scores page
    main.style = 'display: none;';
    hsPage.style = 'display: block';
    endPage.style = 'display:none';
    document.body.children[0].style.display = 'none';

    
    var hsList = [];
    //for loop runs through each item in the local storage and adds it to the hsList
    for (var i = 0; i < localStorage.length; i++) {
        hsList.push(
            localStorage.getItem(localStorage.key(i)) + ' - ' + localStorage.key(i)
            );
    }
    // sorts the scores in descending order
    hsList.sort().reverse();


    for (var i = 0; i < hsList.length; i++) {
        var hsStats = document.createElement('li');
        hsStats.textContent = hsList[i];
        document.body.children[5].children[0].children[1].append(hsStats);
    }
}
//for loop that checks if the choice btn pressed was the correct answer
for (var i = 0; i < choiceBtns.length; i++) {
    choiceBtns[i].addEventListener('click', checkAnswer);
}
//starts the quiz
startButton.addEventListener('click', function(event){
    startTimer();
    startQuiz();
});

//when submit btn is pressed, the player name and final score is saved in local storage
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    localStorage.setItem(player.value, finalScore.textContent); //final score will not store
    highscores();
})
// btn that displays the hs page
hsBtn.addEventListener('click', function() {
    main.style = 'display: none;';
    hsPage.style = 'display: block';
    highscores();
})
//clears the local storage
clearbtn.addEventListener('click', function() {
    localStorage.clear(); //go back and clear the name of the list
    window.location.reload();
})



timerEl.setAttribute('style', 'font-size: 20px; font-weight: bold; padding-top: 18px;');
scoreEl.setAttribute('style', 'font-size: 20px; font-weight: bold; padding-top: 18px;');