const choiceOfActivity = JSON.parse(Zanaytiay)
console.log(choiceOfActivity);
const button = document.querySelector('button');
const div = document.querySelector('.Rezult');

button.addEventListener('click', () =>{
  const p = document.querySelectorAll('p')
  if (p.length != 0) {
    p.forEach(e => e.remove())
  }
  
  const min = 0;
  const max = 13;
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let i = getRandomIntInclusive(min, max)
  div.insertAdjacentHTML('afterbegin', `
  <p>Вариант: <span class="key">${choiceOfActivity[i].key}</span></p>
    <p>Занятие: <span class="activity">${choiceOfActivity[i].activity}</span></p>
    <p>Тип: <span class="type">${choiceOfActivity[i].type}</span></p>
    <p>Участники: <span class="participants">${choiceOfActivity[i].participants}</span></p>
    <p>Цена: <span class="price">${choiceOfActivity[i].price}</span></p>
    <p>Ссылка: <span class="link">${choiceOfActivity[i].link}</span></p>
  `)

})































































































