// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати
//  і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення 
// лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue = 0

const btnCounter = {
    counterIncrement: document.querySelector("[data-action='increment']"),
    counterDecrement: document.querySelector("[data-action='decrement']"),
    counterValueEl: document.querySelector("#value"),
};
btnCounter.counterIncrement.addEventListener("click", incrementClick);
btnCounter.counterDecrement.addEventListener("click", decrementClick);
console.log(btnCounter)
 
function incrementClick(){
    counterValueEl += 1
}

function decrementClick(){
    counterValueEl -= 1
}