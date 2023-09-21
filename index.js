let firstCard = 5
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    sumEl.textContent = "Sum: " + sum
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

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"

function newCard() {
    console.log("Drawing a new card...")
    // 4. Create a card variable, and hard code its value to a number (2-11)
    let card = 8
    // 5. Add the new card to the sum variable
    sum += card
    // 6. Call startGame()
    startGame()
}   
