// Map, Filter e Reduce

/*  O que é Sintaxe Map

Mapping Function y = 2x

• Cria um novo array
• Não modifica o array original
• Realiza operações em ordem

*/

// Sintaxe

Array.map(callback, thisArg)

// callback: funcão a ser executada em cada elemento

// thisArg (opcional): valor de 'this' dentro da função de callback

// Map vs forEach

// usando map

const array = [1, 2, 3, 4, 5];

//               arrow function
array.map((item) => item * 2); // retorno: [2, 4, 6, 8, 10];

// basicamente estamos pregando o parametro item e usando a arrow function para multiplicar o item por 2

// usando forEach

const array = [1, 2, 3, 4, 5];

array.forEach((item) => item * 2); // retorno: undefined

// o forEach precisa que seja declarado uma nova variavel para armazenar o resultado da operação

/* diferença 

• Valor de retorno
• Considere se o array auxiliar será necessário

*/


// Filter

/* O que é

É como se fosse utilizado um filtro no array

• Cria um novo array
• Não modifica o array original

*/

// sintaxe

array.filter(callback, thisArg)

// callback: funcão a ser executada em cada elemento

// thisArg (opcional): valor de 'this' dentro da função de callback

// Exemplo

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];

frutas.filter((fruta) => frutas.includes('maça'))

// retorno: ['maçã fuji', 'maçã verde'];


// Aula 3: Reduce

/* O que é

• Executa uma função em todos os elementos do array, retornando um valor único

*/

// sintaxe

array.reduce(callbackFn, initialValue)

//Callback: função a ser executada a partir do acumulador

//initialValue: valor sobre o qual o retorno final irá atuar

// exemplo

const callbackFn = function(accmulator, currentValue, index, array) {
    // do something
}

array.reduce(callbackFn, initialValue)

// Accumulator/prevValue: acumulador de todas as chamadas de callbackFn

// currentValue: elemento atual sendo acessado pela função

