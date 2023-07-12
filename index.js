let name = "doston"
let money = "10000"
let account = "7777"


let names = prompt('Как вас зовут сэр?').toLocaleLowerCase().trim()
if (names === "amir") {
   balance = prompt(`Номер вашей карты?`)
} else {
    alert("Пользователь не найден")
}

if (balance === `7777`) {
   cashout = +prompt("Сколько снять?")
} else {
    alert ("Вы не правильно ввели номер карты")
} 

if (cashout >= 0 && cashout <= 10000) {
    great = alert ('Все отлично')
    alert('Вы сняли ' + cashout + "$")
    alert('Осталось ' + ("10000" - cashout) + "$" + " на счету")
} else {
    alert('Недостаточно средств') 
}   

/* let moneya = 100

let naming = prompt ("Who are you?").toLowerCase().trim()
if (naming.charAt() === 'a') {
    age = prompt("What is your age?")
} else {
    alert ("We didn't find you")
}

if (age >= 20 && age <= 40) {
    moneya = prompt ("How much money do you have?")
} else {
    alert ("User is not found")
}

if (moneya >= 100) {
    quantity = prompt ("How many people do you have?")
} else {
    alert ("You haven't got sufficient funds")
}

if (quantity >= 100) {
    alert ("You are welcome!")
} else {
    alert ("There are a few people here")
}

alert ("Remember that the clubs is haram") */