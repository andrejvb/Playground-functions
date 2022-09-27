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

function concatName(param1) {
  return param1[param1.length -1] + ', ' + param1[0]
}


let nomes = ["Andre", "Rapha", "caique", "Ze"];
concatName(nomes)

console.log(concatName(nomes));


// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

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
