# Estudo Completo sobre Set em JavaScript

## O que é um Set em JavaScript?

Um **Set** em JavaScript é uma coleção de valores únicos, ou seja, não permite valores duplicados. Ao contrário de um **Map**, que armazena pares chave-valor, um **Set** armazena apenas os valores. Ele é útil quando você precisa garantir que cada valor seja único em uma coleção, como ao remover duplicatas de uma lista.

O **Set** foi introduzido no ECMAScript 6 (ES6) e fornece uma maneira eficiente de lidar com coleções de dados únicos em JavaScript.

## Criando um Set

Para criar um **Set**, podemos usar o construtor `Set()`:

```javascript
// Criando um Set vazio
let conjunto = new Set();

// Criando um Set com valores iniciais
let numeros = new Set([1, 2, 3, 4, 5]);
console.log(numeros);
// Set { 1, 2, 3, 4, 5 }
```

## Adicionando Valores a um Set

Para adicionar valores a um Set, usamos o método **.add()**:

```js
numeros.add(6);
console.log(numeros);
// Set { 1, 2, 3, 4, 5, 6 }
```

Caso o valor já exista no Set, ele não será adicionado novamente, garantindo que todos os valores sejam únicos:

```js
numeros.add(3); // 3 já está no Set
console.log(numeros);
// Set { 1, 2, 3, 4, 5, 6 }
```

## Verificando a Existência de um Valor

Para verificar se um valor existe em um Set, usamos o método .has():

```js
console.log(numeros.has(3)); // true
console.log(numeros.has(7)); // false
```

## Removendo Valores de um Set

Para remover um valor de um Set, usamos o método .delete():

```js
numeros.delete(4);
console.log(numeros);
// Set { 1, 2, 3, 5, 6 }
```

Se o valor não existir, o método .delete() retorna false, mas não gera erro.

## Limpando um Set

Para remover todos os valores de um Set, usamos o método .clear():

```js
numeros.clear();
console.log(numeros.size); // 0
```

## Iterando sobre um Set

O Set oferece várias maneiras de iterar sobre seus valores:

### 1. Usando forEach(): O método .forEach() executa uma função para cada valor do Set

```js
numeros.add(1);
numeros.add(2);
numeros.add(3);

numeros.forEach((valor) => {
  console.log(valor);
});
// Saída esperada:
// 1
// 2
// 3
```

### 2. Usando for...of: O Set pode ser percorrido com o laço for...of

```js
for (let valor of numeros) {
  console.log(valor);
}
// Saída esperada:
// 1
// 2
// 3
```

## Propriedades e Métodos de Set

### 1. .size: A propriedade .size retorna o número de valores no Set

```js
let numeros = new Set([1, 2, 3, 4]);
console.log(numeros.size); // 4
```

### 2. .add(): O método .add() adiciona um valor ao Set, caso ele ainda não exista

```js
numeros.add(5);
console.log(numeros);
// Set { 1, 2, 3, 4, 5 }
```

### 3. .has(): O método .has() retorna true se o valor existir no Set e false caso contrário

```js
console.log(numeros.has(3)); // true
console.log(numeros.has(6)); // false
```

### 4. .delete(): O método .delete() remove um valor do Set

```js
numeros.delete(3);
console.log(numeros);
// Set { 1, 2, 4, 5 }
```

### 5. .clear(): O método .clear() remove todos os valores do Set

```js
numeros.clear();
console.log(numeros.size); // 0
```

## Comparação entre Arrays e Sets

|   Característica    |             Arrays              |              Sets               |
| :-----------------: | :-----------------------------: | :-----------------------------: |
| Valores Duplicados  |   Permite valores duplicados    | Não permite valores duplicados  |
| Ordem dos Elementos |   Mantém a ordem de inserção    |   Mantém a ordem de inserção    |
|  Métodos de Acesso  | `.push()`, `.pop()`, `.shift()` | `.add()`, .`delete()`, `.has()` |
|       Tamanho       |            `.length`            |             `.size`             |
|      Iteração       |     `.forEach()`, `.map()`      |   `.forEach()`, **for...of**    |

## Quando usar Set ao invés de Array?

Você deve usar um Set quando precisar garantir que não haja valores duplicados e não se preocupar com a ordem dos elementos. O Set é eficiente para operações de verificação de pertencimento e remoção de duplicatas.

### Exemplo de uso do Set para remover duplicatas de um Array

```js
let array = [1, 2, 2, 3, 4, 4, 5];
let conjunto = new Set(array);

console.log(conjunto);
// Set { 1, 2, 3, 4, 5 }
```

## Considerações Finais

O Set é uma estrutura de dados muito útil quando você precisa garantir que seus valores sejam únicos e realizar verificações rápidas de pertencimento. Ele é particularmente eficiente em situações em que a remoção de duplicatas ou a verificação da existência de um valor é necessária.

Ao utilizar o Set, você tem mais controle sobre a coleção de dados e pode evitar a introdução de duplicados em seu código, tornando-o mais limpo e eficiente.

Experimente os exemplos fornecidos para ver como o Set pode ser vantajoso em suas aplicações JavaScript!
