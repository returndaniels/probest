# Estimando a probabilidade de vitória em um jogo de Craps

O objetivo deste programa é estimar a probabilidade de que o jogador A vença em um jogo de Craps contra o jogador B. As regras do jogo são as seguintes:

- O jogador A começa com um valor de ```a``` pontos e o jogador B começa com um valor de ```b``` pontos.
- O jogador A lança 2 dados e soma o valor das duas faces com ```a```.
- O jogador B lança 2 dados e soma o valor das duas faces com ```b```.
- Se o jogador A obtiver um resultado de 7 ou 11, ele ganha a rodada.
- Se o jogador A obtiver um resultado de 2, 3 ou 12, ele perde a rodada.
- Se o jogador A obtiver qualquer outro resultado, ele continua jogando os dois dados até que saia um 7, caso em que ele perde, ou então saia novamente o primeiro resultado, caso em que ele ganha.
- O jogador que obtiver o maior resultado final vence a rodada.
- O vencedor do jogo é aquele que for o primeiro a vencer 10 rodadas.

Ao executar o programa estimateProbabilityOfAVictory, devemos fornecer três parâmetros:

- ```a```: valor inicial de pontos do jogador A.
- ```b```: valor inicial de pontos do jogador B.
- ```n```: número de vezes que o jogo será simulado para estimar a probabilidade de vitória.
O resultado do programa será uma estimativa da probabilidade de que o jogador A vença o jogo.

## Resultado

Executamos o programa passando o argumento n=100000 e obtivemos os seguntes resultados:

- Probabilidade de A vencer com valores a=7, b=8: 0.00002
- Probabilidade de A vencer com valores a=8, b=10: 0
- Probabilidade de A vencer com valores a=6, b=10: 0
- Probabilidade de A vencer com valores a=8, b=11: 0

## Explicação do resultado

A probabilidade de que o jogador A vença o jogo de Craps depende dos valores iniciais de ```a``` e ```b```, bem como das regras do jogo. Quando ```a``` e ```b``` são ambos relativamente altos, como 7 e 8, 8 e 10, ou 8 e 11, a probabilidade de que o jogador A vença se aproxima de 0. Isso ocorre porque nas rodadas subsequentes, o jogador A precisa rolar um 7 antes de rolar o valor inicial de 7 novamente para vencer, o que diminui significativamente suas chances de vitória.

Por exemplo, se o jogador A começa com um valor de 7 e o jogador B começa com um valor de 8, então a probabilidade de A vencer a primeira rodada é de 6/36 (16,67%), pois existem seis maneiras possíveis de obter um valor de 7 (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) e 30 maneiras de obter outro valor. No entanto, nas rodadas subsequentes, o jogador A precisa rolar um valor de 7 antes de rolar o valor inicial de 7 novamente para vencer. Isso significa que a probabilidade de o jogador A vencer diminui significativamente, já que a probabilidade de rolar um 7 é de 6/36 (16,67%) e a probabilidade de rolar qualquer outro valor é de 30/36 (83,33%). À medida que o número de rodadas aumenta, a probabilidade de o jogador A vencer se torna cada vez menor, até se aproximar de zero.

Em resumo, as probabilidades de A vencer em um jogo de craps dependem dos valores iniciais de a e b, bem como das regras do jogo, e podem variar de muito baixas a relativamente altas, dependendo desses fatores.