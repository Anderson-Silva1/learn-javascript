# Estudo Completo sobre Classes em JavaScript

## Introdução

As classes em JavaScript são uma abstração da programação orientada a objetos (POO) que permite criar objetos com propriedades e comportamentos definidos. Elas foram introduzidas no ECMAScript 2015 (ES6) e proporcionam uma maneira mais organizada e legível de escrever código reutilizável.

---

## Declaração de Classes

Podemos declarar uma classe em JavaScript usando a palavra-chave `class`:

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}
```

### Criando Instâncias da Classe

```javascript
const pessoa1 = new Pessoa("João", 25);
console.log(pessoa1.apresentar());
```

---

## Construtores

O construtor (`constructor`) é um método especial que é chamado automaticamente quando uma nova instância da classe é criada.

```javascript
class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
}
```

Podemos criar um novo objeto da classe assim:

```javascript
const meuCarro = new Carro("Toyota", "Corolla");
console.log(meuCarro.marca); // Toyota
console.log(meuCarro.modelo); // Corolla
```

---

## Herança

A herança permite que uma classe (subclasse) herde as propriedades e métodos de outra classe (superclasse). Utilizamos a palavra-chave `extends`.

```javascript
class Animal {
  constructor(nome) {
    this.nome = nome;
  }
  emitirSom() {
    console.log("Som genérico");
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log("Latido");
  }
}
```

Criando instâncias:

```javascript
const dog = new Cachorro("Rex");
dog.emitirSom(); // Latido
```

---

## Polimorfismo

Polimorfismo ocorre quando um método de uma classe é sobrescrito em uma subclasse para ter um comportamento diferente.

```javascript
class Forma {
  calcularArea() {
    return 0;
  }
}

class Quadrado extends Forma {
  constructor(lado) {
    super();
    this.lado = lado;
  }
  calcularArea() {
    return this.lado * this.lado;
  }
}

const quadrado = new Quadrado(4);
console.log(quadrado.calcularArea()); // 16
```

---

## Métodos

Os métodos são funções dentro das classes que definem comportamentos para os objetos.

### Métodos de Instância

```javascript
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  dizerOla() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}

const pessoa = new Pessoa("Ana");
pessoa.dizerOla();
```

### Métodos Estáticos

Métodos estáticos pertencem à classe e não às instâncias.

```javascript
class Matematica {
  static somar(a, b) {
    return a + b;
  }
}

console.log(Matematica.somar(5, 3)); // 8
```

---

## Conclusão

As classes em JavaScript facilitam a organização do código, promovendo reutilização e manutenção eficiente. O uso de construtores, herança, polimorfismo e métodos melhora a estrutura do código e permite um desenvolvimento mais robusto.
