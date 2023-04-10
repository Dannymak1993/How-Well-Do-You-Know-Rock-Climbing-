var start = document.querySelector(".start");
var questiondisplay = document.querySelector(".questiondisplay");
var startScreen = document.querySelector(".start-screen");
var questiontitle = document.querySelector(".question-title");
var choiceEl = document.querySelector(".choices");
var currentQuestion = 0
var timeEl = document.querySelector(".time");
var secondsLeft = 60;
var wrong = document.querySelector(".wrong");
var timerInterval;
var div = document.querySelector(".initials");
var submit = document.querySelector(".submit");
var input = document.querySelector(".input");

var questions = [
    {
        question: "Climbing was introduced to the Olympics for the very first time in what year?",
        choices: ["Tokyo 2020", "Pyeongchang 2018", "Rio de Janeiro 2016", "London 2012"],
        answer: "Tokyo 2020"
    },
    {
        question: "Who won gold for the Men's Combined for sport climbing at the 2020 Tokyo Olympics?",
        choices: ["Jongwon Chon", "Nathaniel Coleman", "Jakob Schubert", "Alberto Gines Lopez"],
        answer: "Alberto Gines Lopez"
    },
    {
        question: "How many climbers participated from around the world at the 2020 Olympics?",
        choices: ["35", "20", "40", "30"],
        answer: "40"
    },
    {
        question: "Climbing has which of the following disciplines?",
        choices: ["Top Roping", "Bouldering", "Lead-Climbing", "All the Above"],
        answer: "All the Above"
    },
    {
        question: "Adam Ondra climbed a route called Silence, a 45 metre severely overhanging sport climbing route in the granite Hanshelleren Cave in Flatanger Normay. What is the route graded?",
        choices: ["9g", "9c", "8d", "10a"],
        answer: "9c"
    }
]

function setTime() {
        timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `Timer: ${secondsLeft}`;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function startQuiz() {
    questiondisplay.classList.remove("hide");
    startScreen.setAttribute("class", "hide");
    renderQuestion();
    setTime();
}

function saveInitials () {
    let highScores = JSON.parse(localStorage.getItem("highScores"))||[];
    let scoreObj = {
        initials: input.value, score: secondsLeft
    }
    highScores.push(scoreObj);
    localStorage.setItem("highScores",JSON.stringify(highScores))
}

function endQuiz () {
    clearInterval (timerInterval);
    div.classList.remove("hide");
    questiondisplay.classList.add("hide");
}

function checkanswer() {
    console.log(this.dataset.value);
    if (this.dataset.value === questions[currentQuestion].answer) {
    wrong.textContent = "";
        if (currentQuestion === questions.length - 1 || secondsLeft <= 0) {
            endQuiz();
        } else {
            currentQuestion++;
            renderQuestion();
        }
} else {
    secondsLeft = secondsLeft - 5;
    wrong.textContent = "try again!";
}
}

function renderQuestion() {
    questiontitle.textContent = questions[currentQuestion].question;
    choiceEl.textContent= "";
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
        var button = document.createElement("button");
        button.textContent = questions[currentQuestion].choices[i];
        button.setAttribute("data-value", questions[currentQuestion].choices[i]);
        button.addEventListener("click", checkanswer)
        choiceEl.appendChild(button);
    }
}


start.addEventListener("click", startQuiz);
submit.addEventListener("click", saveInitials);
submit.addEventListener("click", function (event) {
    event.preventDefault();
    input.value = '';
}); 