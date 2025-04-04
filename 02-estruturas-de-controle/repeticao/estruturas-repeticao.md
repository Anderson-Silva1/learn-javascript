# Estudo Completo sobre Estruturas de Repetição em JavaScript

## Introdução

As estruturas de repetição (ou loops) são usadas para executar um bloco de código várias vezes de forma eficiente. Elas evitam a repetição manual de comandos e são essenciais para a manipulação de arrays, interações dinâmicas e otimização de código.

## Tipos de Estruturas de Repetição

### 1. Loop `for`

O loop `for` é usado quando o número de iterações é conhecido antecipadamente.

**Sintaxe:**

```javascript
for (inicialização; condição; incremento) {
  // Bloco de código
}
```

**Exemplo:**

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteração:", i);
}
```

### 2. Loop `while`

O loop `while` executa um bloco de código enquanto uma condição for verdadeira.

**Sintaxe:**

```javascript
while (condição) {
  // Bloco de código
}
```

**Exemplo:**

```javascript
let contador = 0;
while (contador < 5) {
  console.log("Contagem:", contador);
  contador++;
}
```

### 3. Loop `do...while`

Semelhante ao `while`, mas garante que o bloco seja executado pelo menos uma vez, mesmo que a condição seja falsa na primeira verificação.

**Sintaxe:**

```javascript
do {
  // Bloco de código
} while (condição);
```

**Exemplo:**

```javascript
let num = 0;
do {
  console.log("Valor de num:", num);
  num++;
} while (num < 5);
```

### 4. Loop `for...of` (Para Arrays)

Percorre os valores de um array ou objeto iterável.

**Sintaxe:**

```javascript
for (let variavel of iteravel) {
  // Bloco de código
}
```

**Exemplo:**

```javascript
const numeros = [10, 20, 30, 40];
for (let numero of numeros) {
  console.log("Número:", numero);
}
```

### 5. Loop `for...in` (Para Objetos)

Percorre as propriedades de um objeto.

**Sintaxe:**

```javascript
for (let chave in objeto) {
  // Bloco de código
}
```

**Exemplo:**

```javascript
const pessoa = { nome: "Anderson", idade: 25, cidade: "Fortaleza" };
for (let chave in pessoa) {
  console.log(chave + ":", pessoa[chave]);
}
```

## Controle de Fluxo em Loops

### `break` - Interrompe um loop

**Exemplo:**

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Sai do loop quando i = 5
  }
  console.log(i);
}
```

### `continue` - Pula uma iteração

**Exemplo:**

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Pula os números pares
  }
  console.log(i);
}
```

## Conclusão

As estruturas de repetição são fundamentais para a eficiência e flexibilidade do código. O uso correto de `for`, `while`, `do...while`, `for...in` e `for...of` permite manipular dados de forma eficiente, economizando tempo e melhorando a legibilidade do código.
