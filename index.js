let firstCard = 15
let secondCard = 11;
let sum = firstCard + secondCard;

let hasBlackJack = false
let isAlive = true

let message = ""

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hasBlackJack = true
        message = "Woohoo! You've got Blackjack!"
    } else {
        isAlive = false
        message = "You're out of the game! :("
    }
    document.getElementById("message-el").textContent = message
    console.log("Score: " + sum + " | " + message)
     
}


