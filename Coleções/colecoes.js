// ESTRUTARA 

// • Map

const myMap = new Map()

// Características:

// - Uma coleção de arrays no formato [chave, valor];

// - Pode iterado por um loop for...of

// Métodos
// adicionar, ler e deletar

// Adiciona valores como no exemplo abaixo 
myMap.set('apple', 'fruit');
myMap.set('orange', 'fruit');
// Map(1) {"apple" => "fruit"}

myMap.get("apple");
// "fruit"

myMap.delete("apple")

// true

myMap.get("apple")

// undefined

// Map vs Objeto
// Coleções chaveadas
/*
- Maps podem ter chaves de qualquer tipo;
- Maps possuem a propriedade lenght;
- Maps são mais fáceis de iterar;
- Utilizando quando o valor das chaves é desconhecido;
- Os valores tem o mesmo tipo.
*/

// • Set

// Estrutura

// Sets são estruturas que armazenam apenas valores únicos

const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1];

const mySet = new Set(myArray) // o Set retornada só os valores

// Métodos
// Adicionar, consultar e deletar

// Adicionar valores
mySet.add(1);
mySet.add(5);

// Consultar valores

mySet.has(1);
// true
mySet.has(3);
// false

// deletar
mySet.delete(3);

// Set x Array

/* 
- Possui valores únicos;
- Em vez da propriedade lenght, consulta-se o número de registros pela propriedade size;
- Não possui os métodos map, filter, reduce etc. 
*/

