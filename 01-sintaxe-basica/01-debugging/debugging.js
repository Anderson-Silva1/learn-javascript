// Debugadores

console.log("Exemplo console.log");
console.warn("Exemplo console.warn");
console.error("Exemplo console.error");

console.group("Exemplo grupo de console");
console.log("Exemplo console.log dentro de console.group");
console.warn("Exemplo console.warn dentro de console.group");
console.error("Exemplo console.error dentro de console.group");
console.groupEnd();

// Usando console.time
console.time("Loop");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Loop"); // Mostra o tempo gasto

// Usando console.assert
console.assert(2 + 2 === 5, "Isso é um erro! 2 + 2 não é 5");

// Usando window.onerror
window.onerror = function (mensagem, url, linha, coluna, erro) {
  console.error(`Erro detectado: ${mensagem} em ${url} na linha ${linha}`);
};

const persona = [
  { nome: "Anderson", idade: 20 },
  { nome: "Rafaela", idade: 24 },
  { nome: "Emanoel", idade: 13 },
];

// Usando console.table
console.table(persona);

// Usando debugger
let a = 10;
let b = 20;
debugger; // O código pausará aqui
let soma = a + b;
console.log(soma);
