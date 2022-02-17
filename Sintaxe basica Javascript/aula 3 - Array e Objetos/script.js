// o que são vetores ou arrays

// como declarar um array

// let array = ['string', 1, true];
// console.log(array);

// pode guardar vários tipos de dados

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[3]);

// Manipulando Arrays

// Ao ser declarado, o Array traz consigo uma série de métodos para manipulá-lo.

// forEach() - itera um array;

// push() - add item no final do array;

// pop() - remove item no final do array;

// shift() - remove item no início do array;

// unshift() - add item no início do array;

// indexOf() - retorna o índice de um valor;

// splice() - remove ou substitui um item pelo índice;

// slice() - retorna uma parte de um array existente;

// forEach

// array.forEach(function(item, index){console.log(item, index)});

// push "adiciona um item no final do array"

// array.push("novo item");
// console.log(array);

// pop "remove um item do final do array"

// array.pop();
// console.log(array);

// shift "remove um item do inicio  do array"

// array.shift()
// console.log(array)

// unshift "adiciona um item no inicio do array"

// array.unshift('novo item no inicio');
// console.log(array);

// indexOf "retorna o indice dentro do array"

// console.log(array.indexOf(true));

// splice "remove ou substitui um item usando o indice"

// array.splice(0, 3);
// console.log(array)

// slice 'retorna parte de um array já existente usando o indice'

// let novoArray = array.slice(0, 3);
// console.log(novoArray);

// Objetos

// São dados que possuem propriedades e valores que definem suas característivas. Deve ser declarado entre chaves "{}".

// EX: imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções(quero cafee). Pode ser declarada assim;
/*  var xicara = { 
    cor: 'azul',
    tamanho: 'p',
    funcao: tomarCafe()
}*/

// Manipulando objetos

/* As propriedades de objetos podem ser atribuídas á variáveis, facilitando a manipulação do objeto. Chamamos isso de desestruturação.

Ex: var xicara = {cor:'azul', tamanho:'p', funcao: tomarCafe()}

   var cor = xicara.cor;
   var tamanho = xicara.tamanho;
   var funcao = tomarCafe();
   */

// let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { objectInterno: 'objeto interno'}};

// console.log(object.objectInterno);

// var string = object.string;
// console.log(string);

// var arrayInterno = object.array;
// console.log(arrayInterno);

// Manipulando objetos

/* Outra forma de fazer a desestruturação é utilizando chaves ao declarar a variável:

Ex: var xicara = {cor: 'azul', tamanho: 'p', funcao: tomarCafe()}

  var { cor, tamanho, funcao } = xicara;

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);*/

