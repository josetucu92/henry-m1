'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
  this._length = 1;
}

BinarySearchTree.prototype.insert = function(data){
    const newTree = new BinarySearchTree(data);

if(data < this.value){
  if(!this.left){
    this.left = newTree;
    this._length++
  } else {
    this.left.insert(data)
    this._length++
  }
}

if(data > this.value){
  if(!this.right){
    this.right = newTree;
    this._length++
  } else {
    this.right.insert(data)
    this._length++
  }
}
};  



BinarySearchTree.prototype.contains = function(value){    
  if(value === this.value) return true; // si el valor es igual a la raiz
  if(value > this.value) { // si el valor del parametro es mayor a la raiz
    if(!this.right) return false; // si this.right es nulo retorno falso 
      else {
        return this.right.contains(value); // si no es falso aplico la maravillosa recursion
      }
  }

  if(value < this.value) { // lo mismo que arriba pero para el otro lado
    if(!this.left) return false;
      else {
        return this.left.contains(value);
}
}
}


BinarySearchTree.prototype.depthFirstForEach = function(cb, order){ // recorrido de arriba hacia abajo
  if(order === "pre-order") {
    cb(this.value); // primero recorre la raiz
    if(this.left) this.left.depthFirstForEach(cb, order); // luego el lazo izquierdo
    if(this.right) this.right.depthFirstForEach(cb, order); // luego lado derecho
  
  
  } else if (order === "post-order") {
    if(this.left) this.left.depthFirstForEach(cb, order); // lado izquierdo
    if(this.right) this.right.depthFirstForEach(cb, order); // lado derecho
    cb(this.value) // raiz
  
  
  } else{
    if(this.left) this.left.depthFirstForEach(cb, order);
    cb(this.value)
    if(this.right) this.right.depthFirstForEach(cb, order);
  }
} 


BinarySearchTree.prototype.breadthFirstForEach = function(cb, array){ // recorrido por niveles
    if(!array) var array = []; //
    if(this.left) array.push(this.left); // si existe la rama izquierda la pusheeo completa al arreglo
    if(this.right) array.push(this.right) // si existe la rama derecha la pusheeo completa al arreglo
    cb(this.value)
    if(array.length > 0) array.shift().breadthFirstForEach(cb, array); // hasta que el array no quede vacio le voy sacando la primera posicion del mismo
}


BinarySearchTree.prototype.size = function(){
    return this._length
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
