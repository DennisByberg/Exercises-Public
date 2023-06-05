let hasFlipped = false;
let firstCard;
let secondCard;
// Hitta alla kort...
const memoryCards = document.querySelectorAll(".memory-card");
// Lägga till click event på alla kort...
memoryCards.forEach((card) => card.addEventListener("click", flipCard));
// Slumpar position på korten när spelet börjar (Tagit hjälp av ChatGPT)...
memoryCards.forEach((card) => {
    const randomPos = Math.floor(Math.random() * memoryCards.length);
    card.style.order = randomPos.toString();
});
function flipCard() {
    // Denna rad jämför värdet av this (vilket är elementet som utlöste funktionen) med variabeln firstCard. Om de är lika betyder det att samma kort har klickats två gånger, så funktionen avslutas utan att göra något. Detta används för att förhindra att samma kort vänds två gånger...
    if (this === firstCard)
        return;
    // Flip läggs till på kortet vi tryckt på om inget av ovanstående körts...
    this.classList.add("flip");
    if (!hasFlipped) {
        // Flippar första kortet...
        hasFlipped = true;
        firstCard = this;
    }
    else {
        // Flippar andra kortet...
        hasFlipped = false;
        secondCard = this;
        // Kollar efter match...
        checkForMatch();
    }
}
function checkForMatch() {
    // Kollar om kortens data-card attribut stämmer överens...
    if (firstCard.getAttribute("data-card") === secondCard.getAttribute("data-card")) {
        disableCards();
        checkForWin();
    }
    else {
        unflipCards();
    }
}
// Vänder tillbaka två kort som inte matchade varandra...
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 1300);
}
// Denna funktion kontrollerar om spelaren har vunnit. Den gör detta genom att jämföra antalet vända kort (de som har klassen "flip") med det totala antalet kort...
function checkForWin() {
    if (document.querySelectorAll(".flip").length === memoryCards.length) {
        const overlay = document.querySelector(".overlay");
        if (overlay) {
            overlay.classList.add("show");
        }
    }
}
// Omstart...
function resetBoard() {
    hasFlipped = false;
    firstCard = null;
    secondCard = null;
}
// Tar bort eventlisteners och startar om...
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}
