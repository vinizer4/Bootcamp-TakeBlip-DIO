// TIPOS DE OPERADORES

/* 
• Aritimética
• Atribuição
• Comparação
• Lógica
• Condicional */

/* ATRIBUIÇAÕ 
   Variáveis e Tipos

Operador     Exemplo     Equivalente a
   =          x = y         x = y
   +=         x += y        x = x+y
   *=         x *= y        x = x*y
   /=         x /= y        x = x/y
   %=         x %= y        x = x%y  */

/* TIPOS DE OPERADORES

Operador         Descrição
  +                Adição
  -                Subtração
  *                Multiplicação
  **               Exponencial
  /                Divisão
  %                Módulo
  ++               Incrementar
  --               Decrementar  */

  /* COMPARAÇÃO 
     Variáveis e Tipos

Operador         Descrição
  ==                Igual a
  ===              Igual mesmo valor e mesmo tipo
  !=                Diferente
  !==               Valor e tipos diferentes
  >                 Maior que
  <                 Menor que
  >=                Maior  ou igual
  <=                Menor ou igual  */

  /* LÓGICA
   Variáveis e Tipos

Operador         Descrição

  &&           "e" lógico 
  EX:'Se as duas afirmações são verdadeiras executa'

  ||          "ou" lógico 
  EX:'Se uma das afirmações são verdadeiras executa'

  !           "não" lógico 
  EX:
'não lógico seguido de true retorna false'  */

/* CONDICIONAL 
   Variáveis e Tipos

Operador             

Ternário "if ternario"

Descrição 

| (condition) ? expression1 | : expression2
|_______ true _____________|  _____ false ____|

Sé sim executa expression1 senão executa expression2

If e else ternario  */

function comparacao (a, b) {
    a === b ? console.log(`Os numeros ${a} e ${b}  são iguais`) : console.log(`Os numeros ${a} e ${b}  são diferentes`);

    let c = a + b;
    console.log(`Sua soma é ${c}`)

    if (c >= 10) {
            console.log(`${c} é maior que 10`)} 

    else if (c <= 10) {
        console.log(` ${c} é menor que 10`)}
    
     if (c <= 20) {
        console.log(`${c} é menor que 20`)
    }
    else {
        console.log(`${c}, esse valor não está entre 10 e 20`)
    }

}

comparacao(18, 5)