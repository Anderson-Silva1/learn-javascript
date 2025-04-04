# Operações de Comparação Avançada (NaN, Infinity, etc.)

Além das comparações tradicionais, JavaScript oferece comparações mais avançadas com valores especiais, como NaN e Infinity.

- **NaN (Not a Number)**: Um valor especial retornado quando uma operação matemática não é válida.
- **Infinity e -Infinity:** Representam números infinitos.

Exemplo:

```js
Copiar;
Editar;
let resultado = 0 / 0; // NaN
console.log(resultado === NaN); // false (NaN não é igual a si mesmo)

let infinito = 1 / 0;
console.log(infinito); // Infinity
```
