const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsArray = ingredients.map(option => {
  const ingredientsElement = document.createElement("li");
  ingredientsElement.classList.add("item");
  ingredientsElement.textContent = option;
  return ingredientsElement;
})

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...ingredientsArray);