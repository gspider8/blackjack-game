let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
// Add player object //

// let playerName = "Matt";
// let playerChips = 145;
let player = {
    name: "matt",
    chips: 145
}
// playerEl.textContent = playerName + ": $" + playerChips
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
    cards = [getRandomCard(), getRandomCard()];
    sum = cards[0] + cards[1]
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
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
        cards.push(card)
        renderGame()
    } 
}
