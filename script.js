var btn = document.querySelector("#btn");
var time = document.querySelector(".time");
var jumbo= document.querySelector(".jumbotron");
var main = document.getElementById("main");
var questionText = document.getElementById("questionText");
var showAnswers = document.getElementById("showAnswers");
var startGame = btn;
var remaining = 10;

var myQuestions = [
    {
        question: "What state was I born in?",
        answers: {
            a: "Connecticut",
            b: "New York",
            c: "Pennsylvania",
            d: "Rhode Island" 
        },
        rightAnswer: "b"
    }, 
    {
        question: "What is the longest I have stayed in a job?",
        answers: {
            a: "4 years",
            b: "7 years",
            c: "1 year",
            d: "2 years"
        },
        rightAnswer: "d"
    },
    {
        question: "What is favorite hobby?",
        answers: {
            a: "Video Games",
            b: "Watching T.V",
            c: "Skateboarding",
            d: "Driving"
        },
        rightAnswer: "a"
    }
];
var arrAnswers = Object.values(myQuestions[0].answers);

main.style.display = "none";

startGame.addEventListener("click", setTime);
startGame.addEventListener("click", clear);

function setTime() {
    var interval = setInterval(function() {
        remaining--;
        time.textContent = "Timer: " + remaining + " secs";

        if(remaining === 0) {
            clearInterval(interval);
        }
    }, 1000);
};

function clear() {
    jumbo;
    main;
    jumbo.parentNode.replaceChild(main, jumbo);
    main.style.display = "block";
};

function displayQuestion() {

    var questionBlock = document.createElement("h2");

    for (var i = 0; i < myQuestions.length; i++) {
        questionBlock.innerHTML= myQuestions[i].question;
        questionText.appendChild(questionBlock);
    };

    for (var i = 0; i < 4; i++) {
        var buttn = document.createElement("button");
        buttn.innerText = arrAnswers[i];
        buttn.setAttribute("data-index", [i]);
        showAnswers.appendChild(buttn);
    }
};
displayQuestion();

