var highScoreEl = document.querySelector(".highScores");


let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
for (i=0; i < highScores.length; i++) {
    let HTML = `<p>initials: ${highScores[i].initials} score: ${highScores[i].score}</p>`
    highScoreEl.insertAdjacentHTML ("beforeend", HTML);
}