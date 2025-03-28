# Estudo Completo sobre Map em JavaScript

## O que é um Map em JavaScript?

O **Map** em JavaScript é uma coleção de pares chave-valor onde tanto as chaves quanto os valores podem ser de qualquer tipo, incluindo objetos, funções e tipos primitivos. Diferente dos objetos, as chaves em um **Map** podem ser de qualquer tipo, enquanto no objeto, as chaves são sempre convertidas para strings.

O **Map** foi introduzido no ECMAScript 6 (ES6) e fornece uma maneira mais eficiente de lidar com coleções de dados do que os objetos em algumas situações.

## Criando um Map

Para criar um **Map**, podemos usar o construtor `Map()`:

```javascript
// Criando um Map vazio
let mapa = new Map();

// Criando um Map com pares chave-valor
let pessoa = new Map([
  ["nome", "Anderson"],
  ["idade", 21],
  ["cidade", "Fortaleza"],
]);

console.log(pessoa);
// Map { 'nome' => 'Anderson', 'idade' => 21, 'cidade' => 'Fortaleza' }
```

## Acessando Valores em um Map

- Podemos acessar os valores de um Map usando o método **.get()**:

```js
let nome = pessoa.get("nome");
console.log(nome); // "Anderson"
```

- Se a chave não existir, o método .get() retornará undefined:

```js
let profissao = pessoa.get("profissao");
console.log(profissao); // undefined
```

## Modificando e Adicionando Valores em um Map

Para adicionar ou modificar valores, podemos usar o método .set():

```js
pessoa.set("profissao", "Estudante");
console.log(pessoa);
// Map { 'nome' => 'Anderson', 'idade' => 21, 'cidade' => 'Fortaleza', 'profissao' => 'Estudante' }
```

Se a chave já existir, o método .set() atualiza o valor da chave:

```js
pessoa.set("idade", 22);
console.log(pessoa.get("idade")); // 22
```

## Verificando a Existência de uma Chave

Para verificar se uma chave existe em um Map, podemos usar o método .has():

```js
console.log(pessoa.has("nome")); // true
console.log(pessoa.has("email")); // false
```

## Deletando Valores de um Map

Para remover um par chave-valor de um Map, usamos o método .delete():

```js
pessoa.delete("cidade");
console.log(pessoa.has("cidade")); // false
```

Se a chave não existir, o método .delete() retornará false, mas não causará erro.

## Limpando um Map

Para remover todos os pares chave-valor de um Map, podemos usar o método .clear():

```js
pessoa.clear();
console.log(pessoa.size); // 0
```

## Iterando sobre um Map

O Map oferece várias maneiras de iterar sobre seus pares chave-valor:

**1. Usando forEach**: O método .forEach() executa uma função para cada par chave-valor:

```js
pessoa.set("nome", "Anderson");
pessoa.set("idade", 21);

pessoa.forEach((valor, chave) => {
  console.log(`${chave}: ${valor}`);
});
// Saída:
// nome: Anderson
// idade: 21 2. Usando for...of
```

**2. Usando for...of**: O Map também pode ser percorrido com o laço for...of:

```js
for (let [chave, valor] of pessoa) {
  console.log(`${chave}: ${valor}`);
}
// Saída:
// nome: Anderson
// idade: 21
```

## Propriedades e Métodos de Map

**1. .size**: A propriedade .size retorna o número de pares chave-valor em um Map:

```js
console.log(pessoa.size); // 2
```

**2. .keys()**: O método .keys() retorna um iterador com as chaves de um Map:

```js
let chaves = pessoa.keys();
for (let chave of chaves) {
  console.log(chave);
}
// Saída:
// nome
// idade
```

**3. .values()**: O método .values() retorna um iterador com os valores de um Map:

```js
let valores = pessoa.values();
for (let valor of valores) {
  console.log(valor);
}
// Saída:
// Anderson
// 21
```

**4. .entries()**: O método .entries() retorna um iterador com os pares chave-valor de um Map:

```js
let entradas = pessoa.entries();
for (let [chave, valor] of entradas) {
  console.log(`${chave}: ${valor}`);
}
// Saída:
// nome: Anderson
// idade: 21
```

**5. .get() e .set()**:

- **.get(chave)** - Retorna o valor associado à chave.
- **.set(chave, valor)** - Adiciona ou atualiza um par chave-valor.

**6. .has()**:

- **.has(chave)** - Retorna true se a chave existir, caso contrário, retorna false.

**7. .delete()**:

- **.delete(chave)** - Remove o par chave-valor do Map.

**8. .clear()**:

- **.clear()** - Remove todos os pares chave-valor do Map.

Comparação entre Objetos e Maps
Característica Objetos Map
Chaves Somente strings ou símbolos Qualquer tipo de dado (incluindo objetos)
Ordem das chaves Não garantida A ordem de inserção é mantida
Métodos de iteração for...in, Object.keys(), etc. forEach(), keys(), values(), entries()
Tamanho Não possui uma propriedade size Possui a propriedade size
Performance Mais lento em grandes volumes Mais eficiente com grandes volumes

|   Característica    |              Objetos              |                          Map                           |
| :-----------------: | :-------------------------------: | :----------------------------------------------------: |
|       Chaves        | ObjetSomente strings ou símbolos  |       Qualquer tipo de dado (incluindo objetos)        |
|  Ordem das chaves   |           Não garantida           |             A ordem de inserção é mantida              |
| Métodos de iteração | `for...in`, `Object.keys()`, etc. | **forEach()**, **keys()**, **values()**, **entries()** |
|       Tamanho       |  Não possui uma propriedade size  |               Possui a propriedade size                |
|     Performance     |   Mais lento em grandes volumes   |           Mais eficiente com grandes volumes           |

## Quando usar Map ao invés de Objeto?

- Quando você precisa de chaves de tipos diferentes de strings (por exemplo, números, objetos, funções).

- Quando a ordem de inserção das chaves é importante.

- Quando você precisa de métodos nativos como .size, .get(), .set(), .has(), entre outros.

## Considerações Finais

O Map é uma ferramenta poderosa em JavaScript para armazenar e manipular coleções de dados. Ele oferece uma maneira mais robusta e eficiente de lidar com pares chave-valor em comparação com objetos, especialmente quando as chaves não são strings e quando a ordem de inserção importa.

Ao aprender a usar Map, você ganha mais controle sobre como armazenar e acessar dados em seu código JavaScript.

Experimente os exemplos fornecidos e entenda como o Map pode ser útil em diferentes situações!
