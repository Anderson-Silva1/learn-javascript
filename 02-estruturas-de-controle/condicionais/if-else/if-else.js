// Exemplo 1: Uso básico do if else
let idade = 18;
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// Exemplo 2: Uso do else if
let temperatura = 30;
if (temperatura > 35) {
  console.log("Está muito quente!");
} else if (temperatura >= 25) {
  console.log("Está um clima agradável.");
} else {
  console.log("Está frio.");
}

// Exemplo 3: Verificando valores truthy e falsy
let nome = "";
if (nome) {
  console.log("O nome foi preenchido.");
} else {
  console.log("Nome não informado.");
}

// Exemplo 4: If else aninhado
let temCNH = true;
if (idade >= 18) {
  if (temCNH) {
    console.log("Você pode dirigir.");
  } else {
    console.log("Você precisa tirar sua CNH.");
  }
} else {
  console.log("Você ainda não tem idade para dirigir.");
}

// Exemplo 5: Uso de operadores lógicos
let saldo = 500;
let temCartao = true;
if (saldo > 100 && temCartao) {
  console.log("Compra aprovada!");
} else {
  console.log("Compra negada!");
}

// Exemplo 6: Uso do operador de negação (!)
let usuarioLogado = false;
if (!usuarioLogado) {
  console.log("Você precisa fazer login.");
}

// Exemplo 7: Uso do typeof para verificar tipos de dados
let valor = "123";
if (typeof valor === "number") {
  console.log("Valor é um número.");
} else {
  console.log("Valor NÃO é um número.");
}

// Exemplo 8: Função com if else e early return
function verificarMaioridade(idade) {
  if (idade < 18) return "Menor de idade.";
  return "Maior de idade.";
}
console.log(verificarMaioridade(20));
