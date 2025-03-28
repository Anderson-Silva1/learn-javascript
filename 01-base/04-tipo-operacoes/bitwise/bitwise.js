// AND Bitwise (&): A operação AND bitwise retorna 1 quando ambos os bits de comparação são
{
  let a = 5; // 0101 em binário
  let b = 3; // 0011 em binário

  console.log(a & b); // 0001 (1 em decimal)
}

// OR Bitwise (|): A operação OR bitwise retorna 1 quando pelo menos um dos bits de comparação é 1.

{
  let a = 5; // 0101 em binário
  let b = 3; // 0011 em binário

  console.log(a | b); // 0111 (7 em decimal)
}

// XOR Bitwise (^): A operação XOR bitwise retorna 1 quando os bits são diferentes.
{
  let a = 5; // 0101 em binário
  let b = 3; // 0011 em binário

  console.log(a ^ b); // 0110 (6 em decimal)
}

// NOT Bitwise (~): A operação NOT bitwise inverte todos os bits do número.
{
  let a = 5; // 0101 em binário

  console.log(~a); // -6 (inverte os bits: 1010 em binário, que é -6 em decimal no formato de complemento de dois)
}

// Deslocamento à Esquerda (<<): Desloca os bits de um número para a esquerda. Cada deslocamento à esquerda equivale a multiplicar o número por 2.
{
  let a = 5; // 0101 em binário

  console.log(a << 1); // 1010 (10 em decimal, deslocando 1 posição à esquerda)
  console.log(a << 2); // 10100 (20 em decimal, deslocando 2 posições à esquerda)
}

// Deslocamento à Direita (>>): Desloca os bits de um número para a direita. Cada deslocamento à direita equivale a dividir o número por 2 (arredondado para baixo).
{
  let a = 5; // 0101 em binário

  console.log(a >> 1); // 0010 (2 em decimal, deslocando 1 posição à direita)
  console.log(a >> 2); // 0001 (1 em decimal, deslocando 2 posições à direita)
}
