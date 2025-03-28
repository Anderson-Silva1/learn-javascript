// Operações de String

// Concatenação de strings
let saudacao = "Olá, ";
let nomePessoa = "Anderson";
let mensagem = saudacao + nomePessoa;
console.log(mensagem); // "Olá, Anderson"

// Concatenação usando template literals
let mensagemTemplate = `Olá, ${nomePessoa}!`;
console.log(mensagemTemplate); // "Olá, Anderson!"

// Repetição de string
let repetido = "Oi! ".repeat(3);
console.log(repetido); // "Oi! Oi! Oi! "

// Acessando caracteres de uma string
let texto = "JavaScript";
console.log(texto[0]); // "J"
console.log(texto.charAt(3)); // "a"

// Tamanho de uma string
console.log(texto.length); // 10

// Convertendo para maiúsculas e minúsculas
console.log(texto.toUpperCase()); // "JAVASCRIPT"
console.log(texto.toLowerCase()); // "javascript"

// Removendo espaços no início e fim
let comEspacos = "  teste  ";
console.log(comEspacos.trim()); // "teste"

// Substituindo parte de uma string
let frase = "Eu gosto de JavaScript";
console.log(frase.replace("JavaScript", "TypeScript")); // "Eu gosto de TypeScript"

// Dividindo uma string em um array
let lista = "maçã,banana,laranja";
console.log(lista.split(",")); // ["maçã", "banana", "laranja"]

// Extraindo parte de uma string
console.log(texto.slice(0, 4)); // "Java"
console.log(texto.substring(4, 10)); // "Script"

// Encontrando índice de um caractere ou substring
console.log(texto.indexOf("S")); // 4
console.log(texto.lastIndexOf("a")); // 3

// Verificando se uma string começa ou termina com um determinado valor
console.log(texto.startsWith("Java")); // true
console.log(texto.endsWith("Script")); // true

// Verificando se uma string contém um determinado valor
console.log(frase.includes("JavaScript")); // true
