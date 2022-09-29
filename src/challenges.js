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
  return param1[param1.length - 1] + ', ' + param1[0]
};

// let nomes = ["Andre", "Rapha", "Ze"];
// concatName(nomes)
// console.log(nomes);


// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
};

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
  }
  return contador;
}


  // console.log(highestCount([9, 1, 9, 3, 9, 5, 7]));

  // Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    
let distancecat1 = Math.abs (mouse - cat1);
let distancecat2 = Math.abs (mouse - cat2);
let result = '';

        
  if (distancecat1 > distancecat2) {
      return result = 'cat2';      
    } 
    else if (distancecat2 > distancecat1) {
      return result = 'cat1';    
    } else {
      return result = 'os gatos trombam e o rato foge';
    }
  
  }

// console.log(catAndMouse(10,5,15));



  // Desafio 8
  function fizzBuzz(num) {
    let resultfizzBuzz = [''];

    for (let index = 0; index < num.length; index += 1) {
         
      if (num[index] % 3 === 0 && num[index] % 5 === 0) {
      resultfizzBuzz[index] = 'fizzBuzz';
      }
      else if (num[index] % 3 === 0) {
        resultfizzBuzz[index] = 'fizz';             
      }
      else if (num[index] % 5 === 0) {
        resultfizzBuzz[index] = 'buzz';        
      }
      else {
        resultfizzBuzz[index] = 'bug!';
      }            
    }
    return resultfizzBuzz; 
  }

// console.log(fizzBuzz([9, 1, 9, 3, 9, 5, 7]));
  

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
