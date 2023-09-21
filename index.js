let firstCard = 15
let secondCard = 11;
let sum = firstCard + secondCard;

let hasBlackJack = false
let isAlive = true

if (sum <= 20) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Woohoo! You've got Blackjack!")
    hasBlackJack = true
} else {
    console.log("You're out of the game! :(")
    isAlive = false
}


// Cash out
console.log(hasBlackJack)