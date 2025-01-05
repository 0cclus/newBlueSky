let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function myFunc() {
    console.log(lap1 + lap2 + lap3);
}

myFunc()

let countEl = document.getElementById("count-el")

let count = 0
let xter = "You have tree new notificataions"
let username = "Per"

function increment() {
    //count = count + 1
    count += 1
    countEl.innerText = count
    console.log(count)
}

// function save() {
//     console.log(count)
// }

//console.log(xter + ", " + username + "!")

//create variable, messageToUser, that contains the message we have logged

let messageToUser = xter + ", " + username + "!"

console.log(messageToUser)

let name = " David"
let greeting = "Hi, my name is"
let myGreeting = greeting + name

console.log(myGreeting)

let wellEl = document.getElementById("welcomeEl")

wellEl.innerText = greeting + name + " ✊🏾"

let saveEla = document.getElementById("saveel")

function save() {
    let newVar = count + " - "
    saveEla.textContent += newVar
    console.log(count)
}

let myPoints = 3

//create two fucncctions , add3Points() and remove1Point(). and have them 
//add/remove pointstop/from the myPoints vatriable

// function add3Points() {

//     let myPoints += 3
//     console.log(myPoints)
// }

// function remove1Point() P{
//     let myPoints -= 1
//     console.log(myPoints)
// }