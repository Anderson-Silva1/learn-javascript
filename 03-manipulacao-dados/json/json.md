# Manipulação de JSON em JavaScript

## Introdução

O JSON (JavaScript Object Notation) é um formato leve de troca de dados, amplamente utilizado para transferir informações entre sistemas. Ele é baseado em texto e possui uma estrutura de chaves e valores, semelhante aos objetos JavaScript.

JavaScript possui suporte nativo para JSON, oferecendo métodos práticos para manipulação desse formato. Neste guia, abordaremos tudo o que você precisa saber sobre JSON em JavaScript, incluindo conversão, manipulação e boas práticas.

---

## Estrutura do JSON

O JSON é composto por pares **chave-valor** e pode conter diferentes tipos de dados:

```json
{
  "nome": "João",
  "idade": 30,
  "email": "joao@email.com",
  "ativo": true,
  "enderecos": [
    { "rua": "Rua A", "cidade": "São Paulo" },
    { "rua": "Rua B", "cidade": "Rio de Janeiro" }
  ]
}
```

Tipos de dados suportados:

- **String** (ex: "João")
- **Number** (ex: 30)
- **Boolean** (ex: true, false)
- **Array** (ex: [1, 2, 3])
- **Objeto** (ex: { "chave": "valor" })
- **Null** (ex: null)

---

## Convertendo JSON para Objeto JavaScript

Para converter uma string JSON em um objeto JavaScript, usamos `JSON.parse()`:

```javascript
const jsonString = '{ "nome": "Ana", "idade": 25 }';
const objeto = JSON.parse(jsonString);

console.log(objeto.nome); // Saída: Ana
console.log(objeto.idade); // Saída: 25
```

Se o JSON for mal formatado, `JSON.parse()` lança um erro, por isso, é recomendado usá-lo dentro de um `try/catch`.

```javascript
try {
  const dados = JSON.parse("invalid-json");
} catch (erro) {
  console.error("Erro ao parsear JSON", erro);
}
```

---

## Convertendo Objeto JavaScript para JSON

Para converter um objeto JavaScript em JSON, usamos `JSON.stringify()`:

```javascript
const objeto = { nome: "Carlos", idade: 40 };
const jsonString = JSON.stringify(objeto);

console.log(jsonString);
// Saída: '{"nome":"Carlos","idade":40}'
```

Podemos formatar a string JSON para torná-la mais legível usando `JSON.stringify(obj, null, espacamento)`, onde `espacamento` é o número de espaços para identação.

```javascript
console.log(JSON.stringify(objeto, null, 2));
```

Saída formatada:

```json
{
  "nome": "Carlos",
  "idade": 40
}
```

---

## Acessando e Modificando Dados JSON

Após converter JSON para um objeto JavaScript, podemos acessar e modificar seus valores normalmente:

```javascript
const dados = JSON.parse('{ "nome": "Maria", "idade": 28 }');

dados.email = "maria@email.com";
console.log(dados);
```

Saída:

```json
{
  "nome": "Maria",
  "idade": 28,
  "email": "maria@email.com"
}
```

---

## Trabalhando com Arrays de Objetos JSON

JSON frequentemente contém arrays de objetos, como em uma API que retorna uma lista de usuários:

```json
[
  { "id": 1, "nome": "João" },
  { "id": 2, "nome": "Ana" }
]
```

Podemos iterar sobre esses dados usando `map()`, `forEach()`, ou `for...of`:

```javascript
const jsonString = '[{"id":1,"nome":"João"}, {"id":2,"nome":"Ana"}]';
const usuarios = JSON.parse(jsonString);

usuarios.forEach((usuario) => {
  console.log(usuario.nome);
});
```

Saída:

```pw
João
Ana
```

---

## JSON e Fetch API

O `fetch()` retorna uma Promise que resolve para a resposta de uma requisição HTTP. Para lidar com JSON, usamos `res.json()`:

```javascript
async function obterDados() {
  try {
    const resposta = await fetch("https://api.exemplo.com/dados");
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro ao buscar dados", erro);
  }
}

obterDados();
```

---

## Erros Comuns ao Trabalhar com JSON

### 1. JSON Mal Formatado

Erro:

```javascript
JSON.parse('{ nome: "Carlos" }'); // Falha! Chave precisa de aspas
```

Correto:

```javascript
JSON.parse('{ "nome": "Carlos" }');
```

### 2. Chaves de Objeto Como Números

Erro:

```json
{ "123": "valor" }
```

Correto:

```json
{ "123": "valor" }
```

### 3. Esquecer de Converter para JSON ao Enviar Dados

Errado:

```javascript
fetch("https://api.exemplo.com/enviar", {
  method: "POST",
  body: { nome: "Ana" }, // Erro! Precisa ser JSON
});
```

Correto:

```javascript
fetch("https://api.exemplo.com/enviar", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ nome: "Ana" }),
});
```

---

## Conclusão

O JSON é uma ferramenta essencial para troca de dados em aplicações web. Saber converter, manipular e lidar com erros torna o desenvolvimento mais eficiente e evita problemas comuns.

Sempre valide e trate erros ao trabalhar com JSON, principalmente quando estiver lidando com dados vindos de APIs externas.

---

## Referências

- [MDN Web Docs - JSON](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [JSON.org](https://www.json.org/json-pt.html)
