// Task 1
// Игра Угадай число С помощью функции при загрузке страницы генерируйте случайное число от 0 до 9. Добавьте его в переменную. Создайте input[type = text] и кнопку. На кнопку добавьте функцию, которая читает введенное пользователем число в элемент input. Проверьте введеное число: - не ввел ли пользователь пустую строку - ввел ли пользователь число. Сравните введенное и загаданное число. Если они совпали - выведите alert с поздравлением и перезагрузите страницу. Если не совпали - выведите alert с сообщением (больше или меньше введенное число загаданному).

let r = Math.round(Math.random() * 9);
console.log(r);

let yourNum = document.querySelector('#your-num');

document.querySelector('#btn').onclick = checkNum;

function checkNum() {
   let num = parseInt(yourNum.value); // без parseInt пустая строка будет восприниматься как 0
   console.log(num);
   if (!isNaN(num)) {
      if (num === r) { 
         alert('Вы угадали!');
         location.reload();
      }
      else {
         if (num > r) {
            yourNum.value = '';
            alert(' Введенное число больше загаданного');
         }
         else if (num < r) {
            yourNum.value = '';
            alert(' Введенное число меньше загаданного');
         }
      }
   }
   else alert('Введите корректное число!');
}

// Task 2
// Создайте кнопку. После первого нажатия кнопка дожна сменить текст на себе на "Не нажимать", и вывести на экран количество оставшихся попыток - 2. После 2 нажатий кнопки, она должна скрыть сама себя.

let btn2 = document.querySelector('#btn2');
let attempt = document.querySelector('.attempt');
let count = 3;

btn2.onclick = dontTouch;

function dontTouch() {
   count--;
   attempt.innerHTML = count;
   if (count == 0) { 
      btn2.style.display = 'none';
   }
   btn2.innerHTML = ' Не нажимать ';
}

// Task 3
// Создайте два поля для ввода чисел. После ввода и нажатия кнопки - выведите большее число.

let inpOne = document.querySelector('#inpOne');
let inpTwo = document.querySelector('#inpTwo');
let bigNum = document.querySelector('#bigNum');
let out = document.querySelector('.out');

bigNum.onclick = biggerNumber;

function biggerNumber() {
   let numOne = parseInt(inpOne.value);
   let numTwo = parseInt(inpTwo.value);
   if (numOne > numTwo) out.innerHTML = numOne;
   else if (numOne < numTwo) out.innerHTML = numTwo;
   else out.innerHTML = numOne;
}

//  Task 4
//  Создайте два поля. В одно пользователь вводит день рождения, во второй - месяц (в виде числа). Выведите знак зодиака под каким родился пользователь.

let day = document.querySelector('#day');
let month = document.querySelector('#month');
let z = document.querySelector('.zodiac');

document.querySelector('.btnZ').onclick = signZ;

function signZ() {
   let d = parseInt(day.value);
   let m = parseInt(month.value);
   if (m == 1) {
      if (d <= 19) z.innerHTML = 'Козерог';
      else z.innerHTML = 'Водолей';
   }
   else if (m == 2) {
      if (d <= 18) z.innerHTML = 'Водолей';
      else z.innerHTML = 'Рыбы';
   }
   else if (m == 3) {
      if (d <= 20) z.innerHTML = 'Рыбы';
      else z.innerHTML = 'Овен';
   }
   else if (m == 4) {
      if (d <= 19) z.innerHTML = 'Овен';
      else z.innerHTML = 'Телец';
   }
   else if (m == 5) {
      if (d <= 20) z.innerHTML = 'Телец';
      else z.innerHTML = 'Близнецы';
   }
   else if (m == 6) {
      if (d <= 20) z.innerHTML = 'Близнецы';
      else z.innerHTML = 'Рак';
   }
   else if (m == 7) {
      if (d <= 22) z.innerHTML = 'Рак';
      else z.innerHTML = 'Лев';
   }
   else if (m == 8) {
      if (d <= 22) z.innerHTML = 'Лев';
      else z.innerHTML = 'Дева';
   }
   else if (m == 9) {
      if (d <= 22) z.innerHTML = 'Дева';
      else z.innerHTML = 'Весы';
   }
   else if (m == 10) {
      if (d <= 22) z.innerHTML = 'Весы';
      else z.innerHTML = 'Скорпион';
   }
   else if (m == 11) {
      if (d <= 21) z.innerHTML = 'Скорпион';
      else z.innerHTML = 'Стрелец';
   }
   else if (m == 12) {
      if (d <= 21) z.innerHTML = 'Стрелец';
      else z.innerHTML = 'Козерог';
   }
}

// Task 5
// Создайте input куда пользователь может ввести год рождения. Программа должна вывести символ года по китайскому календарю. Подумайте как можно упростить программу.

let year = document.querySelector('#year');
let ch = document.querySelector('.china');

document.querySelector('.btnY').onclick = yearChina;

function yearChina() {
   let y = parseInt(year.value);
   if (y % 12 == 11) ch.innerHTML = 'Коза';
   if (y % 12 == 10) ch.innerHTML = 'Лошадь';
   if (y % 12 == 9) ch.innerHTML = 'Змея';
   if (y % 12 == 8) ch.innerHTML = 'Дракон';
   if (y % 12 == 7) ch.innerHTML = 'Кролик';
   if (y % 12 == 6) ch.innerHTML = 'Тигр';
   if (y % 12 == 5) ch.innerHTML = 'Бык';
   if (y % 12 == 4) ch.innerHTML = 'Крыса';
   if (y % 12 == 3) ch.innerHTML = 'Свинья';
   if (y % 12 == 2) ch.innerHTML = 'Собака';
   if (y % 12 == 1) ch.innerHTML = 'Петух';
   if (y % 12 == 0) ch.innerHTML = 'Обезьяна';
}

