// Задание 1
let name = prompt("Как вас зовут?")
let age = prompt("Сколько вам лет?")
alert(`Привет, ${name}! Вам ${age} лет.`);
console.log(`Привет, ${name}! Вам ${age} лет.`);

if (parseInt(age) >= 18) alert("Вы совершеннолетний!");
else alert("Вы несовершеннолетний!");

// Задание 2
console.log("\n\n");
for (let i = 1; i < 11; i++) {
    console.log(i);
}
let i = 10;
while (i > 0) {
    console.log(i);
    --i;
}

// Задание 3
console.log("\n\n");

function task3(arr) {
    console.log(arr.join(", "))
}
const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
const practices = ['Практика 1', 'Практика 2', 'Практика 3'];
lectures.push("ОТема 4 (новая)")
practices.unshift("Практика 0 (новая)")
console.log("Лекции")
lectures.forEach(i => console.log(i))
console.log("Практики")
practices.forEach(i => console.log(i))
task3(lectures);


// Задание 4
console.log("\n\n");

function task4(arr) {
    return arr.filter(i => i.startsWith("О"));
}
console.log(task4(lectures).join(", "));