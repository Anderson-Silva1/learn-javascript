// Short-Circuiting (&& e ||) em JavaScript

// Short-circuiting é um comportamento de operadores lógicos no qual, ao avaliar uma expressão booleana,
// a avaliação de subexpressões é interrompida assim que o resultado final da expressão pode ser determinado,
// sem a necessidade de avaliar as expressões restantes. Esse comportamento ocorre tanto no operador lógico && (E lógico)
// quanto no operador lógico || (OU lógico).

// 1. Operador && (E lógico)

// O operador && retorna o valor do operando mais à esquerda se ele for falsy, caso contrário, ele retorna o valor do operando mais à direita.

// Exemplo básico
let a = 0;
let b = 5;
let resultado = a && b; // 0 (primeiro valor é falsy)
console.log(resultado); // Saída: 0

// Outro exemplo com valores truthy
let x = "Olá";
let y = "Mundo";
let resultado2 = x && y; // "Mundo"
console.log(resultado2); // Saída: "Mundo"

// Prática: Verificando se o usuário está logado antes de exibir conteúdo
let usuarioLogado = true;
let mensagem = usuarioLogado && "Bem-vindo, usuário!"; // Se logado, exibe mensagem
console.log(mensagem); // Saída: "Bem-vindo, usuário!"

usuarioLogado = false;
mensagem = usuarioLogado && "Bem-vindo, usuário!"; // Não vai exibir nada
console.log(mensagem); // Saída: undefined

// 2. Operador || (OU lógico)

// O operador || retorna o valor do operando mais à esquerda se ele for truthy, caso contrário, ele retorna o valor do operando mais à direita.

// Exemplo básico
let resultado3 = a || b; // 5 (primeiro valor é falsy)
console.log(resultado3); // Saída: 5

// Outro exemplo com valores truthy
let resultado4 = x || y; // "Olá"
console.log(resultado4); // Saída: "Olá"

// Prática: Fornecendo valor padrão caso um parâmetro não seja passado
function saudacao(nome) {
  nome = nome || "Visitante"; // Se nome não for fornecido, "Visitante" será usado
  console.log(`Olá, ${nome}!`);
}

saudacao("João"); // Saída: "Olá, João!"
saudacao(); // Saída: "Olá, Visitante!"

// 3. Short-Circuiting e Valores Falsy

// O short-circuiting acontece de forma mais evidente quando você utiliza valores falsy. Os valores falsy no JavaScript são:
// - false
// - 0
// - "" (string vazia)
// - null
// - undefined
// - NaN

let nome = "";
let saudacao2 = nome && "Olá"; // ""
console.log(saudacao2); // Saída: ""

let saudacao3 = nome || "Olá"; // "Olá"
console.log(saudacao3); // Saída: "Olá"

// 4. Usando Short-Circuiting para Definir Valores Padrão

// Uma aplicação comum de short-circuiting é fornecer valores padrão para variáveis, caso o valor seja falsy (por exemplo, null, undefined, 0, etc.).

let usuario = null;
let nomeUsuario = usuario || "Desconhecido"; // "Desconhecido"
console.log(nomeUsuario); // Saída: "Desconhecido"

// Exemplo com && para garantir que uma expressão seja verdadeira:

let configuracoes = { idioma: "pt-BR", tema: "escuro" };
let tema = configuracoes && configuracoes.tema; // "escuro"
console.log(tema); // Saída: "escuro"

// 5. Combinação de && e ||

// Ao combinar && e ||, é importante entender como o JavaScript avalia as expressões. O operador && tem maior precedência que o ||, então o JavaScript avaliará primeiro as expressões com &&.

let resultadoCombinado = a || (x && y); // "Mundo"
console.log(resultadoCombinado); // Saída: "Mundo"

let resultadoCombinado2 = (a || x) && y; // "Mundo"
console.log(resultadoCombinado2); // Saída: "Mundo"

// Prática: Verificando se o usuário está logado e se ele tem permissão
let usuarioAutenticado = true;
let temPermissao = false;
let acesso = usuarioAutenticado && temPermissao && "Acesso autorizado!";
console.log(acesso); // Saída: false (porque temPermissao é false)

usuarioAutenticado = true;
temPermissao = true;
acesso = usuarioAutenticado && temPermissao && "Acesso autorizado!";
console.log(acesso); // Saída: "Acesso autorizado!"

// 6. Benefícios do Short-Circuiting

// - Desempenho: Ao usar short-circuiting, você evita a avaliação desnecessária de expressões, o que pode melhorar a performance, especialmente em expressões complexas.
// - Legibilidade: O uso de operadores lógicos pode simplificar código ao evitar verificações adicionais.
// - Praticidade: Frequentemente usado para definir valores padrão e garantir que certas condições sejam atendidas antes de prosseguir com a execução do código.

// Conclusão

// - Short-circuiting é um comportamento importante e poderoso dos operadores lógicos && e || em JavaScript.
// - Ele pode ser utilizado para otimizar a execução de expressões e definir valores padrão de maneira simples e eficiente.
// - && retorna o primeiro valor falsy ou o último valor, enquanto || retorna o primeiro valor truthy ou o último valor.
