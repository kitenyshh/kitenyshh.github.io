function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let number = getRandomInt(10);
console.log(number)
let userInput = parseInt(prompt("Угадайте число:"));
if (userInput === number) console.log("Вы угадали число!");
else if (userInput > 5) console.log("Введенное число больше 5");
else if (userInput < 5) console.log("Введенное число меньше 5");