# Estudo Completo sobre Date em JavaScript

## Introdução

O objeto `Date` em JavaScript é usado para manipular datas e horários. Ele fornece diversos métodos para criação, formatação, manipulação e extração de informações de datas.

O `Date` trabalha com o fuso horário UTC e pode ser ajustado para horários locais.

---

## Criando Datas

Podemos criar um objeto `Date` de várias formas:

### Criando a Data Atual

```javascript
const agora = new Date();
console.log(agora); // Retorna a data e hora atuais
```

### Criando uma Data Específica

```javascript
const dataEspecifica = new Date(2023, 4, 15); // Ano, mês (0 a 11), dia
console.log(dataEspecifica); // 15 de maio de 2023
```

### Criando uma Data com Hora

```javascript
const dataComHora = new Date(2023, 4, 15, 14, 30, 0); // Ano, mês, dia, hora, minuto, segundo
console.log(dataComHora);
```

### Criando Data a Partir de uma String

```javascript
const dataString = new Date("2023-05-15T14:30:00");
console.log(dataString);
```

### Criando Data a Partir de um Timestamp

```javascript
const timestamp = new Date(1684159800000); // Tempo em milissegundos desde 1970
console.log(timestamp);
```

---

## Métodos Principais

### Obtendo Valores Individuais

```javascript
const data = new Date();
console.log(data.getFullYear()); // Ano
console.log(data.getMonth()); // Mês (0 a 11)
console.log(data.getDate()); // Dia do mês
console.log(data.getDay()); // Dia da semana (0 a 6)
console.log(data.getHours()); // Hora
console.log(data.getMinutes()); // Minutos
console.log(data.getSeconds()); // Segundos
console.log(data.getMilliseconds()); // Milissegundos
```

### Definindo Valores Individuais

```javascript
const dataModificavel = new Date();
dataModificavel.setFullYear(2025);
dataModificavel.setMonth(11); // Dezembro
console.log(dataModificavel);
```

### Comparação de Datas

```javascript
const data1 = new Date("2023-05-15");
const data2 = new Date("2024-05-15");
console.log(data1 > data2); // false
console.log(data1 < data2); // true
```

---

## Formatando Datas

### Conversão para String

```javascript
const data = new Date();
console.log(data.toDateString()); // Exemplo: "Tue Apr 02 2024"
console.log(data.toISOString()); // Formato padrão ISO 8601
console.log(data.toLocaleDateString("pt-BR")); // "02/04/2024"
console.log(data.toLocaleTimeString("pt-BR")); // "14:30:00"
console.log(data.toLocaleString("pt-BR")); // "02/04/2024 14:30:00"
```

### Formatando Manualmente

```javascript
const data = new Date();
const dia = data.getDate().toString().padStart(2, "0");
const mes = (data.getMonth() + 1).toString().padStart(2, "0");
const ano = data.getFullYear();
console.log(`${dia}/${mes}/${ano}`); // Exemplo: "02/04/2024"
```

---

## Trabalhando com Timestamp

O timestamp representa a quantidade de milissegundos desde 1º de janeiro de 1970.

```javascript
console.log(Date.now()); // Retorna o timestamp atual

const data = new Date(1684159800000);
console.log(data);
```

---

## Operações com Datas

### Adicionando Dias

```javascript
const data = new Date();
data.setDate(data.getDate() + 10); // Adiciona 10 dias
console.log(data);
```

### Calculando Diferença Entre Datas

```javascript
const data1 = new Date("2023-05-01");
const data2 = new Date("2023-05-15");
const diferenca = Math.abs(data2 - data1); // Diferença em milissegundos
const dias = diferenca / (1000 * 60 * 60 * 24);
console.log(dias); // 14 dias
```

---

## Conclusão

O objeto `Date` em JavaScript oferece uma ampla gama de métodos para manipular datas e horários de forma eficiente. Desde a criação e formatação até cálculos avançados, ele é uma ferramenta essencial para o desenvolvimento de aplicações.
