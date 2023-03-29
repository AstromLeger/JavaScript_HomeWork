let menuActive = document.querySelector('.Spisok_Menu')
let headerMenu = document.querySelector('.Menu')

function toggleMenu() {
  menuActive.classList.toggle('Inviz')
}
headerMenu.addEventListener('click', toggleMenu)

const vtoraayPolovina = JSON.parse(pokupki)
console.log(vtoraayPolovina);
const base = document.querySelector('.IMG_Vtoroy_poloviniy');
vtoraayPolovina.reverse().forEach(element => {
  base.insertAdjacentHTML('afterbegin', `
  <div class="Otstup_Vtor_Pol">
            <img src="${element.Picture}" alt="" />

            <h5 class="color_h5">${element.h5}</h5>
            <p>
              ${element.p}
            </p>
            <h5 class="color_money">${element.price}</h5>
          </div>
  `)
});

const list2Polovinu = document.querySelectorAll('.Otstup_Vtor_Pol')
console.log(list2Polovinu);
list2Polovinu[1].classList.add('Zatemnenie_Picture')
console.log(list2Polovinu[1]);
list2Polovinu[1].insertAdjacentHTML('afterbegin', `
  <div class="Picture_In_Black">
              <div class="Button_Kupit">
                <button>
                  <img src="./img/KorzinaWhite.png" alt="">
                  <h5>Add to Cart</h5>
                </button>
              </div>
            </div>
`)









