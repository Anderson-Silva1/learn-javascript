# Guia Completo sobre Manipulação de Elementos HTML com JavaScript

## Introdução

A manipulação de elementos HTML com JavaScript é essencial para criar interfaces dinâmicas e interativas. Com JavaScript, podemos adicionar, remover e modificar elementos HTML, alterar estilos e atributos, responder a eventos do usuário e muito mais.

Neste guia, exploraremos as principais técnicas para manipular elementos HTML usando JavaScript, com exemplos práticos e melhores práticas.

---

## Selecionando Elementos HTML

Antes de manipular um elemento, precisamos selecioná-lo no DOM (Document Object Model). Existem vários métodos para isso:

### 1. `getElementById`

Seleciona um elemento pelo seu `id`.

```javascript
let titulo = document.getElementById("titulo");
titulo.innerText = "Novo Título";
```

### 2. `getElementsByClassName`

Seleciona todos os elementos de uma determinada classe (retorna um HTMLCollection).

```javascript
let itens = document.getElementsByClassName("item");
itens[0].style.color = "red";
```

### 3. `getElementsByTagName`

Seleciona todos os elementos de uma determinada tag.

```javascript
let paragrafos = document.getElementsByTagName("p");
paragrafos[1].style.fontWeight = "bold";
```

### 4. `querySelector`

Seleciona o primeiro elemento que corresponde ao seletor CSS especificado.

```javascript
let primeiroItem = document.querySelector(".lista li");
primeiroItem.style.backgroundColor = "yellow";
```

### 5. `querySelectorAll`

Seleciona todos os elementos que correspondem ao seletor CSS especificado (retorna um NodeList).

```javascript
let todosItens = document.querySelectorAll(".lista li");
todosItens.forEach((item) => (item.style.border = "1px solid black"));
```

---

## Modificando Conteúdo de Elementos

Podemos alterar o conteúdo de um elemento usando diferentes propriedades:

### 1. `innerText`

Modifica apenas o texto visível do elemento.

```javascript
document.getElementById("mensagem").innerText = "Texto alterado";
```

### 2. `innerHTML`

Modifica o conteúdo HTML interno de um elemento.

```javascript
document.getElementById("container").innerHTML =
  "<strong>Texto em negrito</strong>";
```

### 3. `textContent`

Similar ao `innerText`, mas preserva espaços e textos ocultos.

```javascript
document.getElementById("info").textContent = "Texto completo";
```

---

## Alterando Atributos

Podemos modificar os atributos de um elemento, como `src`, `href`, `alt`, etc.

### 1. `setAttribute`

Define um novo valor para um atributo do elemento.

```javascript
document.getElementById("imagem").setAttribute("src", "nova-imagem.jpg");
```

### 2. `getAttribute`

Obtém o valor de um atributo.

```javascript
let link = document.getElementById("meuLink").getAttribute("href");
console.log(link);
```

### 3. `removeAttribute`

Remove um atributo do elemento.

```javascript
document.getElementById("botao").removeAttribute("disabled");
```

---

## Manipulando Classes CSS

Podemos adicionar, remover ou alternar classes CSS de um elemento.

### 1. `classList.add`

Adiciona uma classe ao elemento.

```javascript
document.getElementById("caixa").classList.add("destaque");
```

### 2. `classList.remove`

Remove uma classe do elemento.

```javascript
document.getElementById("caixa").classList.remove("destaque");
```

### 3. `classList.toggle`

Alterna uma classe (adiciona se não tiver, remove se já tiver).

```javascript
document.getElementById("menu").classList.toggle("ativo");
```

---

## Criando e Removendo Elementos

Podemos dinamicamente criar e remover elementos na página.

### 1. Criando Elementos

```javascript
let novoParagrafo = document.createElement("p");
novoParagrafo.innerText = "Este é um novo parágrafo";
document.body.appendChild(novoParagrafo);
```

### 2. Removendo Elementos

```javascript
let elemento = document.getElementById("paraRemover");
elemento.remove();
```

### 3. Substituindo Elementos

```javascript
let novoTitulo = document.createElement("h2");
novoTitulo.innerText = "Novo Subtítulo";
let antigoTitulo = document.getElementById("titulo");
antigoTitulo.replaceWith(novoTitulo);
```

---

## Manipulando Eventos

Podemos adicionar eventos para responder às interações do usuário.

### 1. Adicionando Eventos com `addEventListener`

```javascript
document.getElementById("botao").addEventListener("click", () => {
  alert("Botão clicado!");
});
```

### 2. Removendo Eventos

```javascript
function saudacao() {
  console.log("Olá!");
}

document.getElementById("botao").addEventListener("click", saudacao);
document.getElementById("botao").removeEventListener("click", saudacao);
```

---

## Melhorando a Performance na Manipulação do DOM

1. **Evite múltiplas manipulações seguidas** - Prefira alterar classes ao invés de alterar estilos individualmente.
2. **Use fragmentos de documento** para adicionar múltiplos elementos de uma vez.

```javascript
let fragmento = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
  let li = document.createElement("li");
  li.textContent = `Item ${i + 1}`;
  fragmento.appendChild(li);
}
document.getElementById("lista").appendChild(fragmento);
```

3. **Debounce em eventos de entrada** para evitar execuções desnecessárias.

```javascript
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

document.getElementById("campoTexto").addEventListener(
  "input",
  debounce(() => {
    console.log("Digitando...");
  }, 500)
);
```

---

## Conclusão

A manipulação de elementos HTML com JavaScript é essencial para criar experiências dinâmicas e responsivas. Com essas técnicas, é possível modificar conteúdo, estilos, classes, atributos, eventos e estruturar o DOM de forma eficiente.

---

## Referências

- [MDN Web Docs - Manipulating documents](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Manipulating_the_DOM)
- [JavaScript.info - DOM Manipulation](https://javascript.info/dom-nodes)
