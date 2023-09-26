let player = {
    name: "matt",
    chips: 145
}
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")
const playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let n0 = 1;
    let r = 12;
    let cardNum = n0 + Math.trunc(Math.random() * (r + 1));
    if (cardNum === 1) {
        return 11
    } else if (cardNum <= 10) {
        return cardNum
    } else {
        return 10
    }
}

function startGame() {
    isAlive = true
    cardArr = [getRandomCard(), getRandomCard()];
    sum = cardArr[0] + cardArr[1]
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards:"
    for (let i = 0; i < cardArr.length; i++) {
        cardsEl.textContent += " " + cardArr[i]
    }    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cardArr.push(card)
        renderGame()
    } 
}
