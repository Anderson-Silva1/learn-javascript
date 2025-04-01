# Integrando JavaScript ao HTML

## 1. Adicionar JavaScript diretamente no HTML

Você pode escrever código JavaScript dentro da tag < script > diretamente no HTML.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de JS no HTML</title>
  </head>
  <body>
    <h1>Olá, mundo!</h1>

    <script>
      console.log("JavaScript executado dentro do HTML!");
    </script>
  </body>
</html>
```

## 2. Usar JavaScript Externo

Separar o JavaScript do HTML melhora a organização do código.

🔹 HTML (index.html)

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JS Externo</title>
  </head>
  <body>
    <h1 id="mensagem">Clique no botão</h1>
    <button onclick="mudarTexto()">Mudar Texto</button>

    <script src="script.js"></script>
    <!-- Importando o arquivo JS -->
  </body>
</html>
```

🔹 JavaScript (script.js)

```js
(function mudarTexto() {
  document.getElementById("mensagem").innerText =
    "Texto alterado pelo JavaScript!";
})();
```
