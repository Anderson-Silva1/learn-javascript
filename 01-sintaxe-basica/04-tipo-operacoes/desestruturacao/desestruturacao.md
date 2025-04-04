# Operações de Desestruturação

A desestruturação permite extrair valores de arrays ou propriedades de objetos e armazená-los em variáveis de maneira concisa.

## Exemplo com array:

```js
Copiar;
Editar;
let [a, b] = [1, 2];
console.log(a, b); // 1 2
```

## Exemplo com objeto:

```js
Copiar;
Editar;
let pessoa = { nome: "Anderson", idade: 30 };
let { nome, idade } = pessoa;
console.log(nome, idade); // "Anderson" 30
```
