// Adição
let saldoConta = 1000;
let deposito = 500;
saldoConta = saldoConta + deposito; // Resultado: 1500
console.log(saldoConta); // 1500

// Subtração
let precoProduto = 200;
let desconto = 50;
let precoFinal = precoProduto - desconto; // Resultado: 150
console.log(precoFinal); // 150

// Multiplicação
let valorUnitario = 15;
let quantidade = 4;
let totalCompra = valorUnitario * quantidade; // Resultado: 60
console.log(totalCompra); // 60

// Divisão
let distancia = 300; // em km
let tempo = 3; // em horas
let velocidadeMedia = distancia / tempo; // Resultado: 100 km/h
console.log(velocidadeMedia); // 100

// Módulo
let totalItens = 27;
let itensPorPacote = 4;
let pacotesCompletos = Math.floor(totalItens / itensPorPacote); // Resultado: 6
let itensRestantes = totalItens % itensPorPacote; // Resultado: 3
console.log(
  `Pacotes completos: ${pacotesCompletos}, Itens restantes: ${itensRestantes}`
);
// "Pacotes completos: 6, Itens restantes: 3"

// Incremento
let visitas = 10;
visitas++; // Resultado: 11
console.log(visitas); // 11

// Decremento
let carrinho = 5; // Itens no carrinho
carrinho--; // Resultado: 4
console.log(carrinho); // 4
