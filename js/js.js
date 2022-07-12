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
}

//запускает игру
function play() {
    const generated = getRandomNumber(RANDOM_MIN_NUMBER, RANDOM_MAX_NUMBER);

    let entered = nul; //значение, введеное пользователем
    let attempts = 0; // кол-во попыток угадывания

    //опрос пользователя неограниченное кол-во раз
    while (generated !== entered) {
        const prompted = Number(prompt(messag: "Enter the number"));

        if (isNaN(prompted)) {
            continue;
        }

        entered = prompted;
        attempts++;

        switch (compareNumbers(entered, generated)) {

        }
    }
}

function getRandomNumber(min, max) {
    return Math.trunc(x: Math.random() * (max - min) + min);
}