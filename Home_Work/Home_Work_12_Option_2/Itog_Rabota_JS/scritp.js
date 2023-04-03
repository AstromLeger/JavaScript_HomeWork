let menuActive = document.querySelector(".Spisok_Menu");
let headerMenu = document.querySelector(".Menu");

function toggleMenu() {
  menuActive.classList.toggle("Inviz");
}
headerMenu.addEventListener("click", toggleMenu);

const vtoraayPolovina = JSON.parse(pokupki);
console.log(vtoraayPolovina);
const base = document.querySelector(".IMG_Vtoroy_poloviniy");

vtoraayPolovina.reverse().forEach((element) => {
  base.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="Otstup_Vtor_Pol">
            <div  style="background-image: url(${element.Picture})" class="Picture_In_Black">
              <div class="Button_Kupit">
                <button class="Button_Pokupki">
                  <img src="./img/KorzinaWhite.png" alt="">
                  <h5>Add to Cart</h5>
                </button>
              </div>
            </div>
            <h5 class="color_h5">${element.h5}</h5>
            <p>
            ${element.p}
            </p>
            <h5 class="color_money">${element.price}</h5>
          </div>
  `
  );
});

const button_vtoraayPolovina = document.querySelectorAll(".Button_Pokupki");
console.log(button_vtoraayPolovina);
const zakaz = JSON.parse(Zakaz);
// console.log(zakaz);
const group_DSG = document.querySelector(".section_DSG");
console.log(group_DSG);
group_DSG.insertAdjacentHTML(
  'afterend',
  `
<section>
<div class="Zakazu_h3 Invizible">
<h3>Card&nbsp;Items</h3>
</div>
<div class="Zakazu Invizible"></div>
</section>
`
);
const Zakazu_h3 = document.querySelector('.Zakazu_h3');
const div_Zakazu = document.querySelector(".Zakazu");
console.log(div_Zakazu);

button_vtoraayPolovina.forEach((element, index) =>{
  element.addEventListener('click', ()=>{
    if (div_Zakazu.checked) {
      
    }
    Zakazu_h3.classList.add('container')

    div_Zakazu.classList.add('container')

    div_Zakazu.insertAdjacentHTML(
      "afterbegin",
      `
  <div class="Zakaz zakaz${index}">
          <img class="Zakaz_img" src="${zakaz[index].img}" alt="photo1" />
          <div class="Zakaz_text">
            <h2 class="Zakaz_h2">${zakaz[index].h2}</h2>
            <div class="Zakaz_p">
              <p>Price: <span class="price">${zakaz[index].price}</span></p>
              <p>Color: <span class="color">${zakaz[index].color}</span></p>
              <p>Size: <span class="size">${zakaz[index].size}</span></p>
              <p>Quantity: <input class="input_Zakaz" type="number" value="${zakaz[index].quantity}" /></p>
            </div>
          </div>
          <button class="delete-item">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                        fill="#575757"
                      />
                    </svg>
                  </button>
        </div>
    `
    );
    const close = document.querySelector('.delete-item');
    const card = document.querySelector('.Zakaz');
    close.addEventListener('click', () => {
      card.remove();
      if (document.querySelectorAll('.Zakaz').length == 0) {
        Zakazu_h3.classList.remove('container')

        div_Zakazu.classList.remove('container')
      }
    })
  });
  })









































































































// button_vtoraayPolovina[0].addEventListener("click", () => {
//   div_Zakazu.insertAdjacentHTML(
//     "beforeend",
//     `
// <div class="Zakaz Z1">
//         <img class="Zakaz_img" src="${zakaz[0].img}" alt="photo1" />
//         <div class="Zakaz_text">
//           <h2 class="Zakaz_h2">${zakaz[0].h2}</h2>
//           <div class="Zakaz_p">
//             <p>Price: <span class="price">${zakaz[0].price}</span></p>
//             <p>Color: <span class="color">${zakaz[0].color}</span></p>
//             <p>Size: <span class="size">${zakaz[0].size}</span></p>
//             <p>Quantity: <input class="input_Zakaz" type="number" value="${zakaz[0].quantity}" /></p>
//           </div>
//         </div>
//         <div class="Zakaz_close ZC1"><img src="./img/Krest.png" alt="" /></div>
//       </div>
//   `
//   );
//   const close1 = document.querySelector('.ZC1');
//   const card1 = document.querySelector('.Z1');
//   close1.addEventListener('click', () => {
//     card1.remove()
//   })
// });

// button_vtoraayPolovina[1].addEventListener("click", () => {
//   div_Zakazu.insertAdjacentHTML(
//     "beforeend",
//     `
// <div class="Zakaz Z2">
//         <img class="Zakaz_img" src="${zakaz[1].img}" alt="photo1" />
//         <div class="Zakaz_text">
//           <h2 class="Zakaz_h2">${zakaz[1].h2}</h2>
//           <div class="Zakaz_p">
//             <p>Price: <span class="price">${zakaz[1].price}</span></p>
//             <p>Color: <span class="color">${zakaz[1].color}</span></p>
//             <p>Size: <span class="size">${zakaz[1].size}</span></p>
//             <p>Quantity: <input class="input_Zakaz" type="number" value="${zakaz[1].quantity}" /></p>
//           </div>
//         </div>
//         <div class="Zakaz_close ZC2"><img src="./img/Krest.png" alt="" /></div>
//       </div>
//   `
//   );
//   const close2 = document.querySelector('.ZC2');
//   const card2 = document.querySelector('.Z2');
//   close2.addEventListener('click', () => {
//     card2.remove()
//   })
// });

// button_vtoraayPolovina[2].addEventListener("click", () => {
//   div_Zakazu.insertAdjacentHTML(
//     "beforeend",
//     `
// <div class="Zakaz Z3">
//         <img class="Zakaz_img" src="${zakaz[2].img}" alt="photo1" />
//         <div class="Zakaz_text">
//           <h2 class="Zakaz_h2">${zakaz[2].h2}</h2>
//           <div class="Zakaz_p">
//             <p>Price: <span class="price">${zakaz[2].price}</span></p>
//             <p>Color: <span class="color">${zakaz[2].color}</span></p>
//             <p>Size: <span class="size">${zakaz[2].size}</span></p>
//             <p>Quantity: <input class="input_Zakaz" type="number" value="${zakaz[2].quantity}" /></p>
//           </div>
//         </div>
//         <div class="Zakaz_close ZC3"><img src="./img/Krest.png" alt="" /></div>
//       </div>
//   `
//   );
//   const close3 = document.querySelector('.ZC3');
//   const card3 = document.querySelector('.Z3');
//   close3.addEventListener('click', () => {
//     card3.remove()
//   })
// });

// button_vtoraayPolovina[3].addEventListener("click", () => {
//   div_Zakazu.insertAdjacentHTML(
//     "beforeend",
//     `
// <div class="Zakaz Z4">
//         <img class="Zakaz_img" src="${zakaz[3].img}" alt="photo1" />
//         <div class="Zakaz_text">
//           <h2 class="Zakaz_h2">${zakaz[3].h2}</h2>
//           <div class="Zakaz_p">
//             <p>Price: <span class="price">${zakaz[3].price}</span></p>
//             <p>Color: <span class="color">${zakaz[3].color}</span></p>
//             <p>Size: <span class="size">${zakaz[3].size}</span></p>
//             <p>Quantity: <input class="input_Zakaz" type="number" value="${zakaz[3].quantity}" /></p>
//           </div>
//         </div>
//         <div class="Zakaz_close ZC4"><img src="./img/Krest.png" alt="" /></div>
//       </div>
//   `
//   );
//   const close4 = document.querySelector('.ZC4');
//   const card4 = document.querySelector('.Z4');
//   close4.addEventListener('click', () => {
//     card4.remove()
//   })
// });

// button_vtoraayPolovina[4].addEventListener("click", () => {
//   div_Zakazu.insertAdjacentHTML(
//     "beforeend",
//     `
// <div class="Zakaz Z5">
//         <img class="Zakaz_img" src="${zakaz[4].img}" alt="photo1" />
//         <div class="Zakaz_text">
//           <h2 class="Zakaz_h2">${zakaz[4].h2}</h2>
//           <div class="Zakaz_p">
//             <p>Price: <span class="price">${zakaz[4].price}</span></p>
//             <p>Color: <span class="color">${zakaz[4].color}</span></p>
//             <p>Size: <span class="size">${zakaz[4].size}</span></p>
//             <p>Quantity: <input class="input_Zakaz" type="number" value="${zakaz[4].quantity}" /></p>
//           </div>
//         </div>
//         <div class="Zakaz_close ZC5"><img src="./img/Krest.png" alt="" /></div>
//       </div>
// `
//   );
//   const close5 = document.querySelector('.ZC5');
//   const card5 = document.querySelector('.Z5');
//   close5.addEventListener('click', () => {
//     card5.remove()
//   })
// });

// button_vtoraayPolovina[5].addEventListener("click", () => {
//   div_Zakazu.insertAdjacentHTML(
//     "beforeend",
//     `
// <div class="Zakaz Z6">
//         <img class="Zakaz_img" src="${zakaz[5].img}" alt="photo1" />
//         <div class="Zakaz_text">
//           <h2 class="Zakaz_h2">${zakaz[5].h2}</h2>
//           <div class="Zakaz_p">
//             <p>Price: <span class="price">${zakaz[5].price}</span></p>
//             <p>Color: <span class="color">${zakaz[5].color}</span></p>
//             <p>Size: <span class="size">${zakaz[5].size}</span></p>
//             <p>Quantity: <input class="input_Zakaz" type="number" value="${zakaz[5].quantity}" /></p>
//           </div>
//         </div>
//         <div class="Zakaz_close ZC6"><img src="./img/Krest.png" alt="" /></div>
//       </div>
//   `
//   );
//   const close6 = document.querySelector('.ZC6');
//   const card6 = document.querySelector('.Z6');
//   close6.addEventListener('click', () => {
//     card6.remove()
//   })
// });


