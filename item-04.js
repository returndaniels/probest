function calculateNeverEndProbability(initialRoll) {
  let successProbability = 1 / 6 + 1 / 36; // probabilidade de obter o número inicial ou 7 em um único lançamento (Aproximadamente 0.194)
  let failureProbability = 1 - successProbability; // probabilidade de não obter o número inicial ou 7 em um único lançamento (Aproximadamente 0.861)
  let probability =
    failureProbability ** (initialRoll - 2) * successProbability; // probabilidade de nunca atingir o número inicial ou 7
  return probability;
}

// 4,5,6,8,9,10
let initialRoll = 10; // número inicial
let probability = calculateNeverEndProbability(initialRoll); // probabilidade teórica de que o jogo nunca termine
console.log(
  `Probabilidade de jogo sem fim com rolagem inicial igual a ${initialRoll}:`,
  probability
);

/*
A probabilidade de que o jogo nunca termine é a probabilidade de que o jogador nunca alcance o número inicial nem 7. 
Isso significa que ele deve continuar jogando os dados repetidamente até que uma dessas duas opções seja alcançada.

Sabemos que a probabilidade de obter o número inicial ou 7 em um único lançamento é a soma das probabilidades de obter 
cada resultado possível que leva a uma dessas opções. Se o número inicial for 6, por exemplo, as probabilidades de obter 
o número inicial ou 7 são:

P(6) = 5/36 (porque há 5 maneiras de obter 6: (1,5), (2,4), (3,3), (4,2) e (5,1))
P(7) = 6/36 (porque há 6 maneiras de obter 7: (1,6), (2,5), (3,4), (4,3), (5,2) e (6,1))

Portanto, a probabilidade de sucesso (ou seja, de alcançar o número inicial ou 7) em um único lançamento é 

P(success) = P(6) + P(7) = 11/36

A probabilidade de falha (ou seja, de não alcançar o número inicial nem 7) em um único lançamento é 

P(failure) = 1 - P(success) = 25/36.

Se o jogador continuar jogando os dados repetidamente sem alcançar o número inicial nem 7, ele continuará 
jogando até obter um resultado diferente do número inicial (ou seja, uma falha) em cada um dos 
primeiros (initialRoll - 1) lançamentos e, em seguida, obter um sucesso no último lançamento. A probabilidade de 
obter uma falha em cada um dos primeiros (initialRoll - 1) lançamentos é P(failure) elevado à potência (initialRoll - 1), 
porque cada lançamento é independente do anterior. A probabilidade de obter um sucesso no último lançamento é 
simplesmente P(success). Portanto, a probabilidade total de que o jogo nunca termine é:

P(never-end) = P(failure)^(initialRoll-1) * P(success)

Ou seja, a probabilidade de falha elevada à potência (initialRoll - 1) multiplicada pela probabilidade de sucesso. 
Essa é a razão pela qual a probabilidade da maneira abaixo:

let probability = failureProbability ** (initialRoll - 2) * successProbability;

Probabilidade de jogo sem fim com rolagem inicial igual a 4: 0.12617884087791495
Probabilidade de jogo sem fim com rolagem inicial igual a 5: 0.10164406626276482
Probabilidade de jogo sem fim com rolagem inicial igual a 6: 0.08187994226722722
Probabilidade de jogo sem fim com rolagem inicial igual a 8: 0.05313351191877939
Probabilidade de jogo sem fim com rolagem inicial igual a 9: 0.04280199571235007
Probabilidade de jogo sem fim com rolagem inicial igual a 10: 0.03447938543494866

Soma | Formas de obter a soma  |  Probabilidade
4      1+3, 2+2, 3+1               3/36  
5      1+4, 2+3, 3+2, 4+1          4/36
6      1+5, 2+4, 3+3, 4+2, 5+1     5/36
8      2+6, 3+5, 4+4, 5+3, 6+2     5/36
9      3+6, 4+5, 5+4, 6+3          4/36
10     4+6, 5+5, 6+4               3/36 

A probabilidade geral de um jogor ser sem fim é: 
p = (3/36)*0.12617884087791495 + (4/36)*0.10164406626276482 + (5/36)*0.08187994226722722 + (5/36)*0.05313351191877939 + (4/36)*0.04280199571235007 + (3/36)*0.03447938543494866
p = 0.048189616604696756

*/
