# Operações Bitwise (Operações Binárias)

As operações bitwise operam diretamente nos bits de um número. São menos usadas no cotidiano, mas úteis em manipulações de baixo nível e em alguns algoritmos.

- **AND bitwise (&)**: Retorna 1 para cada bit onde ambos os bits são 1.
- **OR bitwise (|)**: Retorna 1 para cada bit onde ao menos um dos bits é 1.
- **XOR bitwise (^)**: Retorna 1 para cada bit onde os bits são diferentes.
- **NOT bitwise (~)**: Inverte os bits.
- **Deslocamento à esquerda (<<)**: Desloca os bits de um número para a esquerda.
- **Deslocamento à direita (>>)**: Desloca os bits de um número para a direita.

Exemplo:

````js
Copiar;
Editar;
let a = 5; // 0101 em binário
let b = 3; // 0011 em binário

console.log(a & b); // 0001 (1 em decimal)
console.log(a | b); // 0111 (7 em decimal)
console.log(a ^ b); // 0110 (6 em decimal)```
````
