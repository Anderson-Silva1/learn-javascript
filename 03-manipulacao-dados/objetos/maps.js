// Estudo Completo sobre Map em JavaScript

// 1. Criando um Map vazio
let mapa = new Map();

// 2. Criando um Map com pares chave-valor
let pessoa = new Map([
  ["nome", "Anderson"],
  ["idade", 21],
  ["cidade", "Fortaleza"],
]);

console.log("Exemplo 1 - Criando um Map:");
console.log(pessoa);
// Saída esperada: Map { 'nome' => 'Anderson', 'idade' => 21, 'cidade' => 'Fortaleza' }
console.log("");

// 3. Acessando valores de um Map com o método .get()
console.log("Exemplo 2 - Acessando valores em um Map:");
let nome = pessoa.get("nome");
console.log("Nome:", nome); // "Anderson"

let profissao = pessoa.get("profissao");
console.log("Profissão:", profissao); // undefined
console.log("");

// 4. Adicionando ou modificando valores em um Map com o método .set()
console.log("Exemplo 3 - Modificando e adicionando valores em um Map:");
pessoa.set("profissao", "Estudante");
console.log(pessoa);
// Map { 'nome' => 'Anderson', 'idade' => 21, 'cidade' => 'Fortaleza', 'profissao' => 'Estudante' }

pessoa.set("idade", 22);
console.log("Idade atualizada:", pessoa.get("idade")); // 22
console.log("");

// 5. Verificando a existência de uma chave com o método .has()
console.log("Exemplo 4 - Verificando se uma chave existe em um Map:");
console.log(pessoa.has("nome")); // true
console.log(pessoa.has("email")); // false
console.log("");

// 6. Deletando valores de um Map com o método .delete()
console.log("Exemplo 5 - Deletando um valor de um Map:");
pessoa.delete("cidade");
console.log(pessoa.has("cidade")); // false
console.log("");

// 7. Limpando um Map com o método .clear()
console.log("Exemplo 6 - Limpando um Map:");
pessoa.clear();
console.log(pessoa.size); // 0 (O Map está vazio)
console.log("");

// 8. Iterando sobre um Map com o método .forEach()
console.log("Exemplo 7 - Iterando sobre um Map com .forEach():");
pessoa.set("nome", "Anderson");
pessoa.set("idade", 21);

pessoa.forEach((valor, chave) => {
  console.log(`${chave}: ${valor}`);
});
// Saída esperada:
// nome: Anderson
// idade: 21
console.log("");

// 9. Iterando sobre um Map com o laço for...of
console.log("Exemplo 8 - Iterando sobre um Map com for...of:");
for (let [chave, valor] of pessoa) {
  console.log(`${chave}: ${valor}`);
}
// Saída esperada:
// nome: Anderson
// idade: 21
console.log("");

// 10. Usando .keys(), .values() e .entries()
console.log("Exemplo 9 - Usando .keys(), .values() e .entries():");

// .keys() - Iterando sobre as chaves
let chaves = pessoa.keys();
console.log("Chaves:");
for (let chave of chaves) {
  console.log(chave);
}
// Saída esperada:
// nome
// idade

// .values() - Iterando sobre os valores
let valores = pessoa.values();
console.log("Valores:");
for (let valor of valores) {
  console.log(valor);
}
// Saída esperada:
// Anderson
// 21

// .entries() - Iterando sobre os pares chave-valor
let entradas = pessoa.entries();
console.log("Entradas (pares chave-valor):");
for (let [chave, valor] of entradas) {
  console.log(`${chave}: ${valor}`);
}
// Saída esperada:
// nome: Anderson
// idade: 21
console.log("");

// 11. Comparação entre Objetos e Maps
console.log("Exemplo 10 - Comparação entre Objetos e Maps:");

let objeto = {
  nome: "Anderson",
  idade: 21,
};

// Objeto
console.log("Objeto:");
console.log(objeto); // { nome: 'Anderson', idade: 21 }
console.log("Objeto - Chave 'nome' é", "nome" in objeto); // true
console.log("Objeto - Chave 'cidade' é", "cidade" in objeto); // false

// Map
let mapaObjeto = new Map([
  ["nome", "Anderson"],
  ["idade", 21],
]);

console.log("Map:");
console.log(mapaObjeto); // Map { 'nome' => 'Anderson', 'idade' => 21 }
console.log("Map - Chave 'nome' é", mapaObjeto.has("nome")); // true
console.log("Map - Chave 'cidade' é", mapaObjeto.has("cidade")); // false
console.log("");

// 12. Quando usar Map ao invés de Objeto
console.log("Exemplo 11 - Quando usar Map ao invés de Objeto:");
console.log("Use Map quando precisar de:");
console.log(
  "1. Chaves de tipos diferentes de strings, como números ou objetos."
);
console.log("2. Ordem de inserção das chaves seja importante.");
console.log("3. Métodos como .size, .get(), .set(), .has() sejam necessários.");
console.log("");

// Conclusão
console.log("Conclusão:");
console.log(
  "O Map é uma coleção chave-valor poderosa e eficiente, especialmente quando as chaves não são apenas strings ou quando a ordem das chaves importa."
);
console.log(
  "Com o Map, você pode acessar, modificar e iterar de forma eficiente sobre seus dados."
);
