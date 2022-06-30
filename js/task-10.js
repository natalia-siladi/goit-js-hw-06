// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener("click", createBoxes)
refs.destroyBtn.addEventListener("click", destroyBoxes)

function createBoxes(amount) {

  amount = Number(refs.input.value);
  let firstBoxWidth = 30;
  let firstBoxHeight = 30;
  for (let i = 0; i < amount; i += 1) {


    const boxElt = document.createElement("div");
    boxElt.style.width = (firstBoxWidth += 10) + "px";
    boxElt.style.height = (firstBoxHeight += 10) + "px";
    boxElt.style.background = getRandomHexColor();
    refs.boxes.appendChild(boxElt)
  }

}
function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}