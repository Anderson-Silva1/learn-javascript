# Manipulando HTML via JavaScript

## 🔹 Selecionando Elementos HTML

Antes de manipular um elemento, precisamos selecioná-lo. Existem várias formas de fazer isso:

### 1️⃣ getElementById()

Seleciona um elemento pelo seu id.

```html
<h1 id="titulo">Texto original</h1>
<button onclick="alterarTexto()">Clique aqui</button>

<script>
  function alterarTexto() {
    document.getElementById("titulo").innerText = "Texto alterado!";
  }
</script>
```

### 2️⃣ getElementsByClassName()

Seleciona todos os elementos com uma determinada classe (retorna uma coleção de elementos que se assemelha a um array, onde podemos selecioná-lo pelo index).

```html
<p class="texto">Parágrafo 1</p>
<p class="texto">Parágrafo 2</p>

<script>
  let paragrafos = document.getElementsByClassName("texto");
  paragrafos[0].style.color = "blue"; // Apenas o primeiro parágrafo ficará azul
</script>
```

### 3️⃣ getElementsByTagName()

Seleciona elementos pelo nome da tag.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<script>
  let itens = document.getElementsByTagName("li");
  itens[1].style.fontWeight = "bold"; // Deixa o segundo item em negrito
</script>
```

### 4️⃣ querySelector() e querySelectorAll()

Esses métodos permitem selecionar elementos com seletores CSS.

```html
<p id="exemplo">Texto original</p>
<p class="teste">Outro parágrafo</p>

<script>
  document.querySelector("#exemplo").style.color = "red"; // Seleciona pelo ID
  document.querySelector(".teste").style.fontSize = "20px"; // Seleciona pela classe
</script>
```

Para selecionar todos os elementos de uma classe:

```js
let elementos = document.querySelectorAll(".teste"); elementos.forEach(elemento
=> { elemento.style.backgroundColor = "yellow"; });
```

## 🔹 Alterando o Conteúdo de um Elemento

Podemos modificar o texto ou HTML interno de um elemento:

### 🔸 innerText

Muda apenas o texto visível dentro do elemento.

```js
document.getElementById("titulo").innerText = "Novo Texto!";
```

### 🔸 innerHTML

Permite alterar o conteúdo HTML, incluindo tags.

```js
document.getElementById("titulo").innerHTML = "<i>Texto em itálico</i>";
```

## 🔹 Modificando Estilos com JavaScript

Podemos alterar a aparência dos elementos dinamicamente.

```js
document.getElementById("titulo").style.color = "blue";
document.getElementById("titulo").style.fontSize = "30px";
document.getElementById("titulo").style.backgroundColor = "yellow";
```

💡 Dica: Para aplicar várias regras de estilo, use classList.

```js
document.getElementById("titulo").classList.add("destaque");
```

```css
.destaque {
  color: white;
  background-color: black;
  padding: 10px;
}
```

## 🔹 Criando e Removendo Elementos

### 1️⃣ Criar um novo elemento (createElement e appendChild)

```js
let novoParagrafo = document.createElement("p");
novoParagrafo.innerText = "Este é um novo parágrafo!";
document.body.appendChild(novoParagrafo);
```

### 2️⃣ Remover um elemento (removeChild)

```js
let elementoParaRemover = document.getElementById("titulo");
document.body.removeChild(elementoParaRemover);
```

## 🔹 Eventos no JavaScript

Os eventos permitem que os usuários interajam com a página.

### 🔸 onclick

```html
<button onclick="mudarCor()">Clique para mudar a cor</button>

<script>
  function mudarCor() {
    document.body.style.backgroundColor = "lightblue";
  }
</script>
```

### 🔸 onmouseover e onmouseout

```html
<p id="mensagem" onmouseover="mudarTexto()" onmouseout="voltarTexto()">
  Passe o mouse aqui!
</p>

<script>
  function mudarTexto() {
    document.getElementById("mensagem").innerText = "Mouse sobre o texto!";
  }

  function voltarTexto() {
    document.getElementById("mensagem").innerText = "Passe o mouse aqui!";
  }
</script>
```

## 🔹 Exemplo Completo

Aqui está um exemplo que reúne várias técnicas:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manipulação de HTML</title>
    <style>
      .destaque {
        color: white;
        background-color: black;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <h1 id="titulo">Texto original</h1>
    <button onclick="alterarTexto()">Alterar Texto</button>
    <button onclick="mudarEstilo()">Mudar Estilo</button>
    <button onclick="criarElemento()">Criar Parágrafo</button>

    <script>
      function alterarTexto() {
        document.getElementById("titulo").innerText = "Texto modificado!";
      }

      function mudarEstilo() {
        document.getElementById("titulo").classList.add("destaque");
      }

      function criarElemento() {
        let novoParagrafo = document.createElement("p");
        novoParagrafo.innerText = "Parágrafo criado dinamicamente!";
        document.body.appendChild(novoParagrafo);
      }
    </script>
  </body>
</html>
```

## 🚀 Conclusão

✔️ Selecionamos elementos HTML com getElementById, querySelector, etc.

✔️ Modificamos texto e HTML interno com innerText e innerHTML.

✔️ Mudamos estilos com style e classList.

✔️ Criamos e removemos elementos dinamicamente.

✔️ Usamos eventos para tornar a página interativa.
