// Aula 1

// Paradigmas 
// Orientação a Objetos

/*

Paradigmas 

Imperativo           Declarativo
Procedural           Logic
Object Processing    Functional  -  Dataflow
Parallel Procesing   Database

*/

/* Na orientação a objetos os programas são "objetos"
que possuem uma série de propriedades.

Pilares:

- Herança
- Polimorfismo
- Ebcapsulamento
- Abstração

*/

/* Abstração

"Processo mental que consiste em isolar um aspecto determinado de um estado de coisas relativamente complexo, a fim de simplificar a sua avaliação, classificação ou para permitir a comunicação do mesmo" 

*/

/* Herança

O objeto filho herda propriedades e metodos do objeto pai, mas tem suas proprias caracteristicas

*/

/* Encapsulamento

Cada classe tem propriedades e métodos independentes do restante do código.

*/

/* Polimorfismo


Objetos podem herdar a mesma classe pai, mas se comportarem de forma diferente quando invocamos seus métodos

*/

//  AULA 2

/* Protótipos

Todos os objetos Javascript herdam propriedades e métodos de um prototype.

O objeto Object.prototype está no todo desta cadeia:

const objeto = {}
undefined
objeto
{}
[[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (…)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

*/

/* Classes

Syntatic sugar: uma sintaxe feita para facilitar a escrita

// Apartir do ECMAscrip 6 conseguimos utilizar classe em javascript para facilitar a escrita

Ex:

// 1. sem utilizar classe

var Meal = function(food) {
    this.food = food
}

Meal.prototype.eat = function() {
    return '😋'
}

// 2. utilizando classe

class Meal {
    constructor (food) {
        this.food = food
    }

    eat() {
        return '😋'
    }
}

Javascript não possui classes nativamente. Todas as classes são objetos e a herança se dá por protótipos.

*/

