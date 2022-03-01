/* D.O.M

O que é 

Document Object Model

O DOM HTML é um padrão de como acessar e modificar os elementos HTML de uma página.

*/

// DOM vs BOM

// DOM: Document Object Model
// BOM: Browser Object Model

// Manipulando o DOM

/* Métodos

Selecionando os elementos de uma página html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MInha página</title>
</head>
<body>

    <h1 id="titulo">Minha página</h1>

    <section class="textos">
        <h2>Sobre mim</h2>
        <p>Texto sobre a pessoa aqui.</p>
    </section>

    <section class="textos">
        <h2>Meus projetos</h2>
        <ul>
            <li>Projeto 1</li>
            <li>Projeto 2</li>
            <li>Projeto 3</li>
            
        </ul>
    </section>
    
</body>
</html>
*/

// sintaxe

document.getElementById('titulo');
// <h1 id="titulo">Minha página</h1>

document.getElementsByTagName('li');
/*
    [ <li>Projeto 1</li>
    <li>Projeto 2</li>
    <li>Projeto 3</li> ]
*/

document.getElementsByClassName('textos');
/*
  [ <section class="textos">
        <h2>Sobre mim</h2>
        <p>Texto sobre a pessoa aqui.</p>
    </section>

    <section class="textos">
        <h2>Meus projetos</h2>
        <ul>
            <li>Projeto 1</li>
            <li>Projeto 2</li>
            <li>Projeto 3</li>
            
        </ul>
    </section> ] 
*/


document.querySelectorAll('primeira-classe . segunda-classe');

/*
[
    <div class="primeira-classe segunda-classe">
      <ul>
        <li class="opcao">opcao 1</li>
        <li class="opcao">opcao 2</li>
        <li class="opcao">opcao 3</li>
    </div>
]
*/

document.querySelectorAll('li .opcao');
/*
[
    <li class="opcao">opcao 1</li>
    <li class="opcao">opcao 2</li>
    <li class="opcao">opcao 3</li>
]
*/

// Adicionar e deletar

/*

          Método                         Descrição

document.createElement(element)      Cria um novo elemento HTML
document.removeChild(element)        Remove um elemento
document.appendChild(element)        Adiciona um elemento
document.replaceChild(new, old)      Substitui um elemento
*/


// Trabalhando com estilos 

/* Classes

Element.classList

Exemplo
*/

// <div id="meu-elemento" class="classe">
//  <!-- resto do código aqui --> </div>

const meuElemento = document.getElementById("meu-elemento")

meuElemento.classList.add("novo-estilo");
// Adiciona a classe "meu estilo"

meuElemento.classList.remove("classe")
// Remove a classe "classe"

meuElemento.classList.toggle("dark-mode")
// Adiciona a classe "dark-mode" caso ela não faça parta da lista e remove ela caso faça como se fosse um interruptor

// CSS
// Acessando diretamento o CSS de um elemento

document.getElementsByTagName("p").style.color = "blue";


// Eventos

/* Os eventos são qualquer tipo de ação que um usuario faz um uma pagina da web

Tipos de eventos

1. Eventos do mouse

mouseover, mouse out

2. Eventos de clique

click, dbclick

3. Eventos de atualização

change, load

*/

/* Event listener

Diretamente no Javascript, cria um evento que vai ser acionado no momento em que o usuário realizar a determinada ação.

Exemplo:
*/

const botao = document.getElementById("meuBotao");

botao.addEventListener("click", outraFuncao);

// Atributo HTML

/* Especifica a função a ser chamada diretamento nno elemento HTML.

Exemplo:

<html>
<body>

<h1 onclick="mudaTexto(this"Clique aqui!</h1>

<script>
  function mudaTexto(id) {
      id.innerHTML = "Mudei!";
  }
  </script>

</body>
</html>

OBS: Quando usamos no HTML sempre colocar on na frente como citado acima o exemplo do onclick

*/

