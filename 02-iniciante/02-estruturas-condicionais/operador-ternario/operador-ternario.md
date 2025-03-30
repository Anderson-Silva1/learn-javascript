# Estudo Completo Sobre o Operador Ternário `(? :)` em JavaScript

O operador ternário `(? :)` é uma forma concisa de escrever expressões condicionais. Ele é uma alternativa simplificada ao uso da estrutura `if...else`, tornando o código mais compacto e legível.

## Sintaxe do Operador Ternário

```js
condição ? expressão_se_verdadeira : expressão_se_falsa;
```

- **condição** → A expressão que será avaliada como true ou false.
- **expressão_se_verdadeira** → Executada se a `condição` for true.
- **expressão_se_falsa** → Executada se a `condição` for false.

## Exemplo Básico

```js
const idade = 18;
const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(mensagem); // "Maior de idade"
```

Aqui, idade >= 18 é a condição. Se for true, retorna "Maior de idade", caso contrário, retorna "Menor de idade".

## Comparação com if...else

### Código com if...else:

```js
const idade = 18;
let mensagem;

if (idade >= 18) {
  mensagem = "Maior de idade";
} else {
  mensagem = "Menor de idade";
}

console.log(mensagem); // "Maior de idade"
```

A versão com operador ternário economiza linhas e torna o código mais legível.

## Aninhamento do Operador Ternário

É possível aninhar operadores ternários para múltiplas condições:

```js
const nota = 85;
const resultado =
  nota >= 90 ? "A" : nota >= 80 ? "B" : nota >= 70 ? "C" : "Reprovado";

console.log(resultado); // "B"
```

🟢 Dica: Embora possível, aninhar muitos operadores ternários pode prejudicar a legibilidade do código.

## Uso com Funções

O operador ternário pode ser usado para retornar valores diretamente de uma função:

```js
function verificarParOuImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}

console.log(verificarParOuImpar(7)); // "Ímpar"
console.log(verificarParOuImpar(10)); // "Par"
```

## Uso com Valores Booleanos

Como o operador ternário retorna um valor, ele pode ser útil em expressões booleanas:

```js
const autenticado = false;
const mensagem = autenticado ? "Bem-vindo de volta!" : "Faça login primeiro.";

console.log(mensagem); // "Faça login primeiro."
```

## 📌 Atribuição Condicional

O operador ternário pode ser usado para atribuir valores com base em uma condição:

```js
let desconto = idade >= 60 ? 0.1 : 0; // Desconto para idosos

console.log(desconto); // 0
```

## Uso em JSX (React)

No React, o operador ternário é muito útil para renderização condicional:

```jsx
const isLoggedIn = true;

return <div>{isLoggedIn ? <h1>Bem-vindo!</h1> : <h1>Faça login</h1>}</div>;
```

## Operador Ternário vs. && (Curto-circuito)

Se você quiser executar algo apenas se uma condição for true, pode usar o operador lógico &&:

```js
const logado = true;
logado && console.log("Usuário logado"); // "Usuário logado"
```

**Diferença**: O operador && não possui um "else". Já o operador ternário pode lidar com ambos os casos.

## Conclusão

✔ O operador ternário é útil para simplificar condicionais curtas.

✔ Ele pode tornar o código mais legível, mas deve ser usado com moderação.

✔ Para expressões muito complexas, prefira if...else para melhor legibilidade.

### 👉 Resumo:

✅ Quando usar? → Condições simples.

⚠ Evite em? → Condições muito complexas que dificultem a leitura.
