# Variáveis em JavaScript

Neste tópico, vamos explorar o conceito de **variáveis** em JavaScript, que são fundamentais para armazenar e manipular dados dentro de um programa. Uma variável é um espaço de armazenamento com um nome associado, usado para guardar valores que podem ser alterados durante a execução do código.

## Declaração de Variáveis

Em JavaScript, existem três maneiras de declarar variáveis: `var`, `let` e `const`. Cada uma delas tem comportamentos diferentes e é importante entender quando utilizar cada uma.

### `var`

A palavra-chave `var` foi a forma tradicional de declarar variáveis no JavaScript, mas possui um escopo de função, o que pode levar a comportamentos inesperados.

Exemplo:

```js
var nome = "Anderson";
console.log(nome); // Anderson
```

- **Escopo**: Funcional.
- **Reatribuição**: Pode ser reatribuída ou redeclarada.
- **Uso**: Evitar o uso de var em código moderno, preferindo let ou const.

### `let`

A palavra-chave let foi introduzida no ES6 e é a forma mais moderna de declarar variáveis com escopo de bloco. Ela é útil quando a variável precisa ser reatribuída.

```js
let idade = 30;
idade = 31; // Reatribuição permitida
console.log(idade); // 31
```

- **Escopo**: Bloco (dentro de funções, laços, etc).
- **Reatribuição**: Permitida.
- **Uso**: Ideal para quando a variável pode ser alterada.

### `const`

A palavra-chave const também foi introduzida no ES6 e é usada para declarar variáveis cujo valor não deve ser alterado após a sua inicialização. O valor de uma variável const não pode ser reatribuído, mas objetos e arrays podem ser modificados internamente.

```js
const nome = "Anderson";
console.log(nome); // Anderson

// Tentativa de reatribuição resulta em erro
// nome = "Carlos"; // Erro: Assignment to constant variable.
```

- **Escopo**: Bloco.
- **Reatribuição**: Não permitida.
- **Uso**: Ideal para valores que não devem mudar, como configurações ou valores fixos.

## Inicialização e Atribuição de Variáveis

A inicialização de variáveis envolve a atribuição de um valor a uma variável declarada. Isso pode ser feito em uma única linha.

```js
let nome = "Anderson"; // Inicialização com valor
const idade = 30; // Inicialização com valor fixo
```

O JavaScript também permite fazer assim:

```js
let nome,
  idade = "Anderson";
30;
```

Se você declarar uma variável sem inicializá-la, ela terá o valor especial undefined.

```js
let pessoa;
console.log(pessoa); // undefined
```

# Boas Práticas

- **Evite o uso de var**: Devido ao seu comportamento de escopo de função e redeclaração, prefira let ou const para maior previsibilidade e legibilidade.

- **Não inicie com números ou caracteres especiais**: O JavaScript não aceita nomes de variáveis que iniciam com numeros ou caracteres especiais como: `#`, `$`, `%`, `@`, `!`, `&`...

- **Prefira const quando possível**: Para variáveis cujo valor não vai mudar, sempre use const. Isso ajuda a evitar erros de reatribuição.

- **Use nomes significativos**: Nomes de variáveis devem refletir seu propósito no código. Evite usar nomes genéricos como temp ou data.

# Exemplos Práticos

## Exemplo 1: Uso de let e const

```js
let saldo = 100; // A variável pode ser alterada
const limite = 500; // A variável não pode ser alterada

saldo += 50; // Reatribuição permitida
console.log(saldo); // 150

// Tentativa de reatribuição de 'limite' resulta em erro
// limite = 600; // Erro: Assignment to constant variable.
```

## Exemplo 2: Comparando let e const

```js
let nome = "Anderson";
nome = "Carlos"; // Atribuição permitida com 'let'
console.log(nome); // Carlos

const cidade = "Fortaleza";
// cidade = "Rio de Janeiro";  // Erro: Assignment to constant variable.
```

## Conclusão

Em JavaScript, variáveis são essenciais para armazenar dados e realizar operações no código. Entender a diferença entre var, let e const, e escolher a palavra-chave correta, é crucial para evitar erros e tornar o código mais seguro e legível.

- Use const para valores fixos e imutáveis.
- Use let para variáveis cujo valor pode mudar.
- Evite usar var, pois ela pode levar a comportamentos inesperados.
