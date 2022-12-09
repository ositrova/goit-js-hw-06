// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод 
// document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');

const createItem = ingredients.map((el) => {
  const list = document.createElement("li")
  list.classList.add("item")
  list.textContent = el

  return list
})

ingredientsEl.append(...createItem)
console.log(ingredientsEl)

// const ingredientsElement = document.querySelector("#ingredients");

// const createItemEl = ingredients.map((el) => {
//   const ingredientsItemsEl = document.createElement("li");
//   ingredientsItemsEl.classList.add("item");
//   ingredientsItemsEl.textContent = el;

//   return ingredientsItemsEl;
// });

// ingredientsElement.append(...createItemEl);
// console.log(ingredientsElement);