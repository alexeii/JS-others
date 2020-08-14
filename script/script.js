"use strict";
let closure = () => {
  alert("Угадайте число от 1 до 100");
  let count = 1;
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  function getNumber() {
    let answer = prompt("Угадайте число от 1 до 100");
    //условие на 10 попыток
    if (count < 10) {
      //проверка на нажатие кнопки отмена
      if (answer === null) {
        alert("Конец игры");
        //проверка на число
      } else if (
        answer.trim() === "" ||
        answer === undefined ||
        isNaN(answer)
      ) {
        alert("Введи число!");
        getNumber();
      } else if (+answer === randomNumber) {
        let gameNew = confirm(
          "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"
        );
        if (gameNew) {
          //обнуление счетчика и запуск игры снова
          count = 1;
          getNumber();
        } else {
          alert("Конец игры");
        }
      } else if (+answer > randomNumber) {
        alert("Загаданное число меньше, осталось попыток " + (10 - count));
        //счетчик попыток
        count++;
        getNumber();
      } else if (+answer < randomNumber) {
        alert("Загаданное число больше, осталось попыток " + (10 - count));
        count++;
        getNumber();
      }
    } else {
      let user = confirm("Попытки закончились, хотите сыграть еще?");
      if (user) {
        count = 1;
        getNumber();
      } else {
        alert("Конец игры");
      }
    }
  }
  getNumber();
};

closure();
