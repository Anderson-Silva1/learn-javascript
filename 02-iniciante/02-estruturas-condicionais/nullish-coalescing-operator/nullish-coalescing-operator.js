// Exemplo 1: Usando ?? para definir valores padrao
let nomeUsuario = null;
let nomePadrao = "Visitante";
let nomeExibido = nomeUsuario ?? nomePadrao;
console.log(nomeExibido); // "Visitante"

// Exemplo 2: Evitando problemas com valores falsy
let idade = 0;
let idadePadrao = 18;
console.log(idade ?? idadePadrao); // 0
console.log(idade || idadePadrao); // 18

// Exemplo 3: Uso em funcoes
function obterMensagem(mensagem) {
  return mensagem ?? "Sem mensagem disponível.";
}
console.log(obterMensagem("Olá!")); // "Olá!"
console.log(obterMensagem(null)); // "Sem mensagem disponível."
console.log(obterMensagem(undefined)); // "Sem mensagem disponível."

// Exemplo 4: Uso com objetos e propriedades inexistentes
const usuario = { nome: "Anderson", idade: null };
console.log(usuario.nome ?? "Desconhecido"); // "Anderson"
console.log(usuario.idade ?? 18); // 18
console.log(usuario.email ?? "Sem e-mail"); // "Sem e-mail"

// Exemplo 5: Uso com encadeamento opcional (?.)
const pessoa = {
  nome: "Lucas",
  endereco: {
    cidade: "São Paulo",
  },
};
console.log(pessoa.endereco?.rua ?? "Endereço não informado"); // "Endereço não informado"

// Exemplo 6: Erro ao misturar ?? com operadores lógicos sem parênteses
// let resultado = valor1 || valor2 ?? "padrão"; // Erro de sintaxe!

// Exemplo correto
let valor1 = null;
let valor2 = false;
let resultado = (valor1 || valor2) ?? "padrão";
console.log(resultado); // false
