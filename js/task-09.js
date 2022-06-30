

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeBtn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

changeBtn.addEventListener("click", onBodyColorChange);

function onBodyColorChange(event) {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();

}



// Напиши скрипт, который изменяет цвета фона
// элемента < body > через инлайн стиль при клике на button.change
//   - color и выводит значение цвета в span.color.