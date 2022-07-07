let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";
document.getElementById("new-card-btn").style.visibility = "hidden";
function generateRandomNum() {
  let randomNum = Math.floor(Math.random() * 13 + 1);
  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    return 11;
  } else {
    return randomNum;
  }
}
function updateSum(number) {
  sum += number;
  document.getElementById("sum-cards").innerText = sum;
}
function updateDrawnCards() {
  let drawnCards = document.getElementById(`drawn-cards`);
  drawnCards.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    drawnCards.textContent += cards[i] + " ";
  }
}
function initiateGame() {
  isAlive = true;
  let card1 = generateRandomNum();
  let card2 = generateRandomNum();
  cards.push(card1, card2);
  updateSum(card1);
  updateSum(card2);
  updateDrawnCards();
  document.getElementById("start-btn").style.display = "none";
  document.getElementById("new-card-btn").style.visibility = "visible";
}
function getCard() {
  let gameStatetext = document.getElementById(`message`);
  if (sum > 21) {
    gameStatetext.textContent = "Sorry, you didn't win this time.";
    gameStatetext.style.color = "red";
    document.getElementById("new-card-btn").style.display = "none";

    isAlive = false;
  } else if (sum === 21) {
    gameStatetext.textContent = "Congrats! You have won🎉";
    document.getElementById("new-card-btn").style.display = "none";
    hasBlackJack = true;
  } else if (isAlive === true && hasBlackJack === false) {
    newCard = generateRandomNum();
    cards.push(newCard);
    updateDrawnCards();
    updateSum(newCard);
  }
}
