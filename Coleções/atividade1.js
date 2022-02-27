function getAdmins(map) {
    // declaramos admins na variavel let
    let admins = [];
    // usamos um for para percorrer as chaves e valores do map.
    for ([key, value] of map) 
    // Usamos um if para caso o valor seja igual a 'Admin' ele adicione a chave na variavel let admins
    {
        if (value === 'Admin') {
            // utilizamos o metodos push do array para adicionar key a variavel admin
            admins.push(key);
        }
    }
    // retornamos admins
    return admins;
        
}

// declaromos a conts usuarios e criamos um map
const usuarios = new Map();

// adicionamos valores definindo quais deles são admin e quais são usuer
// os primeiros são chaves e o segundo valores "key e value"
usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', "Admin");
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin')

// Executamos no console a funcão getAdmins filtrando os usuarios que são admin, conforme definido na função
console.log(getAdmins(usuarios));