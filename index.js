let cards = [];
let sum = 0;

function generateRandomNum() {
  return Math.floor(Math.random() * 13 + 1);
}
function updateSum() {
  for (let i = 0; i < cards.length; i++) {
    sum += cards[i];
  }
  document.getElementById("sum-cards").innerText = sum;
}
function updateDrawnCards() {
  let drawnCards = document.getElementById(`drawn-cards`);
  for (let i = 0; i < cards.length; i++) {
    drawnCards.innerHTML = `${cards[i]} ,`;
  }
}
function initiateGame() {
  let card1 = generateRandomNum();
  cards.push(card1);
  updateSum();
  updateDrawnCards();
  document.getElementById("start-btn").style.visibility = "hidden";
}
