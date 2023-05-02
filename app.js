let rulesBtn = document.querySelector(".rules-btn");
let rulesPage = document.querySelector(".rules-page");
let closeRulesBtn = document.querySelector(".rules-page span.close");
let overlay = document.querySelector(".overlay");

rulesBtn.onclick = _ => {
    rulesPage.style.display = "block";
    overlay.style.display = "block";
}

closeRulesBtn.onclick = _ => hideRules();

overlay.onclick = _ => hideRules();

function hideRules () {
    rulesPage.style.display = "none";
    overlay.style.display = "none";
}

let score = document.querySelector("header .score span");
let selectSection = document.querySelector("section.select");
let compareSection = document.querySelector("section.compare");
let cards = document.querySelectorAll("section.select .triangle div");
let yourPick = document.querySelector("section.compare .your-pick");
let housePick = document.querySelector("section.compare .house-pick");
let hole = document.querySelector("section.compare .house-pick span.hole");
let result = document.querySelector("section.compare .result");

cards.forEach((card) => {
    card.onclick = function () {
        startGame(card.className);
    }
})

let cardsValues = ["rock", "paper", "scissors"];

let compareObj = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
}

let randomPick;

function startGame(yourCardName) {
    selectSection.style.display = "none";
    compareSection.style.display = "flex";
    yourPick.innerHTML = `
        <h4>you picked</h4>
        <div class="${yourCardName}">
            <img src="imgs/icon-${yourCardName}.svg" alt="">
        </div>
    `;
    chooseRandomCard();
    compareCards(yourCardName);
}

function chooseRandomCard() {
    let randomNum = Math.floor(Math.random() * 3);
    randomPick = cardsValues[randomNum];
    setTimeout(() => {
        housePick.innerHTML = `
            <h4>the house picked</h4>
            <div class="${randomPick}">
                <img src="imgs/icon-${randomPick}.svg" alt="">
            </div>
        `;
    }, 2000);
}

function compareCards(yourCardName) {
    setTimeout(() => {
        if (yourCardName === randomPick) {
            showResult("drew");
        } else if (compareObj[yourCardName] === randomPick) {
            showResult("you win");
            (score.innerHTML)++;
        } else {
            showResult("you lose");
            (score.innerHTML)--;
        }
    }, 3500);
}

function showResult(status) {
    result.innerHTML = `
        <h1>${status}</h1>
        <button>PLAY AGAIN</button>       
    `;
    let playAgain = document.querySelector("section.compare .result button");
    playAgain.onclick = _ => resetGame();
}

function resetGame() {
    yourPick.innerHTML = "";
    housePick.innerHTML = `
        <h4>the house picked</h4>
        <span class="hole"></span>
    `;
    result.innerHTML = "";
    selectSection.style.display = "block";
    compareSection.style.display = "none";   
}