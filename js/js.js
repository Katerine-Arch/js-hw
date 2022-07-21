/*function func1() {
    var a = 1;
    var b = 2;

    var sum = a + b;

    console
}
func1();*/

/*var name = prompt("Enter your name")
alert("Hi " + name);

//var tf = +prompt("t по Фаренгейту");




function func1() {
    var tc = +prompt("t по Цельсию")
    var tf = (9 / 5) * tc + 32;

    var sum = tc + tf;

    console
}
func1();

alert("sum");*/


//1.	Задать температуру в градусах по Цельсию
var tc = 23;
var sum = (9 / 5) * tc + 32;
console.log(sum);

//2.	Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывестись «Василий»).
var tc = "Василий";
var sum = tc;
console.log(sum);


//

var x = 7;
var y = 8;

if (x > y)
    console.log("x больше y"); //   alert  - будет выводить в выпадающем меню
else if (x < y)
    console.log("x меньше y");
else
    console.log("x равно y");

//

var x = 8;
var y = 12;

if (x > y) {
    console.log(x + y);
    console.log(x - y);
} else {
    console.log(y / x);
}

//для условново выбора:

var x = 8;
var y = 12;

var max = (x > y) ? x : y;
console.log(max);

//переменная switch + break:

var n = "night";
switch (n) {
    case ("night"):
        console.log("Good night");
        break;
    case ("day"):
        console.log("Good day");
        break;
    default:
        console.log("Good bye");
        break;
}

//ИГРА УГАДАЙКА. описание действий пользователя
const RANDOM_MIN_NUMBER = 1;
const RANDOM_MAX_NUMBER = 5;

function start() {
    const yes = confirm("Want to play?"); //boolean

    if (!yes) {
        return;
    }

    play();
    start();
}

//запускает игру
function play() {
    const generated = getRandomNumber(RANDOM_MIN_NUMBER, RANDOM_MAX_NUMBER);

    let entered = nul; //значение, введеное пользователем
    let attempts = 0; // кол-во попыток угадывания

    //опрос пользователя неограниченное кол-во раз
    while (generated !== entered) {
        entered = Number(prompt(message: 'Enter the number from ${RANDOM_MIN_NUMBE} to ${RANDOM_MAX_NUMBER}.')); //+prompt тоже самое, но тут поновее запись

        if (isNaN(entered)) {
            continue;
        }

        //entered = prompted;
        attempts++;

        switch (compareNumbers(entered, generated)) {
            case -1:
                alert('Загаданное число больше ${entered}. Повторите попытку.');
                break;
            case 1:
                alert('Загаданное число меньше ${entered}. Повторите попытку.');
                break;
            case 0:
                alert('Вы отгадали число ${generated} за ${attempts} попыток.');
                break;

        }
    }
}

function getRandomNumber(min, max) {
    return Math.trunc(x: Math.random() * (max - min) + min);
}

//ф-ция будет сверять два числа в отдельном блоке
function compareNumbers(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

//Урок 2. 
//Чему равен x. x = 5. 
var a = 2;
var x = 1 + (a *= 2);
console.log(x);


function compare_numbers(a, b) {
    if (a >= 0 || b >= 0)
        alert(a - b);
    else if (a < 0 || b < 0)
        alert(a * b);
    else
        alert(b + a);
}

compare_numbers(10, -20);

a = -5;
b = -8;

if (a >= 0 && b >= 0) {
    console.log("Разность = " + (a - b));
}

if (a < 0 && b < 0) {
    console.log("Произведение = " + (a * b));
}

if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    console.log("Сумма = " + (a + b));
}

// 8.	*С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (pow > 0) {
        return val * power(val, pow - 1);
    } else if (pow < 0) {
        return val * power(val, pow + 1);
    } else
        return 1;
}

console.log("2^10 = " + power(2, 10));

//1.	С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
var n = 100;
var i = 1;
while (i <= n) {
    console.log(i++);  // console.log() – выводит в браузер инфо
}