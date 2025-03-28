// O que é um Array em JavaScript?
// Um array é uma coleção ordenada de elementos, onde cada elemento é identificado por um índice.
// Arrays em JavaScript são dinâmicos, ou seja, seu tamanho pode ser alterado durante a execução do programa.

// Criando um Array
// 1. Usando colchetes ([])
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas); // ["maçã", "banana", "laranja"]

// 2. Usando o construtor Array()
let frutas2 = new Array("maçã", "banana", "laranja");
console.log(frutas2); // ["maçã", "banana", "laranja"]

// Acessando e Modificando Elementos do Array
console.log(frutas[0]); // "maçã"  // Acessando o primeiro elemento
frutas[1] = "abacaxi"; // Modificando o segundo elemento
console.log(frutas); // ["maçã", "abacaxi", "laranja"]

// Propriedades dos Arrays
// 1. length - Retorna o número de elementos no array
console.log(frutas.length); // 3

// 2. indexOf() - Retorna o índice de um elemento no array
console.log(frutas.indexOf("banana")); // 1
console.log(frutas.indexOf("morango")); // -1

// 3. includes() - Verifica se um elemento existe no array
console.log(frutas.includes("banana")); // true
console.log(frutas.includes("morango")); // false

// Métodos Comuns de Arrays
// 1. push() - Adiciona um ou mais elementos ao final de um array
frutas.push("laranja");
console.log(frutas); // ["maçã", "abacaxi", "laranja"]

// 2. pop() - Remove o último elemento de um array e retorna esse elemento
let removido = frutas.pop();
console.log(removido); // "laranja"
console.log(frutas); // ["maçã", "abacaxi"]

// 3. shift() - Remove o primeiro elemento de um array e retorna esse elemento
let removido2 = frutas.shift();
console.log(removido2); // "maçã"
console.log(frutas); // ["abacaxi"]

// 4. unshift() - Adiciona um ou mais elementos no início de um array
frutas.unshift("maçã");
console.log(frutas); // ["maçã", "abacaxi"]

// 5. slice() - Retorna uma cópia rasa de uma parte do array, sem modificar o array original
let frutasSelecionadas = frutas.slice(1, 2); // Começa no índice 1, mas não inclui o índice 2
console.log(frutasSelecionadas); // ["abacaxi"]

// 6. splice() - Modifica um array, removendo ou substituindo elementos existentes
frutas.splice(1, 1, "melancia", "kiwi"); // Remove 1 elemento a partir do índice 1 e adiciona dois novos
console.log(frutas); // ["maçã", "melancia", "kiwi"]

// 7. forEach() - Executa uma função para cada item do array
frutas.forEach(function (fruta) {
  console.log(fruta); // Exibe "maçã", "melancia", "kiwi"
});

// 8. map() - Cria um novo array com os resultados da execução de uma função para cada item do array original
let numeros = [1, 2, 3];
let quadrados = numeros.map((num) => num ** 2);
console.log(quadrados); // [1, 4, 9]

// 9. filter() - Cria um novo array com todos os elementos que passam no teste de uma função fornecida
let pares = numeros.filter((num) => num % 2 === 0);
console.log(pares); // [2]

// 10. reduce() - Aplica uma função acumuladora em cada elemento de um array, retornando um único valor (como soma, produto, etc.)
let soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma); // 6

// Outros Métodos Importantes
// concat() - Junta dois ou mais arrays e retorna um novo array
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4]

// join() - Junta todos os elementos de um array em uma string, separados por um delimitador
let frutasJoin = frutas.join(" - ");
console.log(frutasJoin); // "maçã - melancia - kiwi"

// sort() - Ordena os elementos de um array. Por padrão, ordena como strings
let numerosOrdenados = [3, 1, 4, 2];
numerosOrdenados.sort();
console.log(numerosOrdenados); // [1, 2, 3, 4]

// reverse() - Inverte a ordem dos elementos de um array
frutas.reverse();
console.log(frutas); // ["kiwi", "melancia", "maçã"]

// Arrays Multidimensionais
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matriz[0][1]); // 2 (elemento da primeira linha, segunda coluna)

// Considerações Finais
// Arrays são dinâmicos, então seu tamanho pode ser alterado a qualquer momento.
// Muitos métodos dos arrays (como push, pop, shift e unshift) são mutáveis e alteram o próprio array.
// Métodos como map, filter, reduce e forEach são imutáveis e retornam novos arrays, deixando o original intacto.
