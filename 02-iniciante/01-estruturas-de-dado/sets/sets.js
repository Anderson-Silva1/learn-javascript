// Estudo Completo sobre Set em JavaScript

// 1. Criando um Set

// Criando um Set vazio
let conjunto = new Set();
console.log("Set Vazio:", conjunto); // Set {}

// Criando um Set com valores iniciais
let numeros = new Set([1, 2, 3, 4, 5]);
console.log("Set com valores iniciais:", numeros); // Set { 1, 2, 3, 4, 5 }

// 2. Adicionando Valores a um Set

// Adicionando valores ao Set
numeros.add(6);
console.log("Após adicionar 6:", numeros); // Set { 1, 2, 3, 4, 5, 6 }

// Tentando adicionar um valor duplicado (não será adicionado)
numeros.add(3);
console.log("Após tentar adicionar 3 novamente:", numeros); // Set { 1, 2, 3, 4, 5, 6 }

// 3. Verificando a Existência de um Valor

// Verificando se o Set contém determinados valores
console.log("Contém 3?", numeros.has(3)); // true
console.log("Contém 7?", numeros.has(7)); // false

// 4. Removendo Valores de um Set

// Removendo um valor do Set
numeros.delete(4);
console.log("Após remover 4:", numeros); // Set { 1, 2, 3, 5, 6 }

// Se o valor não existir, .delete() retorna false
console.log("Tentar remover 4 novamente:", numeros.delete(4)); // false

// 5. Limpando um Set

// Limpando todos os valores do Set
numeros.clear();
console.log("Após limpar o Set:", numeros); // Set {}

// 6. Iterando sobre um Set

// Criando um Set com alguns valores
let conjuntoNumeros = new Set([1, 2, 3]);

// 6.1 Usando forEach() para iterar
conjuntoNumeros.forEach((valor) => {
  console.log("Valor com forEach:", valor);
});
// Saída esperada:
// Valor com forEach: 1
// Valor com forEach: 2
// Valor com forEach: 3

// 6.2 Usando for...of para iterar
for (let valor of conjuntoNumeros) {
  console.log("Valor com for...of:", valor);
}
// Saída esperada:
// Valor com for...of: 1
// Valor com for...of: 2
// Valor com for...of: 3

// 7. Propriedades e Métodos de Set

// Verificando o tamanho do Set
console.log("Tamanho do Set:", conjuntoNumeros.size); // 3

// 7.1 Adicionando e verificando o tamanho
conjuntoNumeros.add(4);
console.log("Após adicionar 4, tamanho do Set:", conjuntoNumeros.size); // 4

// 7.2 Verificando existência de um valor
console.log("Contém 2?", conjuntoNumeros.has(2)); // true
console.log("Contém 5?", conjuntoNumeros.has(5)); // false

// 7.3 Removendo valor do Set
conjuntoNumeros.delete(1);
console.log("Após remover 1:", conjuntoNumeros); // Set { 2, 3, 4 }

// 7.4 Limpando o Set
conjuntoNumeros.clear();
console.log("Após limpar, tamanho do Set:", conjuntoNumeros.size); // 0

// 8. Comparação entre Arrays e Sets

// Exemplo de Array com valores duplicados
let array = [1, 2, 2, 3, 4, 4, 5];
console.log("Array com duplicatas:", array);

// Usando Set para remover duplicatas
let conjuntoUnico = new Set(array);
console.log("Set sem duplicatas:", conjuntoUnico); // Set { 1, 2, 3, 4, 5 }

// 9. Quando usar Set ao invés de Array

// Usando Set para garantir valores únicos
let unicoSet = new Set([1, 2, 3]);
unicoSet.add(3); // 3 não será adicionado novamente
unicoSet.add(4); // 4 será adicionado
console.log("Set com valores únicos:", unicoSet); // Set { 1, 2, 3, 4 }

// Usando Set para verificar a existência rápida de valores
let valores = new Set([10, 20, 30]);
console.log("Contém 20?", valores.has(20)); // true
console.log("Contém 50?", valores.has(50)); // false

// 10. Conclusão

// O Set é ótimo para garantir que os dados não tenham duplicatas, seja em coleções de números, strings ou objetos.
// Ele é ideal para quando se precisa verificar rapidamente se um valor já existe e quando não é necessário manter a ordem dos elementos.
