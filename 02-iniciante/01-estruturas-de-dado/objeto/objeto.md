# Estudo Completo sobre Objetos em JavaScript

## O que é um Objeto em JavaScript?

Em JavaScript, um objeto é uma coleção de propriedades, sendo cada propriedade composta por uma chave (também chamada de 'nome') e um valor. Um objeto é uma estrutura de dados não ordenada que armazena pares chave-valor.

## Criando um Objeto

Existem duas maneiras comuns de criar um objeto:

**1. Usando chaves ({})**:

```javascript
let pessoa = {
  nome: "Anderson",
  idade: 21,
  cidade: "Fortaleza",
  profissao: "Estudante",
};
console.log(pessoa); // { nome: 'Anderson', idade: 21, cidade: 'Fortaleza', profissao: 'Estudante' }
```

**2. Usando o construtor Object():**

```js
let pessoa2 = new Object();
pessoa2.nome = "Rafaela";
pessoa2.idade = 20;
pessoa2.cidade = "Fortaleza";
pessoa2.profissao = "Estudante";
console.log(pessoa2); // { nome: 'Rafaela', idade: 20, cidade: 'Fortaleza', profissao: 'Estudante' }
```

## Acessando Propriedades de um Objeto

Podemos acessar as propriedades de um objeto usando a notação de ponto ou a notação de colchetes:

- **Notação de ponto:**

```js
console.log(pessoa.nome); // "Anderson"
```

- **Notação de colchetes:**

```js
console.log(pessoa["idade"]); // 21
```

## Modificando Propriedades de um Objeto

- **Usando a notação de ponto:**

```js
pessoa.nome = "Carlos";
console.log(pessoa.nome); // "Carlos"
```

- **Usando a notação de colchetes:**

```js
pessoa["cidade"] = "São Paulo";
console.log(pessoa["cidade"]); // "São Paulo"
```

## Adicionando Novas Propriedades a um Objeto

Podemos adicionar novas propriedades a um objeto a qualquer momento:

```js
pessoa.estadoCivil = "Solteiro";
console.log(pessoa.estadoCivil); // "Solteiro"
```

## Deletando Propriedades de um Objeto

Podemos remover propriedades de um objeto usando o operador delete:

```js
delete pessoa.profissao;
console.log(pessoa.profissao); // undefined
```

## Verificando a Existência de uma Propriedade

Podemos verificar se uma propriedade existe em um objeto usando o operador `in`:

```js
console.log("nome" in pessoa); // true
console.log("profissao" in pessoa); // false
```

## Métodos de um Objeto

Um objeto pode também ter métodos, ou seja, funções associadas a ele. Esses métodos podem acessar e modificar as propriedades do objeto:

```js
let carro = {
  marca: "Fusca",
  modelo: "Fusca 1300",
  ano: 1979,
  exibirInformacoes: function () {
    console.log(
      `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`
    );
  },
};

carro.exibirInformacoes(); // "Marca: Fusca, Modelo: Fusca 1300, Ano: 1979"
```

## Usando this em Objetos

Dentro de um método de um objeto, a palavra-chave this se refere ao próprio objeto, permitindo que o método acesse suas propriedades e outros métodos:

```js
let pessoa3 = {
  nome: "João",
  idade: 25,
  saudacao: function () {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  },
};

pessoa3.saudacao(); // "Olá, meu nome é João e tenho 25 anos."
```

## Objetos Aninhados

Um objeto pode conter outros objetos como suas propriedades, criando estruturas de objetos aninhados:

```js
let empresa = {
  nome: "Tech Solutions",
  localizacao: {
    cidade: "Fortaleza",
    estado: "Ceará",
  },
  funcionarios: ["Anderson", "Rafaela", "Carlos"],
};

console.log(empresa.localizacao.cidade); // "Fortaleza"
console.log(empresa.funcionarios[0]); // "Anderson"
```

## Laços e Objetos

Podemos percorrer as propriedades de um objeto usando o for...in:

```js
let pessoa4 = {
  nome: "Amanda",
  idade: 28,
  cidade: "Fortaleza",
};

for (let chave in pessoa4) {
  console.log(chave + ": " + pessoa4[chave]);
}
// Saída:
// nome: Amanda
// idade: 28
// cidade: Fortaleza
```

## Métodos Úteis de Objetos

**1. Object.keys()** - Retorna um array com as chaves (nomes das propriedades) do objeto.

```js
let chaves = Object.keys(pessoa4);
console.log(chaves); // ["nome", "idade", "cidade"]
```

**2. Object.values()** - Retorna um array com os valores das propriedades do objeto.

```js
let valores = Object.values(pessoa4);
console.log(valores); // ["Amanda", 28, "Fortaleza"]
```

**3. Object.entries()** - Retorna um array com pares chave-valor do objeto.

```js
let entradas = Object.entries(pessoa4);
console.log(entradas); // [["nome", "Amanda"], ["idade", 28], ["cidade", "Fortaleza"]]
```

**4. Object.assign()** - Copia as propriedades de um ou mais objetos para um objeto de destino.

```js
let pessoaCopia = Object.assign({}, pessoa4);
console.log(pessoaCopia); // { nome: 'Amanda', idade: 28, cidade: 'Fortaleza' }
```

**5. Object.freeze()** - Impede que as propriedades de um objeto sejam alteradas.

```js
let objetoCongelado = Object.freeze({ nome: "Maria" });
// objetoCongelado.nome = "Ana"; // Isso não vai funcionar, pois o objeto está congelado
console.log(objetoCongelado.nome); // "Maria"
```

**6. Object.seal()** - Permite alterar as propriedades existentes, mas impede adicionar ou excluir propriedades.

```js
let objetoSelado = Object.seal({ nome: "Paula", idade: 30 });
objetoSelado.idade = 31; // Isso vai funcionar
// objetoSelado.sobrenome = "Silva"; // Não vai funcionar, não podemos adicionar novas propriedades
console.log(objetoSelado); // { nome: "Paula", idade: 31 }
```

## Considerações Finais

Objetos são fundamentais em JavaScript, pois são usados para armazenar e organizar dados de maneira eficiente e estruturada. Além disso, objetos permitem que você crie métodos e interaja com as propriedades de maneira dinâmica. Experimente os exemplos fornecidos para entender como trabalhar com objetos em JavaScript.
