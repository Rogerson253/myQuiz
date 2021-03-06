var btn = document.querySelector("#btn");
var time = document.querySelector(".time");
var jumbo = document.querySelector(".jumbotron");
var main = document.getElementById("main");
var questionText = document.getElementById("questionText");
var showAnswers = document.getElementById("showAnswers");
var endGame = document.getElementById("endGame");
var points = document.getElementById("points");
var input = document.getElementById("input");
var currentQuestion = 0;
var startGame = btn;
var remaining = 60;
var score = 0;

// Grabs items from local storage and puts them on the page
function playerHistory() {
   
   var playerName = localStorage.getItem("Players");
   console.log(playerName);

   var playerScore = localStorage.getItem("Score");
   console.log(playerScore);

   var playerDiv = document.createElement("div");
   playerDiv.append(playerName, playerScore);

    endGame.append(playerDiv);
}

// A list of questions
var myQuestions = [
    {
        question: "What state was I born in?",
        answers: [
            "A: Connecticut",
            "B: New York",
            "C: Pennsylvania",
            "D: Rhode Island"
        ],
        rightAnswer: "B: New York"
    },
    {
        question: "What is the longest I have stayed in a job?",
        answers: [
            "A: 4 years",
            "B: 7 years",
            "C: 1 year",
            "D: 2 years"
        ],
        rightAnswer: "D: 2 years"
    },
    {
        question: "What is my favorite hobby?",
        answers: [
            "A: Video Games",
            "B: Watching T.V",
            "C: Skateboarding",
            "D: Driving"
        ],
        rightAnswer: "A: Video Games"
    }
];


main.style.display = "none";
endGame.style.display = "none";

startGame.addEventListener("click", setTime);
startGame.addEventListener("click", clear);

// Creates a timer
function setTime() {
    var interval = setInterval(function () {
        remaining--;
        time.textContent = "Timer: " + remaining + " secs";

        if (remaining === 0) {
            clearInterval(interval);
        }
    }, 1000);
};

// Replaces one div with another and makes it visible
function clear() {
    jumbo;
    main;
    jumbo.parentNode.replaceChild(main, jumbo);
    main.style.display = "block";
};

// This displays the question and creates buttons for the answers
function displayQuestion() {


    questionText.innerHTML = myQuestions[currentQuestion].question;

    for (var i = 0; i < myQuestions[currentQuestion].answers.length; i++) {
        var buttn = document.createElement("button");
        buttn.innerText = myQuestions[currentQuestion].answers[i];
        showAnswers.appendChild(buttn);
        buttn.addEventListener("click", answerChoice);
    }


};
displayQuestion();

// Relates the user's choice to the correct answer
function answerChoice(event) {

    var choice = event.target.textContent;
    var rightA = myQuestions[currentQuestion].rightAnswer;

    if (choice === rightA) {
        score++;
        alert("Correct! " + score + " point(s)");
        remaining += 5;
    } else {
        alert("Wrong");
        remaining -= 5;
    };

    currentQuestion++;
    questionText.innerHTML = "";
    showAnswers.innerHTML = "";

    if (currentQuestion > 2) {
        gameOver()
    } else {
        displayQuestion();
    }


};

// Switches to the last div and sums up all points
function gameOver() {
    time = "";
    main.style.display = "none";
    endGame.style.display = "block";

    points.textContent = "You got " + score + " point(s)!";

    var form = document.createElement("input");
    form.setAttribute("type", "text");
    form.setAttribute("id", "form");
    input.appendChild(form);

    var submit = document.createElement("button");
    submit.innerText = "Submit";
    input.appendChild(submit);

    var historyDiv = document.createElement("div");
    var text = document.createTextNode("History");
    historyDiv.appendChild(text);
    endGame.appendChild(historyDiv);

    submit.addEventListener("click", function () {
        inputVal = form.value;

        localStorage.setItem("Players", inputVal);
        localStorage.setItem("Score", score);
        
        playerHistory();
    });
}

