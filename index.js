let firstCard = 15
let secondCard = 11;
let sum = firstCard + secondCard;

let hasBlackJack = false
let isAlive = true

// 1. Declare a variable called message and assign its value to an empty string
let message = ""

// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    hasBlackJack = true
    message = "Woohoo! You've got Blackjack!"
} else {
    isAlive = false
    message = "You're out of the game! :("
}

// 3. Log it out!
console.log("Score: " + sum + " | " + message)