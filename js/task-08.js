// Напиши скрипт управління формою логіна.


// Обробка відправлення форми form.login-form повинна відбуватися відповідно 
// до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що 
// всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів 
// в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням 
// властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом 
// reset.


const btnEl = document.querySelector(".login-form");
btnEl.addEventListener('submit', submitEl);

function submitEl(elem) {
elem.preventDefault();
const {elements: {email, password},} = elem.currentTarget;


if (email.value === "" || password.value === "") {
    return alert("Заповни будь ласка дані");
    }

    // console.log(`Email: ${email.value} Password: ${password.value}`)


    const user = {};
    user.email = email.value,
    user.password = password.value

    console.log(user);
    
    elem.currentTarget.reset();
    
}

