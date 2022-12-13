// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
//  і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
//  В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const controlEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

textEl.style.fontSize = controlEl.value + 'px';

const textSize = () => {
    textEl.style.fontSize = `${controlEl.value}px`;
}

controlEl.addEventListener('input', textSize);

