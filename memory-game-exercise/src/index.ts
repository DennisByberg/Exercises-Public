let hasFlipped: boolean = false;

let firstCard: HTMLElement | null;
let secondCard: HTMLElement | null;

// Hitta alla kort...
const memoryCards = document.querySelectorAll(
  ".memory-card"
) as NodeListOf<HTMLElement>;

// Lägga till click event på alla kort...
memoryCards.forEach((card) => card.addEventListener("click", flipCard));

// Slumpar position på korten när spelet börjar (Tagit hjälp av ChatGPT)...
memoryCards.forEach((card) => {
  const randomPos = Math.floor(Math.random() * memoryCards.length);
  (card as HTMLElement).style.order = randomPos.toString();
});

function flipCard(): void {
  // Denna rad jämför värdet av this (vilket är elementet som utlöste funktionen) med variabeln firstCard. Om de är lika betyder det att samma kort har klickats två gånger, så funktionen avslutas utan att göra något. Detta används för att förhindra att samma kort vänds två gånger...
  if (this === firstCard) return;

  // Flip läggs till på kortet vi tryckt på om inget av ovanstående körts...
  this.classList.add("flip");
  this.classList.add("matched");

  if (!hasFlipped) {
    // Flippar första kortet...
    hasFlipped = true;
    firstCard = this;
  } else {
    // Flippar andra kortet...
    hasFlipped = false;
    secondCard = this;

    // Kollar efter match...
    checkForMatch();
  }
}

function checkForMatch(): void {
  // Kollar om kortens data-card attribut stämmer överens...
  if (
    firstCard.getAttribute("data-card") === secondCard.getAttribute("data-card")
  ) {
    disableCards();
    checkForWin();
  } else {
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
function checkForWin(): void {
  if (document.querySelectorAll(".flip").length === memoryCards.length) {
    const overlay = document.querySelector(".overlay");
    if (overlay) {
      overlay.classList.add("show");
    }
  }
}

// Omstart...
function resetBoard(): void {
  hasFlipped = false;
  firstCard = null;
  secondCard = null;
}

// Tar bort eventlisteners och startar om...
function disableCards(): void {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}
