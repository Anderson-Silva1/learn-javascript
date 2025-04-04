# Estudo Completo sobre Moment.js em JavaScript

## Introdução

Moment.js é uma biblioteca JavaScript popular para manipulação de datas e horas. Ela simplifica operações como formatação, cálculo de diferenças entre datas e conversões de fuso horário.

---

## Instalação

### Via npm ou yarn

```sh
npm install moment
# ou
yarn add moment
```

### Uso no navegador via CDN

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
```

### Importação no código

```javascript
import moment from "moment";
```

---

## Manipulação de Datas

### Criando Datas

```javascript
const agora = moment();
console.log(agora.format()); // Exibe a data atual
```

### Convertendo Strings em Datas

```javascript
const data = moment("2025-04-04", "YYYY-MM-DD");
console.log(data.format("DD/MM/YYYY")); // 04/04/2025
```

### Adicionando e Removendo Tempo

```javascript
console.log(moment().add(7, "days").format("DD/MM/YYYY")); // Adiciona 7 dias
console.log(moment().subtract(1, "month").format("DD/MM/YYYY")); // Subtrai 1 mês
```

### Comparando Datas

```javascript
const data1 = moment("2025-04-04");
const data2 = moment("2025-04-10");
console.log(data1.isBefore(data2)); // true
console.log(data1.isAfter(data2)); // false
```

---

## Formatação de Datas

```javascript
console.log(moment().format("YYYY-MM-DD")); // 2025-04-04
console.log(moment().format("dddd, MMMM Do YYYY")); // Friday, April 4th 2025
```

---

## Diferenças entre Datas

```javascript
const dataInicio = moment("2025-04-01");
const dataFim = moment("2025-04-10");
console.log(dataFim.diff(dataInicio, "days")); // 9 dias
```

---

## Trabalhando com Fusos Horários

Para suporte a fusos horários, use `moment-timezone`:

```sh
npm install moment-timezone
```

Exemplo de uso:

```javascript
import moment from "moment-timezone";
console.log(moment().tz("America/Sao_Paulo").format());
```

---

## Conclusão

Moment.js é uma biblioteca poderosa para lidar com datas e horas de forma eficiente e intuitiva. Embora existam alternativas mais leves como `date-fns`, o Moment.js ainda é amplamente utilizado por sua facilidade de uso e funcionalidades abrangentes.

Caso precise de mais informações ou exemplos específicos, me avise! 🚀
