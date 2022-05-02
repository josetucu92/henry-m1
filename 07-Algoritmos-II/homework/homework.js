'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  // return array.sort(function(a, b) {
  //   return a - b;
  // }); 

  // for(let i = 0; i < array.length; i ++){
  //   let pivot = array[0];
  //   let smallers = [];
  //   let biggers = [];
  //   let same = [];
  //   if(pivot >= array[i]) {
  //     smallers.push(array[i])
  //   } else if(pivot === array[i]) {
  //     same.push(array[i]);
  //   }
  //   else {
  //     biggers.push(array[i])
  //   }
  // }
  // let total = smallers.concat(same, biggers);
  // return total;

  let smallers = [];
  let biggers = [];
  let same = [];

  while (array.length !== 0) {
    for(let i = 0; i < array.length; i ++){
      if(array[0] > array[i]){
        smallers.push(array[i]);
      }
      else if(array[0] === array[i]) {
        same.push(array[i]);
      }
      else {
        biggers.push(array[i]);
      }
    }    
  }
  
  console.log(return smallers.concat(same, biggers))

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  // return array.sort(function(a, b) {
  //   return a - b;
  // });
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
