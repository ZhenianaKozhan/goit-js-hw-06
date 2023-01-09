const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById("ingredients");

let arrayItem = []

  for (const ingredient of ingredients) {
  const itemEl = document.createElement("li")
  itemEl.textContent = ingredient
  itemEl.classList.add("item")
  arrayItem.push(itemEl)
  }

listEl.append(...arrayItem);