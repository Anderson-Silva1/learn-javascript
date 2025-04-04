# Guia Completo sobre Event Loop em JavaScript Assíncrono

## Introdução

O JavaScript é uma linguagem de programação de thread única, baseada em um modelo de concorrência não bloqueante. Isso significa que ele é projetado para lidar com operações assíncronas sem bloquear a execução do restante do código. O mecanismo central que permite isso é o **Event Loop**.

Este guia explora como o Event Loop funciona, sua interação com a Call Stack, Web APIs e Task Queue, além de demonstrar exemplos práticos para entendimento completo.

---

## O que é o Event Loop?

O **Event Loop** é o mecanismo responsável por gerenciar a execução do código, eventos e tarefas assíncronas em JavaScript. Ele monitora a Call Stack e a Task Queue, garantindo que as tarefas sejam executadas na ordem correta sem bloquear a execução do programa.

---

## Componentes do Event Loop

Para entender o Event Loop, precisamos conhecer seus componentes principais:

### 1. **Call Stack (Pilha de Execução)**

- Uma estrutura de dados em formato de pilha (LIFO - Last In, First Out).
- Sempre que uma função é chamada, ela é adicionada ao topo da Call Stack.
- Quando a função termina, ela é removida da Stack.

### 2. **Web APIs**

- Fornecidas pelo navegador ou Node.js para executar operações assíncronas como `setTimeout`, `fetch`, `addEventListener` e `XMLHttpRequest`.
- Quando uma tarefa assíncrona é iniciada, ela é enviada para a Web API, e a execução do código continua.

### 3. **Callback Queue (Task Queue ou Message Queue)**

- Armazena funções callback de operações assíncronas até que possam ser executadas.
- O Event Loop verifica a Call Stack. Se estiver vazia, ele move a próxima tarefa da Task Queue para a Stack.

### 4. **Microtask Queue**

- Similar à Task Queue, mas com maior prioridade.
- Armazena callbacks de Promises (`.then`, `catch`, `finally`) e do `MutationObserver`.
- Sempre que a Call Stack fica vazia, as microtasks são executadas antes das tarefas na Task Queue.

---

## Como o Event Loop Funciona?

1. O código síncrono é executado primeiro na **Call Stack**.
2. Se houver chamadas assíncronas (como `setTimeout` ou `fetch`), elas são delegadas à **Web API**.
3. Quando a Web API conclui a operação, o callback correspondente é enviado para a **Task Queue** ou **Microtask Queue**.
4. O **Event Loop** monitora a Call Stack:
   - Se estiver vazia, ele move a próxima tarefa da Microtask Queue para a Stack.
   - Se a Microtask Queue estiver vazia, ele move a próxima tarefa da Task Queue para a Stack.
5. Esse ciclo continua indefinidamente enquanto a aplicação estiver em execução.

---

## Exemplo Prático

Vamos analisar o seguinte código e entender a ordem de execução:

```javascript
console.log("Início");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolvida");
});

console.log("Fim");
```

### Ordem de Execução

1. `console.log("Início")` → Executado imediatamente.
2. `setTimeout` → Passado para a Web API.
3. `Promise.resolve().then(...)` → Callback adicionado à Microtask Queue.
4. `console.log("Fim")` → Executado imediatamente.
5. A Call Stack está vazia, então a **Microtask Queue** é executada primeiro (“Promise resolvida”).
6. Finalmente, a **Task Queue** é processada (“setTimeout”).

### Saída no console

```pw
Início
Fim
Promise resolvida
setTimeout
```

---

## Diferença entre Task Queue e Microtask Queue

| Característica    | Task Queue                        | Microtask Queue                               |
| ----------------- | --------------------------------- | --------------------------------------------- |
| Exemplo           | `setTimeout`, `setInterval`       | `Promise.then`, `queueMicrotask`              |
| Prioridade        | Executada após as Microtasks      | Executada antes das Tasks                     |
| Ordem de Execução | Somente quando a Stack está vazia | Executada imediatamente após a Stack esvaziar |

---

## Impacto no Desempenho

1. **Evite Bloquear a Call Stack**

   - Funções pesadas devem ser executadas de forma assíncrona para evitar congelamento da interface do usuário.

2. **Use `Promise.all()` para Execução Paralela**

   - Quando várias Promises precisam ser resolvidas, `Promise.all()` pode melhorar a eficiência ao executar tudo simultaneamente.

3. **Minimize Uso de `setTimeout(0)`**
   - Não garante execução imediata, pois depende da Task Queue.

---

## Conclusão

O **Event Loop** é essencial para entender como JavaScript lida com tarefas assíncronas. Ele gerencia a Call Stack, Web APIs e filas de tarefas para garantir que eventos e callbacks sejam processados corretamente.

### Principais Aprendizados

- JavaScript é **single-threaded** e usa o **Event Loop** para gerenciar operações assíncronas.
- **Web APIs** lidam com tarefas como `setTimeout`, `fetch` e eventos DOM.
- **Microtasks (Promises)** têm prioridade sobre **Tasks (setTimeout, I/O)**.
- **Evitar bloqueios na Call Stack** melhora a responsividade das aplicações.

Com esse conhecimento, você pode escrever código mais eficiente e evitar armadilhas de desempenho ao trabalhar com JavaScript assíncrono.

---

## Referências

- [MDN - Event Loop](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/EventLoop)
- [Node.js Docs - Event Loop](https://nodejs.org/pt/docs/guides/event-loop-timers-and-nexttick/)
