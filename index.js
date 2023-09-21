let firstCard = 5
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let cardStr = ""

function startGame() {
    
    renderGame()
}

function renderGame() {
    cardStr = "Sum: " + sum
    sumEl.textContent = cardStr
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hasBlackJack = true
        message = "Woohoo! You've got Blackjack!"
    } else {
        isAlive = false
        message = "You're out of the game! :("
    }   
    messageEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card...")
    let card = 8
    sum += card
    cardStr += card
    console.log(cardStr)
    renderGame()
}   
 console.log("hello")