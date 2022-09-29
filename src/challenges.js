// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;    
  } return false;
}

// Desafio 2
function calcArea(param1, param2) {
  return (param1 * param2) / 2;
}
// calcArea(20,10)
// console.log(area);


// Desafio 3
function splitSentence(param1) {
 return param1.split(' ');
}


// splitSentence('Hj vai chover');
// console.log(divisorPal);

// Desafio 4

// function concatName(param1, from, to) {
//   param1.splice(to, 0, param1.splice(from, param1.length - 1)[0]);
//   return  param1
// }

function concatName(param1) {
  return param1[param1.length -1] + ', ' + param1[0]
}

// let nomes = ["Andre", "Rapha", "Ze"];
// concatName(nomes)
// console.log(nomes);


// Desafio 5



function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}


// console.log(footballPoints(20, 20));




// Desafio 6

// function highestCount(param1) {
//   for (let index = 0; index < param1.length; index += 1) {
//         if (param1 > param1[index]) {
//       numeroMaior = param1[index]
//     };
   
//   }
// }

// console.log(highestCount("[9, 1, 2, 3, 9, 5, 7]"));

function highestCount(param1) {
  let numeroMaior = param1[0];
  let contador = 0;

  for (let index in param1) {
    if (param1[index] >= numeroMaior) {
      numeroMaior = param1[index];
    }
  }

  for (let index in param1) {
    if (param1[index] === numeroMaior) {
      contador += 1;
    }
    return contador;
  }
  
  



console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));


// function highestCount(array) {
//   let maior = Number.NEGATIVE_INFINITY;
//   let contador = 0;
//   for (let number of array){
//     if (number >= maior){
//       maior = number;
//     }
//   }
//   for (let number of array){
//     if (number === maior){
//       contador += 1;
//     }
//   }
//   return contador;
// }

function highestCount(array) {
  let greater;
  let count = 0;

if (count == 0) {
  for (let i = 0; i < array.length; i += 1){
      if (array[i] > array[(i + 1)] ) {
          greater = array[i];
      }
  }
  for (i = 0; i < array.length; i += 1) {
      if (greater === array[i]) {
          count += 1;
      }
  }
}

return count;


console.log(highestCount([9, 1, 9, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
