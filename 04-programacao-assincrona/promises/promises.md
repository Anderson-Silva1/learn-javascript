# Guia Completo sobre Promises em JavaScript

## Introdução

No JavaScript moderno, as Promises são um dos principais mecanismos para lidar com código assíncrono. Elas permitem executar operações de forma não bloqueante, garantindo melhor desempenho e legibilidade no código.

Este guia explora em profundidade o conceito de Promises, sua sintaxe, uso prático, melhores práticas e comparação com outras abordagens assíncronas em JavaScript.

---

## O que é uma Promise?

Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Ele pode estar em um dos seguintes estados:

- **Pending (Pendente)**: Estado inicial, antes da operação ser concluída.
- **Fulfilled (Resolvida)**: A operação foi bem-sucedida.
- **Rejected (Rejeitada)**: A operação falhou.

Uma vez que uma Promise muda de estado, ela se torna imutável.

---

## Criando uma Promise

A sintaxe para criar uma Promise é a seguinte:

```javascript
const minhaPromise = new Promise((resolve, reject) => {
  let sucesso = true; // Simula sucesso ou falha

  setTimeout(() => {
    if (sucesso) {
      resolve("Operação bem-sucedida!");
    } else {
      reject("Ocorreu um erro.");
    }
  }, 2000);
});
```

O construtor `Promise` recebe uma função com dois parâmetros:

- `resolve(value)`: Chamado quando a Promise é concluída com sucesso.
- `reject(reason)`: Chamado quando a Promise falha.

---

## Consumindo uma Promise

Para lidar com o resultado de uma Promise, utilizamos os métodos `.then()`, `.catch()` e `.finally()`.

```javascript
minhaPromise
  .then((resultado) => console.log("Sucesso:", resultado))
  .catch((erro) => console.error("Erro:", erro))
  .finally(() => console.log("Operação finalizada"));
```

- **`.then(callback)`**: Executado quando a Promise é resolvida.
- **`.catch(callback)`**: Executado quando a Promise é rejeitada.
- **`.finally(callback)`**: Executado sempre, independentemente do resultado.

---

## Chaining de Promises (Encadeamento)

Podemos encadear várias Promises para executar operações sequenciais:

```javascript
new Promise((resolve) => resolve(10))
  .then((valor) => valor * 2)
  .then((valor) => valor + 5)
  .then((valor) => console.log("Resultado final:", valor))
  .catch((erro) => console.error("Erro:", erro));
```

Isso torna o código mais legível e organizado em relação ao callback hell.

---

## `Promise.all()`, `Promise.race()`, `Promise.allSettled()` e `Promise.any()`

O JavaScript fornece métodos para manipular múltiplas Promises ao mesmo tempo:

### `Promise.all()`

Executa todas as Promises simultaneamente e retorna um array com os resultados se todas forem resolvidas. Se uma falhar, a Promise geral é rejeitada.

```javascript
Promise.all([
  fetch("https://api.exemplo.com/dados1"),
  fetch("https://api.exemplo.com/dados2"),
])
  .then((respostas) => console.log("Todas resolvidas:", respostas))
  .catch((erro) => console.error("Erro em alguma promise:", erro));
```

### `Promise.race()`

Retorna a primeira Promise a ser resolvida ou rejeitada.

```javascript
Promise.race([
  fetch("https://api.exemplo.com/dados1"),
  fetch("https://api.exemplo.com/dados2"),
]).then((resultado) => console.log("Primeira resolvida:", resultado));
```

### `Promise.allSettled()`

Retorna um array com o status de todas as Promises, independentemente do resultado.

```javascript
Promise.allSettled([
  Promise.resolve("Sucesso"),
  Promise.reject("Falha"),
  Promise.resolve("Outro Sucesso"),
]).then((resultados) => console.log(resultados));
```

### `Promise.any()`

Retorna a primeira Promise resolvida, ignorando as rejeitadas.

```javascript
Promise.any([
  Promise.reject("Erro 1"),
  Promise.resolve("Sucesso"),
  Promise.reject("Erro 2"),
]).then((resultado) => console.log("Primeira bem-sucedida:", resultado));
```

---

## Uso de `async/await`

`async/await` é uma alternativa mais legível ao `.then()`. Ele permite escrever código assíncrono de forma similar ao sincrôno.

```javascript
async function buscarDados() {
  try {
    let resposta = await fetch("https://api.exemplo.com/dados");
    let dados = await resposta.json();
    console.log("Dados recebidos:", dados);
  } catch (erro) {
    console.error("Erro na requisição:", erro);
  }
}

buscarDados();
```

### Diferenças entre Promises e `async/await`

| Característica      | Promises (`.then()`)                       | `async/await`   |
| ------------------- | ------------------------------------------ | --------------- |
| Legibilidade        | Pode ficar confuso em encadeamentos longos | Mais intuitivo  |
| Tratamento de Erros | `.catch()`                                 | `try...catch`   |
| Controle de Fluxo   | Encadeado                                  | Parece sincrôno |

---

## Melhores Práticas

1. **Sempre trate erros com `.catch()` ou `try...catch`**.
2. **Evite o "Callback Hell"** usando encadeamento adequado.
3. **Prefira `async/await` para maior legibilidade**.
4. **Use `Promise.all()` para operações paralelas quando apropriado**.
5. **Evite `Promise.race()` quando precisar garantir que todas sejam resolvidas**.

---

## Conclusão

Promises são essenciais para manipular código assíncrono em JavaScript. Compreender sua sintaxe, uso e boas práticas melhora a qualidade do código e torna aplicações mais eficientes.

---

## Referências

- [MDN Web Docs - Promises](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript.info - Promises](https://javascript.info/promise-basics)
