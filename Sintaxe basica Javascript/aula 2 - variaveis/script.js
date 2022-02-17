// tipos primitivos

// boolean = verdadeiro ou falso

var vOuF = false;
console.log(typeof(vOuF));

// typeof retorna no console o tipo da variavel

// number = numeros

var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string = texto

var nome = 'maicon';
console.log(nome);

// Existem 3 tipos de variavel = let, const, var

// como declarar usando var

var variavel = 'diana';
console.log(variavel);

// Apos alterar a variavel ela retorna a alteração

variavel = 'martine';
console.log(variavel);

// como declarar let

let variavel2 = 'mylena';
console.log(variavel2);

// let também permite alterar o valor atribuido a variavel

variavel2 = 'mylena franco';
console.log(variavel2);

// como declarar const

const constante = 'vinicius';
console.log(constante);

// a const não pode ser modificada

// Escopo Global | Escopo Local

// variavel var declada no escopo global
var escopoGlobal = 'global';
console.log(escopoGlobal);


function escopoLocal() {
    // Variavel let declara dentro de uma funçaõ = escopo local
    let escopoLocalInterno = 'local;'
    console.log(escopoLocalInterno);
}

escopoLocal();

// Regras de uso de variáveis !!!

// • Iniciar com letras, underscore_oou cifrão $; Não inicar com número.

// • Não usar espaçõs use o camelCase ou _ EX: var nomeCompleto || var nome_completo

// • Não usar palavras reservadas; EX: var funtion X

// var let X

// • Semmpre declarar variáveis no inicio do bloco de código

// X Atribuição X

var meuNome = 'Vinicius';
console.log(meuNome);

// o sinal de igualdade "=" no javascript, significa atribuição 

// Ex.: como declarar: var nome = "meu nome" | como ler: variável nome recebe o valor meunome;

// X Comparação X

var comparação = '0' == 0;
console.log(comparação)

// Para fazermos uma comparação de valores em javascript usamos "==".

// EX.: como declarar: "0" == 0; | como ler: "0" tem o valor igual a  0?

// OBS: sempre retornara false ou true, nesse caso retornaria true

// X Comparação Identica X

var comparaçãoIdentica = "0" === 0;

// OBS: nesse caso comparamos o valor e o tipo, sendo assim como estamos comparando 0 como texto "string" e 0 em numero o valor retornado sera false.

// X Operadores aritméticos X

// Exemplos:

//adição:

var adicao = 3 + 1;
console.log(adicao);

// subtração:

var subtracao = 3 - 1;
console.log(subtracao);

// multiplicação:

var multiplicacao = 5 * 3;
console.log(multiplicacao);

// divisão real

var divisaoReal = 6 / 2;
console.log(divisaoReal);

// divisão inteira = retorna o  resto da divisão

var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// potenciação

var potenciacao  = 2 ** 10;
console.log(potenciacao);

// X OPERADORES RELACIONAIS X

// > maior que; 
// < menor que;
// >= maior ou igual a;
// <= menor ou igual a;

// OBS: retorna booleanos false ou true

var maiorQue = 5 > 2;
console.log(maiorQue);

var menorQue = 5 < 2;
console.log(menorQue);

var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

var menorOuIgual = 5 <= 5;
console.log(menorOuIgual);

// X OPERADORES LÓGICOS X

// São tipos de operadores que consultam valores lógicos

// • && - "e" - considera que todos os valores sejam true;

// • || - "ou" - considera que qualquer valor sera true;

// • ! - "não" - inverte o valor de true para false ou vice-versa;

var e = true && false;
console.log(e)

// OBS: retornara false pois o && necessita que todos os valores sejam verdadeiros

var ou = false || true;
console.log(ou);

// OBS: retornara verdadeiro pois o || retorna true caso tenha qualquer valor verdadeiro.

var nao = ! true;
console.log(nao)

// OBS: retornara false pois o ! negação sempre retornara o contrario









