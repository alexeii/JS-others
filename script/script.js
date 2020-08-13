"use strict";

/* function random() {
  return Math.floor(Math.random() * 100) + 1;
} */

function getNumber() {
  let randomNumber = 47;

  alert("Угадайте число от 1 до 100");
  let answer = prompt("Угадайте число от 1 до 100");

  if (answer === null) {
    alert("Конец игры");
  } else if (answer.trim() === "" || answer === undefined || isNaN(answer)) {
    alert("Введи число!");
    getNumber();
  } else if (+answer === randomNumber) {
    alert("Поздравляю, Вы угадали!!!");
  } else if (+answer > randomNumber) {
    alert("Загаданное число меньше");
    getNumber();
  } else if (+answer < randomNumber) {
    alert("Загаданное число больше");
    getNumber();
  }
}

getNumber();
