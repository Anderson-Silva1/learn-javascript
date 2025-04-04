# Estudo Completo sobre Prototypes em JavaScript

## Introdução

O sistema de `prototype` em JavaScript é um dos conceitos fundamentais da linguagem. Ele permite que objetos herdem propriedades e métodos de outros objetos, criando um modelo de herança baseado em protótipos.

Em JavaScript, cada objeto tem uma referência interna para outro objeto chamado `prototype`. Esse protótipo pode conter propriedades e métodos que são compartilhados por todas as instâncias do objeto.

---

## Criando Objetos com Prototype

Podemos criar um objeto e definir um protótipo manualmente:

```javascript
const pessoa = {
  saudacao: function () {
    return `Olá, meu nome é ${this.nome}`;
  },
};

const joao = Object.create(pessoa);
joao.nome = "João";

console.log(joao.saudacao()); // Olá, meu nome é João
```

Aqui, `joao` herda as propriedades e métodos do objeto `pessoa` por meio do protótipo.

---

## A Cadeia de Prototipagem

Sempre que tentamos acessar uma propriedade ou método de um objeto, o JavaScript primeiro verifica se essa propriedade existe no próprio objeto. Se não existir, ele busca no protótipo do objeto e continua subindo na cadeia de protótipos até encontrar ou atingir `null`.

```javascript
console.log(joao.toString()); // Método herdado do Object.prototype
```

O método `toString()` não foi definido no objeto `joao`, mas ele foi encontrado na cadeia de prototipagem, especificamente em `Object.prototype`.

---

## Prototype em Funções Construtoras

Quando criamos um objeto usando uma função construtora, os métodos podem ser adicionados ao protótipo da função para que todas as instâncias compartilhem o mesmo método, otimizando o uso de memória.

```javascript
function Carro(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

Carro.prototype.apresentar = function () {
  return `Este é um ${this.marca} ${this.modelo}`;
};

const meuCarro = new Carro("Toyota", "Corolla");
console.log(meuCarro.apresentar()); // Este é um Toyota Corolla
```

Dessa forma, `apresentar` está disponível para todas as instâncias de `Carro`, mas não ocupa espaço em cada objeto individual.

---

## Modificando Prototypes

Podemos adicionar ou modificar métodos e propriedades em tempo de execução:

```javascript
Carro.prototype.velocidadeMaxima = 200;

console.log(meuCarro.velocidadeMaxima); // 200
```

---

## Verificando Propriedades no Prototype

Podemos verificar se uma propriedade pertence ao próprio objeto ou se veio do protótipo:

```javascript
console.log(meuCarro.hasOwnProperty("marca")); // true
console.log(meuCarro.hasOwnProperty("apresentar")); // false (vem do protótipo)
```

---

## Substituindo o Prototype de um Objeto

Também é possível redefinir o protótipo de um objeto com `Object.setPrototypeOf`:

```javascript
const novoProto = {
  descricao: function () {
    return `Novo comportamento!`;
  },
};

Object.setPrototypeOf(meuCarro, novoProto);
console.log(meuCarro.descricao()); // Novo comportamento!
```

---

## Conclusão

O sistema de `prototype` é uma das características mais poderosas do JavaScript, permitindo herança e reutilização de código de forma eficiente. Compreender prototipagem é essencial para quem deseja dominar a linguagem e escrever código otimizado e estruturado.
