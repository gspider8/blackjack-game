let firstCard = 15
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")

function startGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum
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


