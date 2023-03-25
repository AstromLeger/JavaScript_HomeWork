// Задание 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
// const input = document.getElementById('from')
// console.log(input);
// const span = document.querySelector('span')
// console.log(span);
// input.addEventListener('input', (e) => {
//   e.preventDefault()
//   span.textContent = input.value
// })


// Задание 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
// const button = document.querySelector('.messageBtn')
// button.addEventListener('click', () => {
//   button.classList.add('animate_animated')
//   button.classList.add('animate_fadeInLeftBig')
//   button.style.visible = 'visibility'
// })


// Задание 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
const input = document.querySelectorAll('input')
console.log(input);
const button = document.querySelectorAll('button')
console.log(button);
button[1].addEventListener('click', (e) => {
  input.forEach((input) => {
    if (input.value == '') {
      e.preventDefault()
      input.classList.add('error')
      input.style.backgroundColor = '#FF0000'
    }
  })
})
input[0].addEventListener('input', (e) => {
  e.preventDefault()
  input.forEach((input) => {
    if (!input == '') {
      input.classList.remove('error')
      input.style.backgroundColor = 'inherit'
    }
  })
})

input[1].addEventListener('input', (e) => {
  e.preventDefault()
  input.forEach((input) => {
    if (!input == '') {
      input.classList.remove('error')
      input.style.backgroundColor = 'inherit'
    }
  })
})















































































