# Guia Completo sobre Eventos HTML em JavaScript

## Introdução

Os eventos em JavaScript são a base da interatividade em páginas web. Eles permitem que os desenvolvedores capturem e respondam a interações do usuário, como cliques, digitações e movimentos do mouse.

Este guia aborda os principais eventos HTML em JavaScript, como capturá-los, manipulá-los e boas práticas para utilizá-los de forma eficiente.

---

## O Que São Eventos em JavaScript?

Eventos são ações que ocorrem em um elemento da página, como um clique em um botão ou uma tecla pressionada. JavaScript permite que capturemos esses eventos e executemos funções específicas quando eles ocorrem.

### Exemplos de Eventos Comuns

- `click` - Quando um elemento é clicado
- `mouseover` - Quando o mouse passa sobre um elemento
- `keydown` - Quando uma tecla é pressionada
- `change` - Quando o valor de um input muda
- `submit` - Quando um formulário é enviado

---

## Como Adicionar Eventos a Elementos HTML

Existem diferentes formas de adicionar eventos em JavaScript:

### 1. Atributo HTML `onEvent`

```html
<button onclick="alert('Botão clicado!')">Clique Aqui</button>
```

**Desvantagem:** Não é recomendado porque mistura HTML com JavaScript e limita a flexibilidade.

### 2. Propriedade `onevent` no JavaScript

```javascript
const botao = document.getElementById("meuBotao");
botao.onclick = function () {
  alert("Botão clicado!");
};
```

**Limitação:** Apenas uma função pode ser atribuída ao evento.

### 3. `addEventListener` (Melhor Prática)

```javascript
document.getElementById("meuBotao").addEventListener("click", function () {
  alert("Evento adicionado corretamente!");
});
```

**Vantagens:** Permite adicionar múltiplos eventos e facilita a remoção posterior.

---

## Principais Eventos em JavaScript

### 1. Eventos de Mouse

- `click`: Quando um elemento é clicado
- `dblclick`: Quando um elemento é clicado duas vezes
- `mouseover`: Quando o mouse passa sobre um elemento
- `mouseout`: Quando o mouse sai de um elemento

**Exemplo:**

```javascript
document.getElementById("area").addEventListener("mouseover", function () {
  this.style.backgroundColor = "yellow";
});
```

### 2. Eventos de Teclado

- `keydown`: Quando uma tecla é pressionada
- `keyup`: Quando uma tecla é solta
- `keypress`: Quando uma tecla é pressionada e solta (obsoleto)

**Exemplo:**

```javascript
document.addEventListener("keydown", function (event) {
  console.log("Tecla pressionada: " + event.key);
});
```

### 3. Eventos de Formulário

- `change`: Quando o valor de um input muda
- `focus`: Quando um campo recebe foco
- `blur`: Quando um campo perde foco
- `submit`: Quando um formulário é enviado

**Exemplo:**

```javascript
document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita envio
    alert("Formulário enviado!");
  });
```

### 4. Eventos de Carregamento

- `DOMContentLoaded`: Quando o HTML é totalmente carregado
- `load`: Quando toda a página (incluindo imagens) está carregada

**Exemplo:**

```javascript
document.addEventListener("DOMContentLoaded", function () {
  console.log("O documento está pronto!");
});
```

---

## Delegação de Eventos

É uma técnica que permite adicionar eventos a elementos dinâmicos ou futuros.

**Exemplo:** Capturar cliques em uma lista dinamicamente.

```javascript
document.getElementById("lista").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    alert("Item clicado: " + event.target.innerText);
  }
});
```

---

## Removendo Eventos

Podemos remover eventos adicionados com `addEventListener` usando `removeEventListener`.

**Exemplo:**

```javascript
function mostrarAlerta() {
  alert("Evento acionado!");
}

document.getElementById("meuBotao").addEventListener("click", mostrarAlerta);
document.getElementById("meuBotao").removeEventListener("click", mostrarAlerta);
```

---

## Melhorando a Performance dos Eventos

1. **Evite eventos inline** (Ex: `onclick` no HTML)
2. **Use delegação de eventos** para elementos dinâmicos
3. **Remova eventos quando não forem mais necessários**
4. **Utilize `passive: true` para eventos de rolagem**

Exemplo:

```javascript
document.addEventListener(
  "scroll",
  function () {
    console.log("Rolando...");
  },
  { passive: true }
);
```

---

## Conclusão

Os eventos em JavaScript são fundamentais para tornar as páginas interativas. Utilizar `addEventListener`, delegação de eventos e boas práticas garante um código mais eficiente e organizado.

---

## Referências

- [MDN Web Docs - Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [JavaScript.info - Event Handling](https://javascript.info/introduction-browser-events)
