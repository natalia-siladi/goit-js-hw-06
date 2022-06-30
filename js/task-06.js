// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет
//  его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если
// неправильное - красным.Для добавления стилей, используй CSS - классы valid и invalid, которые
// мы уже добавили в исходные файлы задания.

const inputElt = document.querySelector("#validation-input");
const inputLength = Number(inputElt.dataset.length);


inputElt.addEventListener("blur", onInputEltCheck);


function onInputEltCheck(event) {
    if (event.currentTarget.value.length === inputLength) {
        inputElt.classList.add("valid");
        inputElt.classList.remove("invalid");
    }
    if (event.currentTarget.value.length !== inputLength) {
        inputElt.classList.add("invalid");
        inputElt.classList.remove("valid");
    }
    if (event.currentTarget.value.length === 0) {
        inputElt.classList.remove("valid");
        inputElt.classList.remove("invalid");
    }
}