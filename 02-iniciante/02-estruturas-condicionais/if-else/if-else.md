# if else no JavaScript

O if else é uma das estruturas condicionais mais importantes e fundamentais do JavaScript. Ele permite que o código tome decisões com base em condições lógicas, executando diferentes blocos de código conforme necessário.

## Sintaxe do if else

A estrutura básica do if else segue esta sintaxe:

```js
if (condição) {
  // Código executado se a condição for verdadeira (true)
} else {
  // Código executado se a condição for falsa (false)
}
```

✅ Regras básicas:

- A condição dentro dos parênteses () deve ser uma expressão que retorna true ou false.
- Se a condição for verdadeira (true), o bloco dentro do if {} será executado.
- Se a condição for falsa (false), o código dentro do else {} será executado.

Exemplo simples:

```js
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

Saída:

```cmd
Você é maior de idade.
```

## Uso do else if

Se tivermos mais de duas possibilidades, usamos o else if para verificar várias condições antes do else.

### Sintaxe do if else if else

```js
if (condição1) {
  // Executa se condição1 for verdadeira
} else if (condição2) {
  // Executa se condição1 for falsa e condição2 for verdadeira
} else {
  // Executa se nenhuma das condições anteriores for verdadeira
}
```

Exemplo prático:

```js
let temperatura = 30;

if (temperatura > 35) {
  console.log("Está muito quente!");
} else if (temperatura >= 25) {
  console.log("Está um clima agradável.");
} else {
  console.log("Está frio.");
}
```

Saída:

```cmd
Está um clima agradável.
```

### 📌 O que acontece aqui?

- Se temperatura > 35, imprime "Está muito quente!".
- Se não for maior que 35, mas for maior ou igual a 25, imprime "Está um clima agradável.".
- Se nenhuma das condições for verdadeira, o else executa "Está frio.".

## 📌 Valores considerados true e false em JavaScript

No JavaScript, certos valores são considerados falsy (falsos) e outros são truthy (verdadeiros).

### Valores falsy (equivalem a false em um if)

- false
- 0 (zero)
- "" (string vazia)
- null
- undefined
- NaN (Not-a-Number)

### Valores truthy (equivalem a true em um if)

Qualquer número diferente de 0

- "string" (qualquer string não vazia)
- [] (arrays vazios são considerados true)
- {} (objetos vazios são considerados true)
- function() {} (funções sempre são true)

Exemplo:

```js
let nome = "";

if (nome) {
  console.log("O nome foi preenchido.");
} else {
  console.log("Nome não informado.");
}
```

Saída:

```nginx
Nome não informado.
```

📌 Como "" (string vazia) é um valor falsy, o else é executado.

## 🏗 Aninhamento de if else

Podemos ter if else dentro de outro if else, criando condições mais complexas.

Exemplo prático:

```js
let idade = 20;
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
```

Saída:

```nginx
Você pode dirigir.
```

📌 Aqui, temos um if dentro de outro if, verificando a idade primeiro e, depois, se a pessoa tem CNH.

## 🏗 Uso do if else com Operadores Lógicos

Podemos combinar operadores lógicos (&&, ||, !) para criar condições mais elaboradas.

- **Exemplo com && (E lógico)**: Ambas as condições devem ser verdadeiras para o código ser executado.

```js
let saldo = 500;
let temCartao = true;

if (saldo > 100 && temCartao) {
  console.log("Compra aprovada!");
} else {
  console.log("Compra negada!");
}
```

📌 Aqui, a compra só será aprovada se saldo > 100 e temCartao for true.

- **Exemplo com || (OU lógico)**: Basta uma das condições ser verdadeira para o código ser executado.

```js
let temIngresso = false;
let nomeNaLista = true;

if (temIngresso || nomeNaLista) {
  console.log("Entrada permitida!");
} else {
  console.log("Entrada negada!");
}
```

📌 Aqui, se pelo menos um for true, a entrada é permitida.

- **Exemplo com ! (Negação)**: O operador ! inverte o valor lógico de uma expressão.

```js
let usuarioLogado = false;

if (!usuarioLogado) {
  console.log("Você precisa fazer login.");
}
```

📌 Como usuarioLogado é false, !usuarioLogado vira true, e a mensagem é exibida.

## 🏗 Uso do if else com typeof

Podemos validar o tipo de uma variável antes de tomar decisões.

Exemplo:

```js
let valor = "123";

if (typeof valor === "number") {
  console.log("Valor é um número.");
} else {
  console.log("Valor NÃO é um número.");
}
```

📌 Aqui, typeof valor retorna "string", então a saída será "Valor NÃO é um número.".

## 🔥 Boas Práticas no Uso do if else

### ✔ Prefira else if ao invés de vários if isolados

❌ Ruim:

```js
if (idade >= 18) {
  console.log("Maior de idade.");
}
if (idade < 18) {
  console.log("Menor de idade.");
}
```

✅ Melhor:

```js
if (idade >= 18) {
  console.log("Maior de idade.");
} else {
  console.log("Menor de idade.");
}
```

### ✔ Use early return em funções

Se a função pode encerrar cedo, use return ao invés de else.

```js
function verificarMaioridade(idade) {
  if (idade < 18) return "Menor de idade.";
  return "Maior de idade.";
}
console.log(verificarMaioridade(20)); // "Maior de idade."
```

### ✔ Evite if else complexos e aninhados

Em casos complexos, prefira switch ou ternário.

## 🎯 Conclusão

- if else é a estrutura condicional mais usada no JavaScript.

- Podemos combinar else if para múltiplas condições.

- Operadores lógicos (&&, ||, !) tornam as condições mais poderosas.

- Evite aninhamentos desnecessários para manter o código legível.
