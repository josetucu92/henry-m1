'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1];
  let divisor = 2;
  
  while(num !== 1) { // mientras el numero sea distinto de uno entra al bucle
      
    if(num % divisor === 0) {   // si residuo es 0
        array.push(divisor);   // lo pushea
        num = num / divisor;  // llega un punto que el residuo no es 0 y para continuar operando lo divido
    
      } else {
        divisor++;
      }    
  }
  return array;  
};

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let cambio = true;

  while(cambio){
    cambio = false;

    for(let i = 0; i < array.length; i++){
      if(array[i] > array[i + 1]){
        let aux = array[i+1];
        array[i+1] = array[i];
        array[i] = aux;
        cambio = true;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    let menor = i;
    for(let j = i + 1; j < array.length; j++){
        let adelantado = j;
        if(array[adelantado] < array[menor]){
                menor = adelantado
        }
    }
    if(menor !== i){


    }
    
  }

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
