// Throuw

function verificaPalindromo(string) {
    if (!string) return 'String inválida';
    // Se for diferente "!" de strins retorna string inválida
    
    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');

function verificaPalindromo(string) {
    if (!string) throw "String inválida";
    // Quando tenha a declaração do throw ele retornara como um erro, diferente do return que retornara uma string

    return string === string.split('').reserve().join('');
}

verificaPalindromo('cat');


// Try...catch

// Ele verifica dentro do bloco try se tem algum tipo de erro, ele será capturado pelo funcão cat, e podera ser manipulado por ela

function verificaPalindromo(string) {
    if (!string) return 'String inválida';
    // Se for diferente "!" de strins retorna string inválida
    
    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string)
    }
    catch(e) {
        console.log(e)
    }
}

tryCatchExemplo('');

// Finally

// É uma instrução que executa após as verificações de qualquer forma, mesmo tendo ou não erros

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string)
    }
    catch(e) {
        console.log(e)
    }
    finally {
        console.log('A string enviada foi: ' + string);
    }
}


// Manipular o objeto error

// O objeto Error

new Error(message, fileName, lineNumber)

const MeuErro = new Error('Mensagem Inválida');
// Criamos uma nova instacia para o erro
MeuErro.name = 'InvalidMessage'; // Definimos um novo nome para o erro

throw MeuErro;