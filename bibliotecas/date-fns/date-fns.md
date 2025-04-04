# Estudo Completo sobre date-fns em JavaScript

## Introdução

O `date-fns` é uma biblioteca popular para manipulação de datas em JavaScript. Ele fornece uma variedade de funções utilitárias para lidar com datas de forma eficiente, sendo uma alternativa mais moderna e modular ao `Moment.js`.

### Instalação

Para utilizar o `date-fns`, você pode instalá-lo via npm ou yarn:

```sh
npm install date-fns
```

Ou usando yarn:

```sh
yarn add date-fns
```

---

## Importação

O `date-fns` permite importar apenas as funções que você precisa, o que reduz o tamanho do bundle:

```javascript
import { format, parseISO } from "date-fns";
```

Caso queira importar toda a biblioteca:

```javascript
import * as dateFns from "date-fns";
```

---

## Formatação de Datas

A formatação de datas no `date-fns` é realizada com a função `format`. Ela permite converter objetos de data para strings legíveis.

```javascript
import { format } from "date-fns";

const hoje = new Date();
console.log(format(hoje, "dd/MM/yyyy")); // Exemplo: 04/04/2025
```

---

## Comparação de Datas

### `isBefore` e `isAfter`

Essas funções verificam se uma data vem antes ou depois de outra:

```javascript
import { isBefore, isAfter } from "date-fns";

const data1 = new Date(2025, 3, 1);
const data2 = new Date(2025, 3, 10);

console.log(isBefore(data1, data2)); // true
console.log(isAfter(data1, data2)); // false
```

### `compareAsc`

Essa função compara duas datas retornando `-1`, `0` ou `1`:

```javascript
import { compareAsc } from "date-fns";

console.log(compareAsc(new Date(2025, 3, 1), new Date(2025, 3, 10))); // -1
```

---

## Cálculos com Datas

### Adicionar e Subtrair Datas

```javascript
import { addDays, subMonths } from "date-fns";

const hoje = new Date();
console.log(addDays(hoje, 10)); // Adiciona 10 dias
console.log(subMonths(hoje, 2)); // Subtrai 2 meses
```

### Diferença entre Datas

```javascript
import { differenceInDays, differenceInYears } from "date-fns";

const dataInicio = new Date(2020, 0, 1);
const dataFim = new Date(2025, 0, 1);

console.log(differenceInDays(dataFim, dataInicio)); // Retorna 1826
console.log(differenceInYears(dataFim, dataInicio)); // Retorna 5
```

---

## Manipulação de Fusos Horários

O `date-fns` não gerencia fusos horários diretamente, mas podemos usá-lo com `date-fns-tz`:

```sh
npm install date-fns-tz
```

```javascript
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

const fusoHorario = "America/Sao_Paulo";
const agora = new Date();
const zonedDate = utcToZonedTime(agora, fusoHorario);

console.log(
  format(zonedDate, "yyyy-MM-dd HH:mm:ssXXX", { timeZone: fusoHorario })
);
```

---

## Internacionalização (i18n)

O `date-fns` suporta múltiplos idiomas para formatação:

```javascript
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const hoje = new Date();
console.log(format(hoje, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR }));
```

Isso imprime algo como: `sexta-feira, 04 de abril de 2025`.

---

## Conclusão

O `date-fns` é uma biblioteca poderosa e eficiente para manipulação de datas no JavaScript. Ele permite formatar, comparar e calcular diferenças entre datas com uma API simples e modular, sendo uma excelente opção para projetos modernos.

---

Caso tenha alguma dúvida ou queira um aprofundamento em alguma funcionalidade específica, me avise! 🚀
