// Operações de Spread (...)

// Exemplo com array
let numeros = [1, 2, 3];
let maisNumeros = [...numeros, 4, 5];

console.log(maisNumeros); // [1, 2, 3, 4, 5]

// Copiar um array sem alterar o original
let copiaNumeros = [...numeros];
console.log(copiaNumeros); // [1, 2, 3]

// Concatenar arrays usando spread
let outrosNumeros = [6, 7, 8];
let todosNumeros = [...numeros, ...outrosNumeros];
console.log(todosNumeros); // [1, 2, 3, 6, 7, 8]

// Exemplo com objeto
let novaPessoa = { ...pessoa, cidade: "Fortaleza" };
console.log(novaPessoa); // { nome: "Anderson", idade: 30, cidade: "Fortaleza" }

// Copiar um objeto sem alterar o original
let copiaPessoa = { ...pessoa };
console.log(copiaPessoa); // { nome: "Anderson", idade: 30 }

// Mesclar dois objetos
let endereco = { cidade: "Fortaleza", estado: "CE" };
let pessoaCompleta = { ...pessoa, ...endereco };
console.log(pessoaCompleta); // { nome: "Anderson", idade: 30, cidade: "Fortaleza", estado: "CE" }

// Atualizar propriedades de um objeto
let pessoaAtualizada = { ...pessoa, idade: 31 };
console.log(pessoaAtualizada); // { nome: "Anderson", idade: 31 }
