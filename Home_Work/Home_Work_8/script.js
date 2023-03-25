// Задание 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener("DOMContentLoaded", () => {
  console.log("все теги прогрузились");
});

// Задание 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.onload = () => {
  console.log("Cтраница загрузилась");
};

// Задание 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.
const p_tegs = document.querySelectorAll("p");
const img_tegs = document.querySelectorAll("img");
const br_tegs = document.querySelectorAll("br");
const button_tegs = document.querySelectorAll("button");
const textarea_tegs = document.querySelectorAll("textarea");
const ul_tegs = document.querySelectorAll("ul");
const li_tegs = document.querySelectorAll("li");
// console.log(p_tegs);
// console.log(img_tegs);
// console.log(br_tegs);
// console.log(button_tegs);
// console.log(textarea_tegs);
// console.log(ul_tegs);
// console.log(li_tegs);
p_tegs.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element.classList.contains("super_element")) {
      console.log(`Класс 'super_element' присутсвует у данного элемента`);
    } else {
      console.log(`Класс 'super_element' отсутсвует у данного элемента`);
    }
    console.log(event.target);
  });
});

img_tegs.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element.classList.contains("super_element")) {
      console.log(`Класс 'super_element' присутсвует у данного элемента`);
    } else {
      console.log(`Класс 'super_element' отсутсвует у данного элемента`);
    }
    console.log(event.target);
  });
});

br_tegs.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element.classList.contains("super_element")) {
      console.log(`Класс 'super_element' присутсвует у данного элемента`);
    } else {
      console.log(`Класс 'super_element' отсутсвует у данного элемента`);
    }
    console.log(event.target);
  });
});

button_tegs.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element.classList.contains("super_element")) {
      console.log(`Класс 'super_element' присутсвует у данного элемента`);
    } else {
      console.log(`Класс 'super_element' отсутсвует у данного элемента`);
    }
    console.log(event.target);
  });
});

textarea_tegs.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element.classList.contains("super_element")) {
      console.log(`Класс 'super_element' присутсвует у данного элемента`);
    } else {
      console.log(`Класс 'super_element' отсутсвует у данного элемента`);
    }
    console.log(event.target);
  });
});

ul_tegs.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element.classList.contains("super_element")) {
      console.log(`Класс 'super_element' присутсвует у данного элемента`);
    } else {
      console.log(`Класс 'super_element' отсутсвует у данного элемента`);
    }
    console.log(event.target);
  });
});

li_tegs.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element.classList.contains("super_element")) {
      console.log(`Класс 'super_element' присутсвует у данного элемента`);
    } else {
      console.log(`Класс 'super_element' отсутсвует у данного элемента`);
    }
    console.log(event.target);
  });
});

// Задание 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textarea = document.querySelector("textarea");
textarea.addEventListener("mouseover", () => {
  console.log(`Вы навели на textarea.`);
});

// Задание 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
const button = document.querySelectorAll("ul>li>button");
// console.log(button);
button.forEach((element) => {
  element.addEventListener("click", (event) => {
    console.log(event.target);
  });
});


// Задание 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
"В обеих задачах я использовал forEach. В 3 задаче используется NodeList с размером в  элемента, а в 5 "


// Задание 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

// Вариант 1 (изменение заднего фона у button)
// const LI = document.querySelectorAll('li>button')
// console.log(LI);
// for (let index = 1; index < LI.length; index+=2) {
//   LI[index].style.backgroundColor = '#FF7F50'
// }

// Вариант 2 (изменение заднего фона у li )
const LI = document.querySelectorAll("li");
// console.log(LI);
for (let index = 1; index < LI.length; index += 2) {
  LI[index].style.backgroundColor = "#FF7F50";
}
