# Estudo Completo sobre Intl em JavaScript

## Introdução

O objeto `Intl` (Internacionalização) em JavaScript fornece uma API poderosa para formatação de números, moedas, datas, horários e strings, considerando diferentes localizações e idiomas. Ele ajuda a tornar as aplicações mais acessíveis para usuários de diferentes países.

---

## Principais APIs do `Intl`

O `Intl` possui várias classes úteis, incluindo:

- `Intl.DateTimeFormat` → Formatação de datas e horários.
- `Intl.NumberFormat` → Formatação de números e moedas.
- `Intl.Collator` → Comparação de strings com suporte a idiomas.
- `Intl.PluralRules` → Definição de regras de pluralização.
- `Intl.RelativeTimeFormat` → Formatação de tempo relativo.
- `Intl.ListFormat` → Formatação de listas.
- `Intl.DisplayNames` → Representação amigável de nomes de regiões, scripts e idiomas.

---

## 1. `Intl.DateTimeFormat` - Formatação de Datas e Horários

A API `DateTimeFormat` permite exibir datas formatadas conforme a localização desejada.

### Exemplo de uso básico

```javascript
const dataAtual = new Date();
const formatoBR = new Intl.DateTimeFormat("pt-BR").format(dataAtual);
console.log(formatoBR); // Exemplo: "04/04/2024"
```

### Personalizando o formato da data

Podemos definir opções como dia, mês, ano, hora, etc.

```javascript
const options = { year: "numeric", month: "long", day: "2-digit" };
const formatoPersonalizado = new Intl.DateTimeFormat("pt-BR", options).format(
  dataAtual
);
console.log(formatoPersonalizado); // Exemplo: "04 de abril de 2024"
```

### Exibindo horário junto com a data

```javascript
const optionsTime = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
const dataHora = new Intl.DateTimeFormat("pt-BR", optionsTime).format(
  dataAtual
);
console.log(dataHora); // Exemplo: "4 de abr. de 2024 14:30:15"
```

---

## 2. `Intl.NumberFormat` - Formatação de Números e Moedas

A API `NumberFormat` permite exibir números formatados corretamente para diferentes idiomas e moedas.

### Exemplo de uso básico

```javascript
const numero = 1234567.89;
const formatoBR = new Intl.NumberFormat("pt-BR").format(numero);
console.log(formatoBR); // "1.234.567,89"
```

### Formatando moedas

```javascript
const moeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(numero);
console.log(moeda); // "R$ 1.234.567,89"
```

Podemos formatar outras moedas mudando o código da moeda:

```javascript
const dolar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(numero);
console.log(dolar); // "$1,234,567.89"
```

---

## 3. `Intl.Collator` - Comparação de Strings

A API `Collator` permite comparar strings respeitando regras linguísticas específicas.

### Exemplo de comparação de palavras ordenadas

```javascript
const palavras = ["árvore", "Água", "abacaxi", "azeitona"];
palavras.sort(new Intl.Collator("pt-BR").compare);
console.log(palavras); // ["abacaxi", "Água", "azeitona", "árvore"]
```

O `Collator` considera acentos e maiúsculas/minúsculas corretamente, tornando a ordenação mais natural.

---

## 4. `Intl.PluralRules` - Regras de Pluralização

A API `PluralRules` define regras de pluralização para diferentes idiomas.

### Exemplo de uso:

```javascript
const plural = new Intl.PluralRules("pt-BR");
console.log(plural.select(1)); // "one"
console.log(plural.select(2)); // "other"
```

Podemos personalizar as respostas:

```javascript
const mensagens = {
  one: "Você tem 1 nova mensagem",
  other: "Você tem várias mensagens",
};

const numeroMensagens = 5;
console.log(mensagens[plural.select(numeroMensagens)]); // "Você tem várias mensagens"
```

---

## 5. `Intl.RelativeTimeFormat` - Formatação de Tempo Relativo

A API `RelativeTimeFormat` permite exibir tempos relativos como "há 2 dias" ou "daqui a 1 semana".

### Exemplo de uso

```javascript
const relativeTime = new Intl.RelativeTimeFormat("pt-BR", { numeric: "auto" });
console.log(relativeTime.format(-3, "day")); // "há 3 dias"
console.log(relativeTime.format(1, "week")); // "daqui a 1 semana"
```

---

## 6. `Intl.ListFormat` - Formatação de Listas

A API `ListFormat` permite formatar listas de forma natural, com pontuação e conjunções adequadas.

### Exemplo de uso

```javascript
const lista = ["maçã", "banana", "laranja"];
const listaFormatada = new Intl.ListFormat("pt-BR", {
  style: "long",
  type: "conjunction",
}).format(lista);
console.log(listaFormatada); // "maçã, banana e laranja"
```

---

## 7. `Intl.DisplayNames` - Exibição de Nomes de Regiões e Idiomas

A API `DisplayNames` permite exibir nomes de países, idiomas e scripts em um formato mais amigável.

### Exemplo de uso

```javascript
const display = new Intl.DisplayNames(["pt-BR"], { type: "region" });
console.log(display.of("US")); // "Estados Unidos"
```

Podemos também exibir idiomas:

```javascript
const displayIdioma = new Intl.DisplayNames(["pt-BR"], { type: "language" });
console.log(displayIdioma.of("en")); // "inglês"
```

---

## Conclusão

A API `Intl` é extremamente útil para internacionalizar aplicações, garantindo formatação correta de datas, números, listas e muito mais. Seu uso melhora a experiência do usuário ao adaptar os formatos ao idioma e cultura locais.

Se estiver desenvolvendo um sistema globalizado, o `Intl` é uma ferramenta essencial para garantir acessibilidade e precisão na exibição de informações.
