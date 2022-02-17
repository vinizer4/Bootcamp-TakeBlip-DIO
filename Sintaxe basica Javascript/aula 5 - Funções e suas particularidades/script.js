// FUNCOES

// Funções são blocos de comandos e instruções para a execução de determinadas tarefas;

/* Ex: function nomeDaFuncao () {
    ${intrucao};
}

nomeDaFuncao(); */


/* Como declarar?

Geralmente se utiliza a palavra reservada "function" seguida de parênteses "()" e chaves "{}";

Ex: function funcao() {
    console.log("mensagem");
}

funcao();

() - indica que é um objeto do tipo function;
{} - indica que é um bloco de instrução; */


function funcao() {
    console.log('essa mensagem veio de uma função!')
};

funcao();

/* FUNÇÕES COM PARâMETROS

As funções podem receber em sua declaração, parâmetros, que servem como variáveis, onde sua atribuição pode ser feita durante a chamada da função:

Ex: function nomeDaFuncao (parametro) {
    ${instrucao};
}

nomeDaFuncao(valorDoParametro); */

function mensagem (primeiro, segundo) {
    console.log(primeiro, segundo)
}

mensagem("tudo certo","jovem !" )