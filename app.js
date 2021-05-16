var userScore = 0;
let aiScore = 0;
const userScore_span = document.getElementById("user-score");
const aiScore_span = document.getElementById("ai-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const smallUserWord = "you".fontsize(3).sub().fontcolor("red");
const smallAiWord = "a.i.".fontsize(3).sub().fontcolor("red");

function ComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function ConvertToWord(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";
}

function Win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    aiScore_span.innerHTML = aiScore;

    result_p.innerHTML = `${ConvertToWord(userChoice)} ${smallUserWord} beats ${ConvertToWord(computerChoice)}${smallAiWord}. You win!!!`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 400);
}


function Lose(userChoice, computerChoice) {
    aiScore++;
    userScore_span.innerHTML = userScore;
    aiScore_span.innerHTML = aiScore;

    result_p.innerHTML = `${ConvertToWord(userChoice)} ${smallUserWord} loses to ${ConvertToWord(computerChoice)}${smallAiWord}. You lost...`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 400);
}
function Tie(userChoice, computerChoice) {
    result_p.innerHTML = `${ConvertToWord(userChoice)} ${smallUserWord} equals ${ConvertToWord(computerChoice)}${smallAiWord}. It's a draw.`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("gray-glow"), 400);
}

function Game(userChoice) {
    const computerChoice = ComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            Win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            Lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            Tie(userChoice, computerChoice);
            break;
    }
}

function Main() {
    rock_div.addEventListener('click', () => Game('r'));
    paper_div.addEventListener('click', () => Game('p'));
    scissors_div.addEventListener('click', () => Game('s'));
}

Main();

