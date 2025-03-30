// Exemplo 1: Operador Ternário Básico
const idade = 18;
const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(mensagem); // "Maior de idade"

// Exemplo 2: Comparação com if...else
const idade2 = 18;
let mensagem2;
if (idade2 >= 18) {
  mensagem2 = "Maior de idade";
} else {
  mensagem2 = "Menor de idade";
}
console.log(mensagem2); // "Maior de idade"

// Exemplo 3: Aninhamento do Operador Ternário
const nota = 85;
const resultado =
  nota >= 90 ? "A" : nota >= 80 ? "B" : nota >= 70 ? "C" : "Reprovado";
console.log(resultado); // "B"

// Exemplo 4: Uso com Funções
function verificarParOuImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}
console.log(verificarParOuImpar(7)); // "Ímpar"
console.log(verificarParOuImpar(10)); // "Par"

// Exemplo 5: Uso com Valores Booleanos
const autenticado = false;
const mensagem3 = autenticado ? "Bem-vindo de volta!" : "Faça login primeiro.";
console.log(mensagem3); // "Faça login primeiro."

// Exemplo 6: Atribuição Condicional
const idade3 = 45;
let desconto = idade3 >= 60 ? 0.1 : 0; // Desconto para idosos
console.log(desconto); // 0

// Exemplo 7: Uso em JSX (React) - Apenas exemplo, não será executado
// const isLoggedIn = true;
// return <div>{isLoggedIn ? <h1>Bem-vindo!</h1> : <h1>Faça login</h1>}</div>;

// Exemplo 8: Operador Ternário vs. && (Curto-circuito)
const logado = true;
logado && console.log("Usuário logado"); // "Usuário logado"
