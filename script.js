var btn = document.querySelector("#btn");
var time = document.querySelector(".time");
var remaining = 10;
var startGame = btn;

var questions = [
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



startGame.addEventListener("click", setTime);

function setTime() {
    var interval = setInterval(function() {
        remaining--;
        time.textContent = "Timer: " + remaining + " secs";

        if(remaining === 0) {
            clearInterval(interval);
        }
    }, 1000);
};