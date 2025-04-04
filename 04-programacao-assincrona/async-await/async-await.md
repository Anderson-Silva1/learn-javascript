# Guia Completo sobre Async/Await em JavaScript

## Introdução

O JavaScript moderno introduziu o `async/await` para facilitar o trabalho com código assíncrono. Antes dessa introdução, a manipulação de operações assíncronas era feita principalmente com **callbacks** e **Promises**. O `async/await` melhora a legibilidade do código e torna sua estrutura mais parecida com código síncrono.

Neste guia, exploraremos o conceito de `async/await`, sua sintaxe, usos práticos, erros comuns e melhores práticas.

---

## O que é `async/await`?

`async/await` é uma extensão do conceito de Promises que permite escrever código assíncrono de maneira mais intuitiva. Ele funciona sobre Promises, mas sem precisar usar `.then()` e `.catch()` diretamente, tornando o código mais limpo e fácil de entender.

**Principais características:**

- `async` define uma função assíncrona que sempre retorna uma Promise.
- `await` pausa a execução da função assíncrona até que a Promise seja resolvida.

---

## Criando uma Função Assíncrona

Uma função declarada com `async` retorna automaticamente uma Promise.

```javascript
async function minhaFuncao() {
  return "Olá, mundo!";
}

minhaFuncao().then(console.log); // Saída: "Olá, mundo!"
```

Aqui, `minhaFuncao` retorna implicitamente uma Promise que resolve com o valor "Olá, mundo!".

---

## Usando `await`

O `await` deve ser usado dentro de funções `async`. Ele pausa a execução da função até que a Promise seja resolvida.

```javascript
async function obterDados() {
  let resposta = await fetch("https://api.exemplo.com/dados");
  let dados = await resposta.json();
  console.log(dados);
}

obterDados();
```

Aqui:

- `fetch()` retorna uma Promise que representa a resposta da requisição.
- `await` pausa a execução até que a resposta seja recebida.
- `resposta.json()` também retorna uma Promise, então `await` é usado novamente para extrair os dados.

---

## Tratamento de Erros com `try/catch`

É essencial tratar erros ao usar `async/await`. Para isso, utilizamos `try/catch`:

```javascript
async function obterDadosComErro() {
  try {
    let resposta = await fetch("https://api.invalido.com/dados");
    let dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}

obterDadosComErro();
```

Se a requisição falhar, o erro será capturado no bloco `catch`, evitando que a aplicação quebre.

---

## Executando Múltiplas Promises com `Promise.all`

Quando temos várias operações assíncronas independentes, podemos executá-las em paralelo usando `Promise.all()` para melhorar o desempenho.

```javascript
async function obterMultiplosDados() {
  try {
    let [dados1, dados2] = await Promise.all([
      fetch("https://api.exemplo.com/dados1").then((res) => res.json()),
      fetch("https://api.exemplo.com/dados2").then((res) => res.json()),
    ]);

    console.log("Dados 1:", dados1);
    console.log("Dados 2:", dados2);
  } catch (erro) {
    console.error("Erro ao buscar os dados:", erro);
  }
}

obterMultiplosDados();
```

Isso melhora a eficiência, pois ambas as requisições acontecem simultaneamente, ao invés de esperar uma para começar a outra.

---

## Diferenças entre `async/await` e Promises com `.then()`

| Característica      | `async/await`                              | `.then()`                                        |
| ------------------- | ------------------------------------------ | ------------------------------------------------ |
| Legibilidade        | Código mais limpo e fácil de entender      | Pode ficar confuso em encadeamentos longos       |
| Tratamento de Erros | `try/catch` torna o código mais organizado | Uso de `.catch()` pode espalhar o código de erro |
| Controle de Fluxo   | Parece código síncrono                     | Encadeamento pode ser mais verboso               |

---

## Erros Comuns ao Usar `async/await`

### 1. Usar `await` Fora de uma Função `async`

Errado:

```javascript
let dados = await fetch("https://api.exemplo.com/dados"); // Erro!
```

Certo:

```javascript
async function buscarDados() {
  let dados = await fetch("https://api.exemplo.com/dados");
}
```

### 2. Não Tratar Erros

Errado:

```javascript
async function buscarDados() {
  let resposta = await fetch("https://api.invalido.com/dados"); // Se falhar, quebra tudo
  let dados = await resposta.json();
}
```

Certo:

```javascript
async function buscarDados() {
  try {
    let resposta = await fetch("https://api.invalido.com/dados");
    let dados = await resposta.json();
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}
```

### 3. Bloquear o Event Loop com `await` Dentro de Loops

Errado (executa em sequência, mais lento):

```javascript
async function processarItens(itens) {
  for (let item of itens) {
    let dados = await fetch(`https://api.exemplo.com/${item}`);
    console.log(await dados.json());
  }
}
```

Certo (executa em paralelo, mais rápido):

```javascript
async function processarItens(itens) {
  let promessas = itens.map((item) =>
    fetch(`https://api.exemplo.com/${item}`).then((res) => res.json())
  );
  let resultados = await Promise.all(promessas);
  console.log(resultados);
}
```

---

## Melhores Práticas

1. **Sempre use `try/catch` para capturar erros em funções `async`.**
2. **Use `Promise.all()` para executar tarefas assíncronas em paralelo sempre que possível.**
3. **Evite usar `await` dentro de loops `for` ou `forEach`; prefira `map()` com `Promise.all()`.**
4. **Evite misturar `async/await` e `.then()` desnecessariamente.**

---

## Conclusão

O `async/await` trouxe uma grande melhoria na escrita de código assíncrono em JavaScript, tornando-o mais legível e intuitivo. No entanto, é fundamental entender seu funcionamento para evitar armadilhas de desempenho e garantir um código eficiente.

---

## Referências

- [MDN Web Docs - async/await](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function)
- [JavaScript.info - async/await](https://javascript.info/async-await)
