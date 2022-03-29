'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var decimal = 0;
  for (let i = 0; i < num.length; i++) {
    decimal += num[i] * 2 ** (num.length - 1 - i)  
  }
  return decimal
  }

function DecimalABinario(num) {
  // tu codigo aca
  var binario = [];
  while (num >= 1){
    binario.unshift(num % 2)
    num = Math.floor(num / 2)   
  }
  return binario.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}