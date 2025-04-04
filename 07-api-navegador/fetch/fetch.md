# Guia Completo sobre Fetch API em JavaScript

## Introdução

A Fetch API é uma interface moderna do JavaScript para realizar requisições HTTP assíncronas. Ela permite buscar recursos em servidores de forma eficiente e substituir o antigo `XMLHttpRequest` com uma sintaxe mais limpa e intuitiva.

Neste guia, vamos explorar o funcionamento da Fetch API, seus recursos, manipulação de respostas e erros, envio de dados e exemplos práticos.

---

## Fazendo uma Requisição Simples

A forma mais básica de usar a Fetch API é chamando `fetch(url)`, que retorna uma `Promise` resolvendo um objeto `Response`.

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Erro na requisição:", error));
```

### Explicação

- `fetch(url)`: Faz a requisição HTTP.
- `.then(response => response.json())`: Converte a resposta para JSON.
- `.then(data => console.log(data))`: Manipula os dados recebidos.
- `.catch(error => console.error(error))`: Captura erros na requisição.

---

## Parâmetros da Fetch API

A Fetch API permite configurar a requisição usando um objeto de opções.

```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Novo Post",
    body: "Conteúdo do post",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Erro:", error));
```

### Opções disponíveis

- `method`: Define o método HTTP (`GET`, `POST`, `PUT`, `DELETE`, etc.).
- `headers`: Define os cabeçalhos da requisição.
- `body`: Corpo da requisição para métodos como `POST` e `PUT`.

---

## Tratamento de Erros

A Fetch API **não rejeita a promise automaticamente para respostas HTTP com status de erro (404, 500, etc.)**. Portanto, é necessário verificar manualmente:

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1000")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Erro capturado:", error));
```

---

## Trabalhando com Async/Await

O `fetch` também pode ser usado com `async/await` para um código mais limpo e legível:

```javascript
async function buscarDados() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erro capturado:", error);
  }
}

buscarDados();
```

---

## Enviando Dados com Fetch API

Para enviar dados via `POST`, `PUT` ou `DELETE`, usamos o `body` no formato JSON:

```javascript
async function criarPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Novo Post",
        body: "Conteúdo do post",
        userId: 1,
      }),
    });
    let data = await response.json();
    console.log("Post criado:", data);
  } catch (error) {
    console.error("Erro:", error);
  }
}

criarPost();
```

---

## Cancelando Requisiões com `AbortController`

Podemos cancelar uma requisição usando `AbortController`:

```javascript
const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/posts", { signal })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Erro capturado:", error));

// Cancelando a requisição após 2 segundos
setTimeout(() => controller.abort(), 2000);
```

---

## Fazendo Múltiplas Requisições

Podemos fazer requisições paralelas com `Promise.all()`:

```javascript
async function buscarDados() {
  try {
    let [posts, users] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
    ]);
    console.log("Posts:", posts);
    console.log("Usuários:", users);
  } catch (error) {
    console.error("Erro capturado:", error);
  }
}

buscarDados();
```

---

## Conclusão

A Fetch API é uma ferramenta poderosa para interagir com APIs e servidores remotos. Com ela, podemos realizar requisições assíncronas de forma simples e eficiente, usando `Promises` ou `async/await`. Aprender a manipulá-la corretamente é essencial para quem trabalha com desenvolvimento web moderno.

---

## Referências

- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript.info - Fetch](https://javascript.info/fetch)
