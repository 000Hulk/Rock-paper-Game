document.addEventListener("DOMContentLoaded", function() {
    const choices = ["Rock", "Paper", "Scissor"];
    const buttons = document.querySelectorAll(".same");
    const userChoiceElement = document.getElementById("one");
    const compChoiceElement = document.getElementById("two");
    const resultElement = document.getElementById("result");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const userChoice = this.textContent;
            const compChoice = choices[Math.floor(Math.random() * choices.length)];

            userChoiceElement.textContent = `Your Choice: ${userChoice}`;
            compChoiceElement.textContent = `Computer Choice: ${compChoice}`;

            const result = determineWinner(userChoice, compChoice);
            resultElement.textContent = `Result: ${result}`;
        });
    });

    function determineWinner(user, computer) {
        if (user === computer) {
            return "It's a tie!";
        } else if (
            (user === "Rock" && computer === "Scissor") ||
            (user === "Paper" && computer === "Rock") ||
            (user === "Scissor" && computer === "Paper")
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
});
