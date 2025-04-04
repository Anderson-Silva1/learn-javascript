# Estudo Completo sobre Axios em JavaScript

## Introdução

O `axios` é uma biblioteca baseada em Promises que facilita a realização de requisições HTTP em JavaScript. Ele é amplamente utilizado em aplicações web para interagir com APIs.

### **Por que usar Axios?**

- Suporte a Promises.
- Funciona no navegador e no Node.js.
- Interceptadores de requisições e respostas.
- Suporte para `timeout` e cancelamento de requisições.
- Conversão automática de resposta JSON.
- Envio e manipulação de cabeçalhos HTTP com facilidade.

---

## Instalação

### **Via npm (para projetos Node.js ou frontend com bundlers como Webpack e Vite)**

```bash
npm install axios
```

### **Via CDN (para uso direto no navegador)**

Adicione esta linha no HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

---

## Uso Básico do Axios

### **Fazendo uma Requisição GET**

```javascript
axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log(response.data); // Exibe os dados retornados
  })
  .catch((error) => {
    console.error("Erro ao buscar dados:", error);
  });
```

### **Requisição POST**

```javascript
axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "Novo Post",
    body: "Conteúdo do post",
    userId: 1,
  })
  .then((response) => {
    console.log("Post criado:", response.data);
  })
  .catch((error) => {
    console.error("Erro ao criar post:", error);
  });
```

### **Requisições PUT e DELETE**

```javascript
axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    title: "Post Atualizado",
  })
  .then((response) => console.log("Atualizado:", response.data));

axios
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then(() => console.log("Post deletado!"));
```

---

## **Parâmetros e Cabeçalhos**

### **Passando Parâmetros na URL**

```javascript
axios
  .get("https://jsonplaceholder.typicode.com/posts", {
    params: { userId: 1 },
  })
  .then((response) => console.log(response.data));
```

### **Configurando Cabeçalhos HTTP**

```javascript
axios
  .get("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      Authorization: "Bearer meu-token",
      "Custom-Header": "valor-personalizado",
    },
  })
  .then((response) => console.log(response.data));
```

---

## **Interceptadores**

Interceptadores permitem modificar requisições ou respostas antes que elas sejam processadas.

### **Interceptando Requisições**

```javascript
axios.interceptors.request.use(
  (config) => {
    console.log("Enviando requisição para:", config.url);
    return config;
  },
  (error) => Promise.reject(error)
);
```

### **Interceptando Respostas**

```javascript
axios.interceptors.response.use(
  (response) => {
    console.log("Resposta recebida:", response.status);
    return response;
  },
  (error) => {
    console.error("Erro na resposta:", error);
    return Promise.reject(error);
  }
);
```

---

## **Cancelando Requisições**

```javascript
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios
  .get("https://jsonplaceholder.typicode.com/posts", {
    cancelToken: source.token,
  })
  .catch((thrown) => {
    if (axios.isCancel(thrown)) {
      console.log("Requisição cancelada", thrown.message);
    }
  });

// Cancelando a requisição
source.cancel("Cancelamento manual.");
```

---

## **Timeout e Tratamento de Erros**

### **Configurando um Timeout**

```javascript
axios
  .get("https://jsonplaceholder.typicode.com/posts", {
    timeout: 2000, // Tempo limite de 2 segundos
  })
  .catch((error) => console.error("Timeout ou erro:", error));
```

### **Tratando Erros Específicos**

```javascript
axios.get("https://jsonplaceholder.typicode.com/posts").catch((error) => {
  if (error.response) {
    console.error("Erro de resposta:", error.response.status);
  } else if (error.request) {
    console.error("Sem resposta do servidor");
  } else {
    console.error("Erro na requisição:", error.message);
  }
});
```

---

## **Criando uma Instância do Axios**

Uma instância permite definir configurações padrões para todas as requisições.

```javascript
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

api.get("/posts").then((response) => console.log(response.data));
```

---

## **Conclusão**

O `axios` é uma ferramenta poderosa para fazer requisições HTTP de maneira simples e eficiente. Ele oferece suporte a promessas, manipula erros de forma robusta, permite configurar interceptadores e pode ser facilmente customizado para atender às necessidades do projeto.

Com esse conhecimento, você está pronto para usar o `axios` em suas aplicações! 🚀
