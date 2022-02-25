// VARIÁVEIS E TIPOS

console.log("• VARIÁVEIS E TIPOS", "\n");

/*

 ATRIBUIÇÃO DE VALORES

Case Type                       Example
Original Variable as String:    soma awesoma var
Camel Case:                     somaAwesomaVar
Snake Case:                     soma_awesome_var
Kebab Case:                     some-aewsoma-var
Pascal Case:                    SomaAwesomaVar
Upper Case Snake Case:          SOME_AWESOMA_VAR  

OBS: É uma boa pratica usar Upper Case Snake Case para constantes

*/

// Var e let

/**/ 

var a = 1;
var b = 2;

if ( a === 1) {
    var a = 11; // O scope é global em resumo mesmo que eu atribuia valor a essa variavel em um bloco de código: {}, ela sera alterada em todo o código

    let b = 22; // o escopo está dentro do bloco if ou seja só sera atribuido o valor dentro de código {}

    console.log(a); // 11
    console.log(b); // 22
}

console.log(a); // 11  OBS: Conforme citado anteriormento foi alterado para 11 mesmo estando em um bloco de código
console.log(b); // 2 OBS: Não sofreu alteração conforme citado anteriormento quando a variavel é declada como "let" só atribui valor no bloco onde foi decladara

/* Essa é a diferença entra var e let

var e const são de escopo global
let é de escopo de bloco */

numberOne = 1;

console.log(numberOne + 2);

var numberOne;

var firstName = 'João';

var lastName = 'Souza';

if(firstName === 'João') {
    let lastName = 'Rodrigues';
    var firstName = 'Pedro';
    lastName = 'Silva'; // Reatribuimos a variavel let lastName para Silva

    console.log(lastName)
}

console.log(firstName, lastName);


// CONSTANTES

/* 

• Declarada em SNAKE_UPPER_CASE
• Escopo de bloco
• Não faz hoisting

Ex: const DAYS_IN_A_WEEK = 7;
    const MY_NAME = "Kieran";

*/

const FIRST_NAME = "Stephany" // • Declaração da variavel const

// const FIRST_NAME;

// FIRST_NAME = "Stephany" // • Hoisting da variavel const FIRST_NAME

// // Não podemos realizar o hoisting de uma constante



// console.log(FIRST_NAME)

// FIRST_NAME = "Julia"; // • Reatribuição da const FIRST_NAME 

// // Não podemos reatribuir uma constante const, sendo assim o console nos retornara um erro. Uma constante é chamada de constante justamente por não aceitar mudanças.

// const FIRST_NAME = "Ana"; // Redeclaração da const FIRST_NAME
//  // Da mesma forma não podemos redeclarar uma constante sendo assim nosso console retornara um erro.

// Em resumo não podemos alterar uma const de maneira alguma, só podemos declarar e a const nunca mais pode ser alterada!!

console.log(FIRST_NAME)


//                var                  const         let
// escopo      global ou local         bloco         bloco
// redeclarar     sim                  não           sim
// reatribuir     sim                  não           não

// É uma boa pratica utilizar a variavel let

// ESTRUTURAS DE DADOS

console.log("\n", "• ESTRUTURAS DE DADOS");

// Em javascript não é preciso especificar o tipo do valor ele já ira identificar com sua sintaxe;

let um = "um";

typeof um // typeof retorna o tipo do dado declaro no javascript

console.log(um, "Qual é o tipo do dado?", typeof um);

// • TIPOS DE DADOS EM JS

// Primitive Types

// Numbers  strings  boolean  null  undefined

// Composite / Non-Primitive Types

// Objects   Arrays


// Strings 

// • Comumente utilizada para textos
// • Valores declarados entre aspas "", ou crases `` como no exemplo abaixo.

//Exemplos:

const DIO = 'Digital Innovation One';

function strings (){
    let firstName = 'João';
    let lastName = 'Luiz';

    let fullName = `Nome completo: ${firstName} ${lastName}`;
    
    console.log("\n", "Exemplo de string:", fullName);
}

strings()

let nome = "João";

let sobrenome = "Pedro";

typeof nome

nome.concat(sobrenome);

let concatenado = nome.concat(sobrenome);

typeof concatenado;

concatenado.length;

let exemplo = new String("blablabla") // • Quando a string é declada dessa forma o typeof retornada como um objeto

typeof exemplo


console.log(exemplo, typeof exemplo, exemplo.length);

console.log(nome[1], nome.length);

console.log(concatenado);

