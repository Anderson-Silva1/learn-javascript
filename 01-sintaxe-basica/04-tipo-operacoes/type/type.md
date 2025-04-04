# Operações de Tipo (Type Operators)

- **typeof**: Retorna o tipo de dado de uma variável ou expressão.
- **instanceof**: Verifica se um objeto é uma instância de uma classe ou de um tipo específico.

```js
let text = "Teate123";
let number = 123;
let object = {
  name: "Anderson",
  age: 19,
  sex: "male",
};

console.log(typeof text); // mostra o tipo de dado a ser tratado
console.log(typeof number);
console.log(typeof object);

let arr = [];
console.log(arr instanceof Array); // true
```

## Conversão de tipos

### 1. toString()

- Converte para Texto

### 2. parseInt()

- Converte para Número Inteiro

### 3. parseFloat()

- Converte para Número Decimal ou Fracionado
