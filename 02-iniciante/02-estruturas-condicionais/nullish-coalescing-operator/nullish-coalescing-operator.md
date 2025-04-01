# Nullish Coalescing Operator ou Operador de Coalescência Nula (??) em JavaScript

O operador de coalescência nula (??) é um recurso introduzido no JavaScript com o ECMAScript 2020 (ES11). Ele é usado para fornecer um valor padrão somente quando um valor é null ou undefined, diferentemente do operador lógico ||, que considera também valores falsy como 0, "" e false.

## Sintaxe

```js
let resultado = valor1 ?? valor2;
```

- Se valor1 for diferente de null e undefined, ele será atribuído a resultado.
- Se valor1 for null ou undefined, valor2 será atribuído.

## Diferença entre ?? e ||

| Expressão             | ?? (Nullish Coalescing) |          |     | (OR) |
| --------------------- | ----------------------- | -------- | --- | ---- |
| null ?? "padrão"      | "padrão"                | "padrão" |
| undefined ?? "padrão" | "padrão"                | "padrão" |
| "" ?? "padrão"        | ""                      | "padrão" |
| 0 ?? "padrão"         | 0                       | "padrão" |
| false ?? "padrão"     | false                   | "padrão" |

## Exemplos Práticos

### 1. Usando ?? para definir valores padrão

```js
let nomeUsuario = null;
let nomePadrao = "Visitante";

let nomeExibido = nomeUsuario ?? nomePadrao;
console.log(nomeExibido); // "Visitante"
```

### 2. Evitando problemas com valores falsy

```js
let idade = 0;
let idadePadrao = 18;

console.log(idade ?? idadePadrao); // 0
console.log(idade || idadePadrao); // 18
```

🔹 Aqui, ?? mantém 0, pois 0 não é null ou undefined.

🔹 || substitui 0 pelo valor padrão porque 0 é um valor falsy.

### 3. Uso em funções

```js
function obterMensagem(mensagem) {
  return mensagem ?? "Sem mensagem disponível.";
}

console.log(obterMensagem("Olá!")); // "Olá!"
console.log(obterMensagem(null)); // "Sem mensagem disponível."
console.log(obterMensagem(undefined)); // "Sem mensagem disponível."
```

### 4. Uso com objetos e propriedades inexistentes

```js
const usuario = { nome: "Anderson", idade: null };

console.log(usuario.nome ?? "Desconhecido"); // "Anderson"
console.log(usuario.idade ?? 18); // 18
console.log(usuario.email ?? "Sem e-mail"); // "Sem e-mail"
```

### 5. Uso com encadeamento opcional (?.)

```js
const pessoa = {
  nome: "Lucas",
  endereco: {
    cidade: "São Paulo",
  },
};

console.log(pessoa.endereco?.rua ?? "Endereço não informado"); // "Endereço não informado"
```

🔹 Se rua não existir, ele retorna "Endereço não informado", evitando erro.

## Erro com ?? e Operadores Lógicos (&&, ||)

Se tentarmos usar ?? junto com && ou || sem parênteses, o JavaScript gerará erro.

### 🚫 Código inválido:

```js
let resultado = valor1 || valor2 ?? "padrão"; // Erro de sintaxe!
```

### ✅ Código correto:

```js
let resultado = (valor1 || valor2) ?? "padrão";
```

🔹 Sempre use parênteses quando misturar operadores para evitar erros.

## Conclusão

✅ O operador ?? é útil para definir valores padrão sem afetar valores falsy como 0, "" e false.

✅ Ele substitui null e undefined, diferentemente do ||, que substitui todos os valores falsy.

✅ Pode ser combinado com encadeamento opcional (?.) para evitar erros em objetos aninhados.
