// ESTRUTURAS CONDICIONAIS

// São instruções para realizar determinadas tarefas a partir de uma condição, seja de decisão ou repetição

/* Ex: um jogo precisa mudar o placar toda vez que um jogador marca pontuação*/

/* if

Podemos usar as palavras reservadas "if" para estabelecer uma condição:

Ex: var jogador1 = 0;
    var jogador2 = 0;

    if (jogador1>0) {
        console.log('jogador1 marcou ponto');
    }*/

// como ler: se o jogador1 tiver valor maior que 0 ele marcou ponto.

var jogador1 = 0;
var jogador2 = 0;
var placar;


// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('jogadores Invalidos');

    // usando if
    if (jogador1 > 0 && jogador2 == 0) {
        console.log('jogador1 marcou ponto!');
        placar = jogador1 > jogador2;
    } 
    // usando else if
    else if (jogador2 > 0 && jogador1 == 0) {
        console.log('jogador2 marcou ponto')
        placar = jogador2 > jogador1;
    }
    // usando else
    else {
        console.log('Ninguem marcou ponto"');
    }

    console.log(placar)



/* else

No caso de a condição não ser atendida podemos usar o "else" : 

Ex: var jogador1 = 1;
    var jogador2 = 0;

    if(jogador1 > 0) {
        console.log('jogador1 marcou ponto')
    } else {
        console.log('ninguem marcou ponto');
    } */


/* else if

Caso haja mais de uma condição usamos o "else if".

Ex: var jogador1 = 1;
    var jogador2 = 0;

    if(jogador1 > 0) {
        console.log('jogador1 marcou ponto')
    }
     else if (jogador2 > 0) {
        console.log('jogador2 marcou ponto')
    }
     else {
        console.log('ninguem marcou ponto');
    } */

/* ninho de if

Podemos também usar o "if dentro de um outro "if", chamamos isso de aninhamento de if's ou ninho de if's.

Ex: if (jogador1 = -1) {
    if (jogador1 > 0) {
        console.log('jogador1 marcou ponto');
    } else {
        console.log('ninguem marcou ponto');
    }
} else {
    console.log('jogador inválido');
} */

/* if ternário

Podemos também fazer uma verificação em uma única linha usando o "if" ternário:

Ex: [condição] ? [instrução1] : [instrução2];

jogador1 > 0 ? console.log('marcou ponto') : console.log('não marcou ponto');

// lembre de usar a interrogação ? "como If" e dois pontos : "como else" */


// USANDO switch/case

/* O "switch/case" funciona como uma estrutura condicional também;

Ex: switch (${expressao}) {
    case1:
         ${instrucao};
    break;
    case2:
        ${instrução};
    break;
} */

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
    default:
        console.log('ninguem ganhou');
}

/* LAÇOS DE REPETIÇÃO

São estruturas condicionais que repetem uma instrução até atingir determinada condição:

for;
for/in;
for/of;
while;
do/while; */

/* for

Funciona como uma repetição de instrução até que a condição seja falsa:

for([expressaoInicial];[condicao];[incremento]){
    declaracao
}

EX: var array = ['valor1', 'valor2', 'valor3', 'valor4']

     for(let i = 0; i < array.length; i++) {
         console.log(i);
     } */

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];

let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', }

// for - executa uma instrução até que seja falsa

// for (let indice = 0; indice < array.length; indice++ ) {
//     console.log(indice);
// }

// for / in

/* Funciona como uma repetição a partir de uma propriedade:

for([indice] in [objeto ou array]) {
    declaracao
}

Ex: var array = ['valor1', 'valor2', 'valor3', 'valor4']

          for (i in array) {
              console.log(i);
          } */


// for/in executa repetição a partir de uma propriedade

// // for (let i in array) {
// //     console.log(i)
// // }

// // // com object

// // for ( i in object ) {
// //     console.log(i)
// }

// for/of

/* Funciona como uma repetição a partir de um valor:

for([indice] of [array]) {
    declaracao
}

Ex: var array = ['valor1', 'valor2', 'valor3', 'valor4']

       for (i of array) {
           console.log(i);
       } */

for (i of array) {
    console.log(i)
}

// com object

for (i of object.propriedade1) {
    console.log(i)
}

/* O for/of não funciona com objetos pois as propriedades variam, diferentes do índice em um array que sempre serão números inteiros.

Mas e se eeu quiser pegar o valor mesmo assim?

Ex: for (i of object.propriedade){
    console.log(i);
}

// porém cada caractere dentro do valro será impresso em linhas separadas. */


// While

/* Executa uma instrução "enquanto" determinada condição for verdadeira, a verificação é feita antes da execução;

Ex: var a = 0;
    while (a < 10) {
        a++;
        console.log(a)
    }

// como ler: enquanto a variável "a" for menor que 10 ela vai receber mais um e imprimir no console. */

var a = 0;

while ( a < 10 ) {
    a++;
    console.log(a);
}
do {
    a++;
    console.log(a);
} while  ( a < 10);


// do/while

// Executa uma instrução "até que" determinada condição seja falsa, a verificação é feita depois da execução;

// Ex: var a = 0;
// do {
//     a++;
//     console.log(a);
// } while ( a < 10 )
// */
// /* como ler: a variável a vai receber mais um e imprimir no console até que seu valor chegue a 10