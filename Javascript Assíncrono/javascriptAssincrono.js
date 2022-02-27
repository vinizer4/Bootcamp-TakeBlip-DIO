// Aula 1 Assincronicidade

/* Objetivos

1. Explicar o que são promises

2. Ensinar como manipulá-las

3. Apresentar as palavras-chave "async" e "await"

Definiçaõ

Assíncrono

"Que não ocorre ou não se efetiva ao mesmo tempo."

O javascript roda de maneira síncrona.

Ou seja acontece uma coisa para depois acontecer outra

Promises

Objeto de processamoento assíncrono

Inicialmente, seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitada.

pode ter 3 estados

1. Pending = pendente
2. fulfilled = completado
3. Rejected = rejeitado

*/

// Estrutra Promises

// Quando eu receber minha promisse após 2 segundos ele recebera o log de resolvida

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida!'));
    }, 2000);
});

//  • await

await myPromise
       .then((result) => result + ' passando pelo then')
       .then((result) => result + ' e agora acabou!')
       .catch((err) => console.log(err.message));
       // após 2 segundos retornara o valor
       // passando pelo then e agora acabou

// Async/await

// Funcões assíncronas precisam dessas duas chave.

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

// Também podemos utilizar o try..catch

// let result;

// try {
//     result = await myPromise
//     .then((result) => result + ' passando pelo then')
//     .then((result) => + ' e agora acabou')
// } catch(err) {
//     result = err.message;
// }

// return result;

    // Fizemos uma função assincroma após 3 segundas sera retornado "Resolvida"

    const resolved = await myPromise
          .then((result) => result + ' passando pelo then')
          .then((result) => + ' e agora acabou')
          .catch((err) => console.log(err.message));

// await para todo a execução do código avançando somente quando a promise for resolvida

          return resolved;
}

// Funçoes assíncronas também retornam Promises

/*
 > resolvePromise()
  > Promise {<pending>} retornou uma promise pendente

  OBS: Temos sempre que usar o await para chamar uma função assincrona

> await resolvePromise()
  >"Resolvida passando pelo then e agora acabou!"
*/

// Aula 2 APIs

// O que são APIs

/* Application Programming Interface

Uma API é uma forma de intermediar os resultados do back-end como o que é apresentado no front-end

Você consegue acessá-la por meio de URLs.
*/

// JSON: JavaScript Object Notatios

/* É muito comum que APIs retornem seus dados no formato.json, portanto precisamos tratar esses dados quando os recebermos.

Ex. */

// Arquivo bank.json

// {
//     "description": "schema POST bank",
//     "type": "object",
//     "propoerties": {
//         "id": {
//             "type": "number",
//             "minium": 0
//         },
//     "code": {
//         "type: "string"
//     },
//     "name": {
//         "type" : "string"
//     }
//   }
// }

// OBS: retornaram os valores como objeto com chaves e valores

// Metodo fetch

// Consuminido APIs

// Ex.

fetch(url, options)
    .then(reponse => reponse.json())
    // sempre temos que converter para json
    .then(json => console.log(json))

// o fetch retorna uma Promise

// Operações no banco (POST, GET, PUT, DELETE, etc)

// Exemplo coletanto dados com do banco de dados com o metodo GET

fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',
})
    .then(response => response.json)
    // O método then() retorna uma Promise. Possui dois argumentos, ambos são "call back functions", sendo uma para o sucesso e outra para o fracasso da promessa.
    .then(json => console.log(json))
    // retorna uma promise

// Exemplo postando dadas no banco de dados com o metodo POST

    fetch('https://endereco-api.com/', {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify(data)
        // Tranformando o JSON em uma string

    })
        .then(response => response.json())
        .then(json => console.log(json))

    // retorna uma promise