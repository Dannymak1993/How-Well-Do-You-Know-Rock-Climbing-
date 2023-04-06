var start = document.querySelector(".start");
var questiondisplay = document.querySelector(".questiondisplay");
var startScreen = document.querySelector(".start-screen");
var questiontitle = document.querySelector(".question-title");
var choiceEl = document.querySelector(".choices");
var currentQuestion = 0

var questions = [
    {
        question: "whats an Apple?",
        choices: ["fruit", "vegetable"],
        answer: "fruit"
    },
    {
        question: "whats an Orange?",
        choices: ["fruit2", "vegetable2"],
        answer: "fruit2"
    },
    {
        question: "whats an Banana?",
        choices: ["fruit3", "vegetable3"],
        answer: "fruit3"
    },
    {
        question: "whats an Mango?",
        choices: ["fruit4", "vegetable4"],
        answer: "fruit4"
    },
    {
        question: "whats an Grape?",
        choices: ["fruit5", "vegetable5"],
        answer: "fruit5"
    }
]

function startQuiz() {
    questiondisplay.classList.remove("hide");
    startScreen.setAttribute("class", "hide");
    renderQuestion();
}

function checkanswer() {
    console.log(this.dataset.value);
    if (this.dataset.value === questions[currentQuestion].answer) {
    currentQuestion ++
    renderQuestion();
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