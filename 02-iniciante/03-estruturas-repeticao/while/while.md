# Estudo Detalhado sobre o Loop `while` em JavaScript

## Introdução

O loop `while` é uma estrutura de repetição que executa um bloco de código **enquanto** uma determinada condição for verdadeira. Ele é utilizado quando não sabemos previamente quantas vezes o loop deve ser repetido, dependendo de uma condição dinâmica para a finalização.

## Sintaxe do `while`

A estrutura básica do `while` é:

```javascript
while (condição) {
  // Bloco de código a ser executado enquanto a condição for verdadeira
}
```

- **Condição**: Antes de cada iteração, a condição é avaliada. Se for `true`, o bloco de código é executado. Se for `false`, o loop é interrompido.
- **Bloco de Código**: Conjunto de instruções executadas em cada iteração.

## Exemplo Básico

O exemplo abaixo imprime números de 0 a 4 no console:

```javascript
let i = 0;
while (i < 5) {
  console.log("Número:", i);
  i++; // Incremento necessário para evitar loop infinito
}
```

**Explicação:**

1. `let i = 0;` → Inicializa a variável `i` com 0.
2. `while (i < 5) {}` → O loop continua enquanto `i` for menor que 5.
3. `console.log("Número:", i);` → Exibe o valor de `i` no console.
4. `i++` → Incrementa `i` em 1 para evitar loop infinito.
5. Quando `i` se torna 5, a condição `i < 5` se torna `false`, encerrando o loop.

**Saída no console:**

```cmd
Número: 0
Número: 1
Número: 2
Número: 3
Número: 4
```

## Loop `while` com Condições Dinâmicas

Podemos usar `while` para esperar que uma condição externa seja satisfeita:

```javascript
let senhaCorreta = "1234";
let senhaDigitada = "";
while (senhaDigitada !== senhaCorreta) {
  senhaDigitada = prompt("Digite a senha: "); // Simulando entrada do usuário
}
console.log("Acesso concedido!");
```

## Evitando Loops Infinitos

Se a condição nunca se tornar `false`, o loop nunca será interrompido, causando um **loop infinito**.

**Exemplo de loop infinito (NÃO FAÇA ISSO!):**

```javascript
let i = 0;
while (i < 5) {
  console.log("Número:", i);
  // Esquecemos de incrementar i! O loop nunca terminará
}
```

Para evitar loops infinitos:

- Certifique-se de que a condição eventualmente se tornará `false`.
- Sempre tenha uma forma de atualizar a variável de controle dentro do loop.

## Uso do `break` no `while`

Podemos interromper um loop `while` com `break`.

```javascript
let i = 0;
while (i < 10) {
  if (i === 5) {
    break; // Sai do loop quando i = 5
  }
  console.log(i);
  i++;
}
```

**Saída:**

```cmd
0
1
2
3
4
```

## Uso do `continue` no `while`

O `continue` pula a iteração atual e passa para a próxima.

```javascript
let i = 0;
while (i < 10) {
  i++;
  if (i % 2 === 0) {
    continue; // Pula números pares
  }
  console.log(i);
}
```

**Saída:**

```cmd
1
3
5
7
9
```

## Loop `while` Aninhado

Podemos usar loops `while` dentro de outros `while` para iterar sobre estruturas mais complexas.

```javascript
let i = 1;
while (i <= 3) {
  let j = 1;
  while (j <= 3) {
    console.log(`i: ${i}, j: ${j}`);
    j++;
  }
  i++;
}
```

**Saída:**

```cmd
i: 1, j: 1
i: 1, j: 2
i: 1, j: 3
i: 2, j: 1
i: 2, j: 2
i: 2, j: 3
i: 3, j: 1
i: 3, j: 2
i: 3, j: 3
```

## Diferença entre `while` e `do...while`

A principal diferença entre `while` e `do...while` é que **o `do...while` executa o bloco pelo menos uma vez, independentemente da condição**.

**Exemplo:**

```javascript
let i = 10;
do {
  console.log("Executado pelo menos uma vez!", i);
  i++;
} while (i < 5);
```

Saída:

```cmd
Executado pelo menos uma vez! 10
```

Mesmo que `i` já seja maior que 5, o bloco é executado uma vez antes da condição ser verificada.

## Conclusão

O loop `while` é ideal quando não sabemos o número exato de iterações e dependemos de uma condição externa. Ele oferece flexibilidade, mas exige cuidado para evitar loops infinitos.
