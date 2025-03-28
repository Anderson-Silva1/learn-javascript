// Criando um objeto usando chaves
let pessoa = {
  nome: "Anderson",
  idade: 21,
  cidade: "Fortaleza",
  profissao: "Estudante",
};

// Exibindo o objeto completo
console.log(pessoa);

// Acessando propriedades usando notação de ponto
console.log("Nome:", pessoa.nome); // "Anderson"
console.log("Idade:", pessoa.idade); // 21

// Acessando propriedades usando notação de colchetes
console.log("Cidade:", pessoa["cidade"]); // "Fortaleza"

// Modificando propriedades
pessoa.nome = "Carlos";
console.log("Nome modificado:", pessoa.nome); // "Carlos"

// Adicionando novas propriedades
pessoa.estadoCivil = "Solteiro";
console.log("Estado Civil:", pessoa.estadoCivil); // "Solteiro"

// Deletando uma propriedade
delete pessoa.profissao;
console.log("Profissão após deletar:", pessoa.profissao); // undefined

// Verificando se a propriedade existe usando 'in'
console.log("Existe a propriedade 'nome'?", "nome" in pessoa); // true
console.log("Existe a propriedade 'profissao'?", "profissao" in pessoa); // false

// Criando métodos dentro de um objeto
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

// Usando 'this' dentro de um método de objeto
let pessoa3 = {
  nome: "João",
  idade: 25,
  saudacao: function () {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  },
};

pessoa3.saudacao(); // "Olá, meu nome é João e tenho 25 anos."

// Objetos Aninhados
let empresa = {
  nome: "Tech Solutions",
  localizacao: {
    cidade: "Fortaleza",
    estado: "Ceará",
  },
  funcionarios: ["Anderson", "Rafaela", "Carlos"],
};

console.log("Cidade da empresa:", empresa.localizacao.cidade); // "Fortaleza"
console.log("Primeiro funcionário:", empresa.funcionarios[0]); // "Anderson"

// Laços e Objetos (percorrendo propriedades de um objeto com 'for...in')
for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}
// Saída:
// nome: Carlos
// idade: 21
// cidade: Fortaleza
// estadoCivil: Solteiro

// Métodos úteis de Objetos

// 1. Object.keys() - Retorna as chaves de um objeto
let chaves = Object.keys(pessoa);
console.log("Chaves do objeto pessoa:", chaves); // ["nome", "idade", "cidade", "estadoCivil"]

// 2. Object.values() - Retorna os valores de um objeto
let valores = Object.values(pessoa);
console.log("Valores do objeto pessoa:", valores); // ["Carlos", 21, "Fortaleza", "Solteiro"]

// 3. Object.entries() - Retorna pares chave-valor
let entradas = Object.entries(pessoa);
console.log("Entradas do objeto pessoa:", entradas);
// [["nome", "Carlos"], ["idade", 21], ["cidade", "Fortaleza"], ["estadoCivil", "Solteiro"]]

// 4. Object.assign() - Copia as propriedades de um objeto
let pessoaCopia = Object.assign({}, pessoa);
console.log("Cópia do objeto pessoa:", pessoaCopia);

// 5. Object.freeze() - Congela um objeto
let objetoCongelado = Object.freeze({ nome: "Maria" });
// objetoCongelado.nome = "Ana"; // Não vai funcionar
console.log("Objeto congelado:", objetoCongelado); // { nome: "Maria" }

// 6. Object.seal() - Selar um objeto (não permite adicionar ou excluir propriedades)
let objetoSelado = Object.seal({ nome: "Paula", idade: 30 });
objetoSelado.idade = 31; // Isso vai funcionar
// objetoSelado.sobrenome = "Silva";  // Não vai funcionar
console.log("Objeto selado:", objetoSelado); // { nome: "Paula", idade: 31 }