concatenado = nome + " " + sobrenome;

console.log(concatenado);

console.log( nome + "\n\n" + sobrenome);

concatenado = `${nome}



${sobrenome}`;

console.log(concatenado);

let frase = "Olá, tudo bem?"

console.log(frase.split(""))

console.log(frase.split(" "))

console.log(
frase.includes("tudo"),
 frase.startsWith("O"),
frase.startsWith("O"), 
frase.endsWith("?"))


let stringModificada = frase.replace(",", "!")

console.log(stringModificada)

// PRINCIPAIS METODOS DAS STRINGS

/*

• Concatenação
• Propriedade length
• iterabilidade

*/

// NUMBERS

let num = 100

console.log(
100 + 3,
100 / 5, 
num / 3, 
num * 5, 
num % 2, "Resto da divisão",
num2 = 101, 
num2 % 2,
typeof Math,
Math.PI,
)

let fiveByThree = 5 /3 

console.log(fiveByThree, Math.floor(fiveByThree))

// Math.floor arredonda o valor para baixo
// Math.ceil arredonda o valor para cima

// Dica quando sé trata de porcentagem usamos string pois o sinal % é uma palavra reservada para modulo resto, ou declara como string ou concatena com a string "%"

/*
Ex: let percent = "10%"
ou let percent = 10
   percent + "%" concatenando o valor a string "%"


// BOOLEANS

/* Boolean básicamente retornara se uma comparação é verdadeira ou falsa
true    or    false

EX: */

let validation = 3 === 0

console.log(validation.toString()) // toString transforma o valor retornado em string



// !validation Retornara o contrario no caso true

console.log(!validation);

// ARRAYS

/* 
 Arrays

 Basicamente são lista iteráveis de elementos

 index
 [0, 1 ,2 ,3 ,4 ,5 ,6 ,7 , 8, 9.....]

 para iniciar um array usamos os [] *Boa pratica*

 ou o metodo new Array()
 */

let array = []

// para adicionar um elemento no final do array usamos o metodo .push() Ex:

array.push(3)

console.log(array)

array.push(2)

console.log(array);

// para remover um elemento do final do array usamos o .pop()

array.pop()

console.log(array);

// para remover um elemento do inicio do array usamos o .shift()

array.shift()

console.log(array);

// para adicionar um elemento no inicio do array usamos o .unshift()

array.unshift(3)

console.log(array);

// iterabilidade significa que eu posso fazer interações em cada um dos elementos do array

for( let i = 0; i < array.lenght; i++) {
    console.log(array[i])
}

// .includes() verifica se existe o elemento no array

console.log(array.includes(3))

// .every(item === 3) verifica se todos  os itens são iguais

console.log(array.every(item => item === 3))

array.unshift(5)

console.log(array)

// .some verifica se algum item é igual

console.log(array.some(item => item === 5))

array.reverse()

console.log(array)


// OBJETOS

/*

um objeto tem essa estrutura:

let person = {
        __name: 'John' ___
  Keys |__age:   '20' ____| Values
}; 

*/

let obj = {}

console.log(
    typeof obj,
    obj.name = "Julia",
    obj,
    obj.age = 20,
    obj,
    Object.values(obj),
    Object.keys(obj),
    )

let person = {
    name: "Julia", //OBS em objetos usamos , e não ;
    age: 20,
    adress: "Rua 2"
}

console.log("\n", 
person,
person.name,
person["name"],
person["numberOfSiblings"] = 3,
person,
)

let mom = "nameOfMom"

person[mom] = "Maria" // Geralmente declaramos entre [] quando queremos mandar uma variavel para um objeto

person.mom ="Marta"

console.log(person)

// Empty, null e undefined

// Empty = Quando está vazio exemplo: "", [], {} perceba que não tem nenhum valor dentro 

// Null = É quando você quer que o valor não exista propositalmente exemplo declarei let cookies e deixei sem nada inclusive sem os [] e {} e "" 

// Undefined = É quando não existe de forma alguma normalmente quando existe algum erro

// Exemplos

// console.log(typeof abacaxi) // No console sera undefined, pois eu não declarei abacaxi ou seja não existe

// let abacaxi •Continua como undefined pois não atribui valor na variavel

let abacaxi = "" // retornada empty pois tenho um valor atribuido a variavel, só que esse valor está vazio

console.log(abacaxi)

abacaxi = null

console.log(abacaxi)

console.log(
    abacaxi === true,
    abacaxi === false,
    !abacaxi,
)

