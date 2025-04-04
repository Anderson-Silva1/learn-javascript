# **Introdução ao Debugging no JavaScript**

O **debugging** (depuração) é o processo de encontrar e corrigir erros no código. O JavaScript fornece diversas ferramentas para facilitar esse processo, como o **console do navegador** e o **debugger**.

---

---

## **Ferramentas de Debugging**

As principais ferramentas para debugging são:

1. **Console do navegador**
2. **Breakpoints no DevTools**
3. **`console` API (log, error, warn, table, etc.)**
4. **Uso do `debugger`**

A maioria dos navegadores modernos (Chrome, Firefox, Edge) possuem o **DevTools** (Ferramentas de Desenvolvedor). Para abrir:

- **Windows/Linux:** `F12` ou `Ctrl + Shift + I`
- **MacOS:** `Cmd + Option + I`

## **Console do Navegador (`console`)**

O **console** permite visualizar saídas, erros e informações úteis durante a execução do código.

### **Métodos do `console`**:

### **1. `console.log()` - Exibe informações gerais**

Útil para inspecionar valores durante a execução do código.

```js
console.log("Isso é um log no console");
```

---

### **2. `console.error()` - Exibe erros**

Destaque em vermelho, útil para mensagens de erro.

```js
console.error("Isso é um erro!");
```

---

### **3. `console.warn()` - Exibe avisos**

Destaque em amarelo, para alertas.

```js
console.warn("Isso é um aviso!");
```

---

### **4. `console.table()` - Exibe dados em formato de tabela**

Útil para visualizar arrays e objetos de forma organizada.

```js
const usuarios = [
  { id: 1, nome: "Anderson", idade: 20 },
  { id: 2, nome: "Rafaela", idade: 22 },
];
console.table(usuarios);
```

---

### **5. `console.time()` e `console.timeEnd()` - Medir tempo de execução**

```js
console.time("Loop");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Loop"); // Mostra o tempo gasto
```

Ajuda a medir quanto tempo um trecho de código leva para executar.

---

### **6. `console.assert()` - Exibir erro se a condição for falsa**

```js
console.assert(2 + 2 === 5, "Isso é um erro! 2 + 2 não é 5");
```

---

Se a condição for falsa, o erro será exibido no console.

### **7. `console.group()` e `console.groupEnd()` - Agrupar logs**

Organiza mensagens no console em grupos dobráveis.

```js
console.group("Grupo de Logs");
console.log("Log 1");
console.log("Log 2");
console.groupEnd();
```

---

### **8 `window.onerror` - Capturar erros globais**

```js
window.onerror = function (mensagem, url, linha, coluna, erro) {
  console.error(`Erro detectado: ${mensagem} em ${url} na linha ${linha}`);
};
```

Isso captura erros que ocorrem em qualquer parte do código.

---

---

# **Debugging com `debugger`**

O `debugger` pausa a execução do código, permitindo inspecionar valores no **DevTools**.

### **1 Exemplo de uso**

```js
let a = 10;
let b = 20;
debugger; // O código pausará aqui
let soma = a + b;
console.log(soma);
```

- Quando o navegador atingir a linha `debugger;`, ele pausará a execução.
- Você pode inspecionar variáveis no **DevTools**.

---

---

## **Breakpoints no DevTools**

Breakpoints permitem pausar o código sem precisar usar `debugger`.

### **Como adicionar breakpoints**

1. **Abra o DevTools (`F12`)**
2. Vá até a aba **"Sources"**
3. Encontre o arquivo JS
4. Clique no número da linha onde deseja pausar
5. Atualize a página e veja a execução parar nesse ponto

Isso permite inspecionar variáveis e acompanhar o fluxo do código.
