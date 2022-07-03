const categoriesElts = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesElts.length}`);
categoriesElts.forEach((element) => {
    return console.log(`Category: ${element.querySelector("h2").textContent}
Elements:${element.querySelectorAll("li").length}`);
})

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст
//  заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).