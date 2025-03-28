# O que é um Array em JavaScript?

Um array é uma coleção ordenada de elementos, onde cada elemento é identificado por um índice. Em JavaScript, os arrays podem armazenar qualquer tipo de dado, como números, strings, objetos, até mesmo outros arrays.

Arrays em JavaScript são dinâmicos, ou seja, seu tamanho pode ser alterado durante a execução do programa.

## Criando um Array

Você pode criar um array de duas maneiras:

1. **Usando colchetes ([])**:

```js
let frutas = ["maçã", "banana", "laranja"];
```

2. **Usando o construtor Array()**:

```js
let frutas = new Array("maçã", "banana", "laranja");
```

## Acessando e Modificando Elementos do Array

Arrays em JavaScript são indexados, ou seja, o primeiro elemento tem o índice 0, o segundo tem o índice 1, e assim por diante.

- **Acessar um elemento:**

```js
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // "maçã"
```

- **Modificar um elemento:**

```js
frutas[1] = "abacaxi"; // Substitui 'banana' por 'abacaxi'
console.log(frutas); // ["maçã", "abacaxi", "laranja"]
```

## Propriedades dos Arrays

Arrays em JavaScript possuem algumas propriedades e métodos úteis:

**1. length**: Retorna o número de elementos no array.

```js
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas.length); // 3
```

**2. indexOf():** Retorna o índice de um elemento no array. Se o elemento não for encontrado, retorna -1.

```js
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas.indexOf("banana")); // 1
console.log(frutas.indexOf("morango")); // -1
```

**3. includes()**: Verifica se um elemento existe no array. Retorna true ou false.

```js
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas.includes("banana")); // true
console.log(frutas.includes("morango")); // false
```

## Métodos Comuns de Arrays

Aqui estão alguns dos métodos mais comuns usados com arrays:

**1. push():** Adiciona um ou mais elementos ao final de um array.

```js
let frutas = ["maçã", "banana"];
frutas.push("laranja");
console.log(frutas); // ["maçã", "banana", "laranja"]
```

**2. pop()**: Remove o último elemento de um array e retorna esse elemento.

```js
let frutas = ["maçã", "banana", "laranja"];
let removido = frutas.pop();
console.log(removido); // "laranja"
console.log(frutas); // ["maçã", "banana"]
```

**3. shift():** Remove o primeiro elemento de um array e retorna esse elemento.

```js
let frutas = ["maçã", "banana", "laranja"];
let removido = frutas.shift();
console.log(removido); // "maçã"
console.log(frutas); // ["banana", "laranja"]
```

**4. unshift()**: Adiciona um ou mais elementos no início de um array.

```js
let frutas = ["banana", "laranja"];
frutas.unshift("maçã");
console.log(frutas); // ["maçã", "banana", "laranja"]
```

**5. slice()**: Retorna uma cópia rasa de uma parte do array, sem modificar o array original.

```js
let frutas = ["maçã", "banana", "laranja", "kiwi"];
let selecionadas = frutas.slice(1, 3); // Começa no índice 1, mas não inclui o índice 3
console.log(selecionadas); // ["banana", "laranja"]
```

**6. splice()**: Modifica um array, removendo ou substituindo elementos existentes.

```js
let frutas = ["maçã", "banana", "laranja", "kiwi"];
frutas.splice(1, 2, "abacaxi", "melancia"); // Remove 2 elementos a partir do índice 1 e adiciona dois novos
console.log(frutas); // ["maçã", "abacaxi", "melancia", "kiwi"]
```

**7. forEach()**: Executa uma função para cada item do array.

```js
let frutas = ["maçã", "banana", "laranja"];
frutas.forEach(function (fruta) {
  console.log(fruta); // Exibe "maçã", "banana" e "laranja"
});
```

**8. map()**: Cria um novo array com os resultados da execução de uma função para cada item do array original.

```js
let numeros = [1, 2, 3];
let quadrados = numeros.map(num => num \*\* 2);
console.log(quadrados); // [1, 4, 9]
```

**9. filter()**: Cria um novo array com todos os elementos que passam no teste de uma função fornecida.

```js
let numeros = [1, 2, 3, 4, 5];
let pares = numeros.filter((num) => num % 2 === 0);
console.log(pares); // [2, 4]
```

**10. reduce()**: Aplica uma função acumuladora em cada elemento de um array, retornando um único valor (como soma, produto, etc.).

```js
let numeros = [1, 2, 3, 4];
let soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma); // 10
```

## Outros Métodos Importantes

- **concat():**: Junta dois ou mais arrays e retorna um novo array.

```js
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4]
```

- **join():** Junta todos os elementos de um array em uma string, separados por um delimitador.

```js
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas.join(" - ")); // "maçã - banana - laranja"
```

**sort():** Ordena os elementos de um array. Por padrão, ordena como strings.

```js
let numeros = [3, 1, 4, 2];
numeros.sort();
console.log(numeros); // [1, 2, 3, 4]
```

**reverse():** Inverte a ordem dos elementos de um array.

```js
let frutas = ["maçã", "banana", "laranja"];
frutas.reverse();
console.log(frutas); // ["laranja", "banana", "maçã"]
```

## Arrays Multidimensionais

Arrays podem ser usados para criar arrays multidimensionais, ou seja, arrays dentro de arrays.

```js
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matriz[0][1]); // 2
```

## Considerações Finais

Arrays são dinâmicos, então seu tamanho pode ser alterado a qualquer momento.

Muitos métodos dos arrays (como push, pop, shift e unshift) são mutáveis e alteram o próprio array.

Métodos como map, filter, reduce e forEach são imutáveis e retornam novos arrays, deixando o original intacto.
