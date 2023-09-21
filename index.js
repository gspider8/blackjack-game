let firstCard = 15
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")

function startGame() {
    // 3. Render the cards on the page using this format -> "Cards: 10 4"
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


