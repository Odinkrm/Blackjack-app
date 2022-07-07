let cards = [];
let sum = 0;

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
