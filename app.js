let rulesBtn = document.querySelector("section.select .rules-btn");
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