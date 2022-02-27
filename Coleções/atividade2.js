const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    // utilizamos o argumento rest ... para criar um novo array
    return [...mySet];
}

console.log(valoresUnicos(meuArray));