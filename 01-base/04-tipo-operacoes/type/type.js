// Operações de Tipo (Type Operators)

// O operador 'typeof' retorna o tipo de dado de uma variável ou expressão.
let text = "Teate123";
let number = 123;
let object = {
  name: "Anderson",
  age: 19,
  sex: "male",
};

console.log(typeof text); // "string" - Retorna o tipo de 'text', que é uma string.
console.log(typeof number); // "number" - Retorna o tipo de 'number', que é um número.
console.log(typeof object); // "object" - Retorna o tipo de 'object', que é um objeto.

// O operador 'instanceof' verifica se um objeto é uma instância de uma classe ou de um tipo específico.

let arr = [];
let date = new Date();

console.log(arr instanceof Array); // true - 'arr' é uma instância de Array.
console.log(date instanceof Date); // true - 'date' é uma instância de Date.

// Exemplo de uso com funções
function greet() {}
let greetFn = greet;

console.log(greetFn instanceof Function); // true - 'greetFn' é uma função.

let obj = { name: "Maria" };
console.log(obj instanceof Object); // true - 'obj' é uma instância de Object.

// Comparando tipos de dados mais complexos
let func = function () {};
let num = 10;

console.log(typeof func); // "function" - 'func' é uma função.
console.log(typeof num); // "number" - 'num' é um número.

console.log(func instanceof Object); // true - Em JavaScript, funções são objetos, então func é uma instância de Object.
console.log(num instanceof Object); // false - 'num' não é uma instância de Object, pois é um tipo primitivo.

let numero = 10;
let texto = "10";
let numeroFloat = 10.0;

console.log(parseInt(texto));
console.log(toString(numeroFloat));
console.log(parseFloat(numero));
