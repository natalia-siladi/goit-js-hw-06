// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
    counter: document.querySelector("#value"),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
}
refs.incrementBtn.addEventListener("click", onIncrementBtnClick);
refs.decrementBtn.addEventListener("click", onDecrementBtnClick);
let counterValue = 0;

function onIncrementBtnClick() {
    counterValue += 1;
    refs.counter.textContent = counterValue;

}

function onDecrementBtnClick() {
    counterValue -= 1;
    refs.counter.textContent = counterValue;
}