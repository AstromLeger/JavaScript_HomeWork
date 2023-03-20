// // Задание 1
// for (let i = 0; i < 11; i++) {

//   if ( i == 0) {
//     console.log(`${i} - это ноль`)
//   } 
//   else if (i % 2 == 0) {
//     console.log(`${i} - чётное число`)
//   } 
//   else {
//     console.log(`${i} - нечётное число`)
//   }
// }

// // Задание 2
// const array = [];
// for (let i = 0; i <= 6; i++) {
//   array.push(1 + i)
// }
// console.log(array);
// const newArray = array.filter(el => el !== 4 && el !== 5)
// console.log(newArray);

// Задание 3
const array = [];
for (let i = 0; i < 5; i++) {
  array.push(Math.floor(Math.random()*10))
}
console.log(array);
console.log(Sum());
console.log(PoiskMin());
console.log(Poisk_3());










function Sum() {
  let Summa = 0;
  for (let i = 0; i < array.length; i++) {
    Summa = Summa + array[i]
  }
  return Summa
}

function PoiskMin() {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i]
    }
  }
  return min;
}

function Poisk_3() {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 3) {
      console.log(`3 есть в массиве`);
      break;
    }
    else {
      console.log(`3 нет в массиве`);
    }
  }

}







































































