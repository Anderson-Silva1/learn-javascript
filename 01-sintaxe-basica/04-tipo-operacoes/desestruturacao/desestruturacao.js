// Operações de Desestruturação

// Exemplo com array
let [x, y] = [1, 2];
console.log(x, y); // 1 2

// Pulando elementos do array
let [primeiro, , terceiro] = [10, 20, 30];
console.log(primeiro, terceiro); // 10 30

// Desestruturação com valores padrão
let [a1 = 5, b1 = 10] = [];
console.log(a1, b1); // 5 10

// Exemplo com objeto
let pessoa = { nome: "Anderson", idade: 30 };
let { nome, idade } = pessoa;
console.log(nome, idade); // "Anderson" 30

// Renomeando variáveis na desestruturação
let { nome: primeiroNome, idade: anos } = pessoa;
console.log(primeiroNome, anos); // "Anderson" 30

// Definindo valores padrão na desestruturação de objeto
let usuario = { usuarioNome: "Carlos" };
let { usuarioNome, usuarioIdade = 25 } = usuario;
console.log(usuarioNome, usuarioIdade); // "Carlos" 25
