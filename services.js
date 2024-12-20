let password = prompt("Введите пароль: ");
if (password === "") alert("Пустой пароль!")
else {
    if (password === "12345") alert("Доступ разрешен!")
    else alert("Доступ запрещен!")
}

let arg1 = parseInt(prompt("Введите первое число"));
let arg2 = parseInt(prompt("Введите второе число"));
let operator = prompt("Введите оператор (+, -, *, /)");

switch (operator) {
    case '+':
        alert(`Результат: ${arg1 + arg2}`);
        break;
    case '-':
        alert(`Результат: ${arg1 - arg2}`);
        break;
    case '*':
        alert(`Результат: ${arg1 * arg2}`);
        break;
    case '/':
        if (arg2 === 0) alert("Невозможно поделить на ноль!");
        else alert(`Результат: ${arg1 / arg2}`);
        break;
    default:
        alert("Неверный оператор!")
        break;
}