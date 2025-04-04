# Estudo Completo sobre Math em JavaScript

## Introdução

O objeto `Math` em JavaScript é uma biblioteca integrada que fornece funções matemáticas para operações como arredondamento, geração de números aleatórios, trigonometria, exponenciação e muito mais. Diferente de outros objetos, `Math` não pode ser instanciado, pois ele já é um objeto estático global.

---

## Principais Propriedades de `Math`

O objeto `Math` possui diversas constantes matemáticas importantes:

| Propriedade    | Valor aproximado   | Descrição                         |
| -------------- | ------------------ | --------------------------------- |
| `Math.PI`      | 3.141592653589793  | Representa o valor de π (pi)      |
| `Math.E`       | 2.718281828459045  | Base do logaritmo natural (Euler) |
| `Math.LN2`     | 0.6931471805599453 | Logaritmo natural de 2            |
| `Math.LN10`    | 2.302585092994046  | Logaritmo natural de 10           |
| `Math.SQRT2`   | 1.4142135623730951 | Raiz quadrada de 2                |
| `Math.SQRT1_2` | 0.7071067811865476 | Raiz quadrada de 1/2              |

Exemplo:

```javascript
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
```

---

## Arredondamento

JavaScript fornece funções de arredondamento que permitem manipular valores decimais.

### `Math.round(x)` - Arredondamento normal

```javascript
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4
```

### `Math.floor(x)` - Arredonda para baixo

```javascript
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.9)); // -5
```

### `Math.ceil(x)` - Arredonda para cima

```javascript
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(-4.1)); // -4
```

### `Math.trunc(x)` - Remove a parte decimal

```javascript
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(-4.9)); // -4
```

---

## Potenciação e Radiciação

### `Math.pow(base, expoente)` - Potenciação

```javascript
console.log(Math.pow(2, 3)); // 8 (2³)
```

### `Math.sqrt(x)` - Raiz quadrada

```javascript
console.log(Math.sqrt(16)); // 4
```

### `Math.cbrt(x)` - Raiz cúbica

```javascript
console.log(Math.cbrt(27)); // 3
```

---

## Números Aleatórios

### `Math.random()` - Gera um número aleatório entre 0 e 1

```javascript
console.log(Math.random()); // Exemplo: 0.567432
```

Para gerar um número inteiro aleatório dentro de um intervalo específico:

```javascript
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(numeroAleatorio(1, 10)); // Número aleatório entre 1 e 10
```

---

## Funções Trigonométricas

| Função        | Descrição                  |
| ------------- | -------------------------- |
| `Math.sin(x)` | Seno de `x` (radianos)     |
| `Math.cos(x)` | Cosseno de `x` (radianos)  |
| `Math.tan(x)` | Tangente de `x` (radianos) |

Exemplo:

```javascript
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
console.log(Math.tan(Math.PI / 4)); // 1
```

Para converter graus para radianos:

```javascript
function grausParaRadianos(graus) {
  return graus * (Math.PI / 180);
}
console.log(Math.sin(grausParaRadianos(90))); // 1
```

---

## Módulo e Valores Absolutos

### `Math.abs(x)` - Retorna o valor absoluto

```javascript
console.log(Math.abs(-10)); // 10
```

### `Math.sign(x)` - Retorna -1, 0 ou 1 baseado no sinal do número

```javascript
console.log(Math.sign(-10)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(10)); // 1
```

---

## Logaritmos e Exponenciação

### `Math.log(x)` - Logaritmo natural (base `e`)

```javascript
console.log(Math.log(1)); // 0
```

### `Math.log10(x)` - Logaritmo base 10

```javascript
console.log(Math.log10(1000)); // 3
```

### `Math.exp(x)` - Exponenciação (e^x)

```javascript
console.log(Math.exp(1)); // 2.718...
```

---

## Conclusão

O objeto `Math` do JavaScript é uma ferramenta poderosa para operações matemáticas, oferecendo desde arredondamentos simples até cálculos trigonométricos e geração de números aleatórios. Dominar suas funções pode facilitar a vida de qualquer programador ao lidar com cálculos numéricos em aplicações web.
