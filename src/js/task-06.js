// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.


// Яка кількість символів повинна бути в інпуті, зазначається в його 
// атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає 
// зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які 
// ми вже додали у вихідні файли завдання.


const value = document.querySelector('#validation-input');
const checkLength = value.dataset.length;

value.addEventListener('blur', onBlur)

function onBlur(event) {
    if (event.currentTarget.value.length === Number(checkLength)) {
      value.classList.remove('invalid');
      value.classList.add('valid');
    }
    else {
      value.classList.remove('valid');
      value.classList.add('invalid');
    }
}