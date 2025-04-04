# Tipos de Dados em JavaScript

Nesta seção, vamos explorar os principais tipos de dados em JavaScript, que são fundamentais para o desenvolvimento de aplicações. Esses tipos determinam como os valores são armazenados e manipulados no código.

## String

**String** representa textos em JavaScript. Uma string é uma sequência de caracteres, como letras, números ou símbolos, que pode ser tratada como uma lista ou cadeia de caracteres. Strings são sempre declaradas entre aspas simples (`'`), aspas duplas (`"`) ou crases (`` ` ``), sendo este último usado para _template literals_.

Exemplo:

```js
const nome = "Anderson";
const saudacao = "Olá, mundo!";
const template = `Meu nome é ${nome}`; // Exemplo de template literal
```

- **Característica**: Strings são imutáveis, mas podem ser manipuladas com métodos como .toUpperCase(), .length, entre outros.
- **Uso comum**: Armazenar nomes, mensagens ou qualquer tipo de texto.

## Number

**Number** é o tipo usado para representar números em JavaScript. Não há distinção entre inteiros (int) e números decimais (float) — ambos são tratados como Number. Esse tipo suporta operações matemáticas básicas, como adição, subtração, multiplicação e divisão.

Exemplo:

```js
const numeroInteiro = 42; // Inteiro
const numeroDecimal = 3.14; // Decimal (float)
const resultado = 10 + 5.5; // Operação matemática
```

- **Característica**: Inclui valores especiais como Infinity, -Infinity e NaN (Not a Number).
- **Uso comum**: Cálculos, contagens e medições.

## Boolean

**Boolean** representa valores lógicos: true (verdadeiro) ou false (falso). É frequentemente usado em condições, comparações e controle de fluxo, como em estruturas if ou loops.

Exemplo:

```js
const verdadeiro = true;
const falso = false;
const maiorIdade = 18 >= 20; // Retorna false
```

- **Característica**: Resultado típico de expressões condicionais (ex.: 5 > 3 retorna true).
- **Uso comum**: Tomada de decisões no código, como ativar ou desativar funcionalidades.

## Outros Tipos de Dados

### Undefined

Representa uma variável que foi declarada, mas não inicializada com um valor.

```js
let variavel;
console.log(variavel); // undefined
```

### Null

Indica a ausência intencional de valor. É usado para "resetar" ou indicar que uma variável não contém nada.

```js
let valor = null;
```

### Object

Representa uma coleção de propriedades (chave-valor). É a base para estruturas como objetos e arrays.

```js
const pessoa = {
  nome: "Anderson",
  idade: 30,
};
```

### Array

Um tipo especial de objeto usado para listas ordenadas.

```js
const lista = ["maçã", "banana", "laranja"];
```

### SYMBOL

**Symbol** é um tipo de dado primitivo usado para criar identificadores únicos para propriedades de objetos. Cada Symbol é garantido ser único, o que evita colisões de chave em objetos.

```js
const id = Symbol("id");
const pessoa = {
  [id]: 123,
};

console.log(pessoa[id]); // 123
```

### BIGINT

**BigInt** é um tipo de dado que permite representar números inteiros que são maiores do que o limite máximo do tipo Number. Ideal para cálculos envolvendo números muito grandes, como os encontrados em criptografia ou manipulação de grandes bases de dados.

```js
const numeroGigante = 1234567890123456789012345678901234567890n;
console.log(numeroGigante); // 1234567890123456789012345678901234567890n
```

## Conclusão

Entender os tipos de dados em JavaScript é essencial para manipular informações de forma eficaz. Cada tipo tem características específicas que influenciam como ele é usado no código. Experimente criar variáveis com esses tipos e testá-las no console do navegador para se familiarizar com seu comportamento!
