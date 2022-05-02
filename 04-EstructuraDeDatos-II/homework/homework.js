'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.
function Node(value){
    this.value = value;
    this.next = null;
}

function LinkedList() {
    this.head = null;    
}


LinkedList.prototype.add = function(info) {
  const nodo = new Node(info);  //instancio un nuevo nodo

    if(this.head === null){ //si el head esta vacio
      this.head = nodo; // le conecto el nuevo nodo

      } else {
    let current = this.head;
    while(current.next) { // mientras tenga un .next
        current = current.next; // AVANZO EL ITERADOR
    }
    current.next = nodo; // le conecto el nuevo nodo
      }
} 

// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1

LinkedList.prototype.remove = function() {
  if(!this.head) return null; // en el caso de una lista vacia
      
      else if(this.head) { // en el caso que tenga un nodo
          let aux = this.head.value; // capturo el valor
          this.head = null; // redefino
          return aux // devuelvo el valor del nodo eliminado
      }
      
      else {                              // en el caso que tenga mas de dos nodos
        let current = this.head;
        while(current.next.next) {    //mientras haya dos nodos mas adelante itero
          current = current.next      // AVANZA EL ITERADOR
        }
        let aux = current.next.value;  // capturo el valor
        current.next = null; // redefino
        return aux; // retorno el valor del nodo eliminado
      }
    }

// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

LinkedList.prototype.search = function(value) {
    if(this.head === null) return null;
    var current = this.head;
    
    while(this.head) {
      if(this.head.value === value) return this.head.value;

      else if(typeof value === "function") {
        if(value(current.value)) {
          return current.value;
        }
      }
      current = current.next;
    }
      return null;
    }



    // LinkedList.prototype.search = function(value) {
    //   if(this.head === null) return null; // en el caso que la lista este vacia
      
    //   var current = this.head;
      
    //   while(current) { // en el caso que el parametro iguale el value
    //     if(current.value === value) return current.value;
  
    //     else if(typeof value === "function") { // en caso de que el parametro recibido sea una funcion
    //       if(value(current.value)) {
    //         return current.value;
    //       }
    //     }
    //     current = current.next;
    //   }
    //     return null;
    //   }





// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {

}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
