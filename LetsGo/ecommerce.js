let errorParagraph = document.getElementById("error")
let errror3 = document.getElementById("purchase-btn")

//let buttonThing = document.getElementById("purchase-btn")

console.log(errorParagraph)

function purchase() {
    console.log("button clicked")
    // errorParagraph.textContent = "Something went Wrong, please try again."
    errorParagraph.textContent = "Something went wrong!"
}

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum:" + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum:" + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum:" + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum:" + result
}

let firstCard = 10
let secondCard = 6

let sum = firstCard + secondCard

console.log(sum)

// if (sum < 21) {
//     console.log("Do you want to draw another card?")
// } else if (sum === 21) {
//     console.log("You've won!")
// }
// else if (sum > 21) {
//     console.log("You're Out!")
// }

let hasBlackJack = false
let isAlive = true

if (age <= 20) {
    console.log("You're not Welcome!")
}
else if (sum === 21) {
    console.log("Youve got BlackJack!")
}
else {
    console.log("You're out of game!")
    isAlive = false
}

