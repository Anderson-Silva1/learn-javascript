# O que é switch?

O switch é uma estrutura condicional em JavaScript que permite a execução de diferentes blocos de código com base no valor de uma expressão. Ele é uma alternativa ao uso de múltiplas instruções if...else quando se precisa comparar uma variável com diferentes valores.

## Sintaxe do switch

A estrutura básica do switch é a seguinte:

```js
switch (expressao) {
  case valor1:
    // Código a ser executado se expressao === valor1
    break;
  case valor2:
    // Código a ser executado se expressao === valor2
    break;
  default:
  // Código a ser executado se nenhum dos casos for satisfeito
}
```

- expressao é avaliada uma vez.

- O valor da expressao é comparado (===) com cada case.

- Se um case for correspondente, o código dentro dele é executado.

- O break evita que os outros case sejam avaliados (se não for colocado, a execução continua nos próximos case).

- O default é opcional e executa caso nenhum case seja atendido.

### Exemplo básico

```js
const dia = 3;

switch (dia) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  default:
    console.log("Fim de semana");
}
```

Saída:

```cmd
Quarta-feira
```

## Omissão do break

Se não usarmos break, o JavaScript executa todos os case subsequentes até encontrar um break ou o fim do switch.

### Exemplo sem break

```js
const cor = "azul";

switch (cor) {
  case "vermelho":
    console.log("A cor é vermelho");
  case "azul":
    console.log("A cor é azul");
  case "verde":
    console.log("A cor é verde");
  default:
    console.log("Cor não reconhecida");
}
```

Saída

```cmd
A cor é azul
A cor é verde
Cor não reconhecida
```

## Agrupando case

Podemos agrupar múltiplos case para que compartilhem o mesmo bloco de código.

```js
switch (fruta) {
  case "banana":
  case "maçã":
  case "pera":
    console.log("Fruta disponível");
    break;
  case "abacaxi":
  case "manga":
    console.log("Fruta tropical");
    break;
  default:
    console.log("Fruta não encontrada");
}
```

🔹 Saída:

```cmd
Fruta disponível
```

## Uso com expressões

O case pode conter expressões, não apenas valores diretos.

```js
const numero = 10;

switch (true) {
  case numero < 0:
    console.log("Número negativo");
    break;
  case numero === 0:
    console.log("Número zero");
    break;
  case numero > 0:
    console.log("Número positivo");
    break;
  default:
    console.log("Valor inválido");
}
```

🔹 Saída:

```cmd
Número positivo
```

## Comparação estrita (===)

O switch usa comparação estrita (===), ou seja, o tipo de dado precisa ser o mesmo.

```js
const valor = "1";

switch (valor) {
  case 1:
    console.log("Número 1");
    break;
  case "1":
    console.log("String 1");
    break;
  default:
    console.log("Outro valor");
}
```

🔹 Saída:

```cmd
String 1
```

porque "1" não é igual a 1 em comparação estrita.

## Quando usar switch ou if...else?

| Situação                          | Melhor opção |
| :-------------------------------- | :----------: |
| Comparar um valor específico      |   `switch`   |
| Comparação de intervalos (>, <)   | `if...else`  |
| Comparação booleana (true, false) | `if...else`  |
| Verificação com diferentes tipos  | `if...else`  |

### Exemplo onde if...else é mais adequado

```js
const idade = 20;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

Aqui, um switch não seria ideal, pois precisaríamos listar todas as idades possíveis.

## Conclusão

✅ O switch é útil quando temos um valor fixo e queremos comparar com várias opções.

✅ Ele melhora a legibilidade do código em certos cenários.

✅ É importante usar break para evitar execução desnecessária de outros case.

✅ Para intervalos e comparações complexas, if...else é uma opção melhor.
