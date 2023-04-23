//wait for the DOM to finish loading before running the game
// get the button element and add event listerner to them 

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("you clicked submit!");

            } else {
                let gameType = this.getAttribute("data-type");
                runGame("data-type");
            }
        });
    }
    runGame("addition");
});




function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionalQuestion(num1, num2);
    } else {
        alert(`unknow game type:${gameType}`);
        throw `unknow gameType:${gameType}.aborting!`;
    }

}
function checkAnswer() {

}
function calculateCorrectAnswer() {

}
function incrementScore() {

}
function incrementWrongAnswer() {

}
function displayAdditionalQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}
function displaySubtractQuestion() {

}
function multiplyQuestion() {

}
