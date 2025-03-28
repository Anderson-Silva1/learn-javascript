# Operações de Spread (...)

O operador spread é utilizado para expandir ou copiar o conteúdo de um array ou objeto.

## Exemplo com array:

```js
Copiar;
Editar;
let numeros = [1, 2, 3];
let maisNumeros = [...numeros, 4, 5];
console.log(maisNumeros); // [1, 2, 3, 4, 5]
```

Exemplo com objeto:

```js
Copiar;
Editar;
let pessoa = { nome: "Anderson", idade: 30 };
let novaPessoa = { ...pessoa, cidade: "Fortaleza" };
console.log(novaPessoa); // { nome: "Anderson", idade: 30, cidade: "Fortaleza" }
```
