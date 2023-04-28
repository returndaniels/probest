# Estimando a probabilidade de vitória em um jogo de Craps

O objetivo deste programa é estimar a probabilidade de que o jogador A vença em um jogo de Craps contra o jogador B. As regras do jogo são as seguintes:

- O jogador A começa com um valor de ```a``` pontos e o jogador B começa com um valor de ```b``` pontos.
- O jogador A lança 2 dados e soma o valor das duas faces com ```a```.
- O jogador B lança 2 dados e soma o valor das duas faces com ```b```.
- Se um jogador obtiver um resultado de 7 ou 11, ele ganha a rodada.
- Se um jogador obtiver um resultado de 2, 3 ou 12, ele perde a rodada.
- Se um jogador obtiver qualquer outro resultado, ele continua jogando os dois dados até que saia um 7, caso em que ele perde, ou então saia novamente o primeiro resultado, caso em que ele ganha.
- O vencedor do jogo é aquele que for o primeiro a vencer 10 rodadas.

Ao executar o programa estimateProbability, devemos fornecer três parâmetros:

- ```a```: valor inicial de pontos do jogador A.
- ```b```: valor inicial de pontos do jogador B.
- ```n```: número de vezes que o jogo será simulado para estimar a probabilidade de vitória.
O resultado do programa será uma estimativa da probabilidade de que o jogador A vença o jogo.

## Resultado

Executamos o programa passando o argumento n=100000 e obtivemos os seguntes resultados:

- Probabilidade de A vencer com valores a=7, b=8: 0.06876
- Probabilidade de A vencer com valores a=8, b=10: 0.00611
- Probabilidade de A vencer com valores a=6, b=10: 0
- Probabilidade de A vencer com valores a=8, b=11: 0.00016

## Explicação do resultado

O jogo termina quando um dos jogadores vence 10 rodadas. O programa repete o jogo n vezes (neste caso, 100000 vezes), contabiliza quantas vezes o jogador A venceu e estima a probabilidade de vitória do jogador A como o número de vitórias dividido por n.

Os resultados obtidos pelo programa mostram que a probabilidade de que o jogador A vença o jogo é bastante baixa em geral. No primeiro caso (a=7, b=8), a probabilidade é de cerca de 6,87%. No segundo caso (a=8, b=10), a probabilidade é de apenas 0,61%. No terceiro caso (a=6, b=10), a probabilidade é de 0, ou seja, o jogador A nunca ganha o jogo nestas condições. No último caso (a=8, b=11), a probabilidade é ainda menor, de apenas 0,016%.

Esses resultados indicam que o jogo de Craps favorece mais o jogador B do que o jogador A, pois a probabilidade de vitória do jogador A é baixa em todas as condições testadas. As chances do jogador A ganhar são baixas porque existem várias maneiras de perder uma rodada e apenas duas maneiras de ganhar instantaneamente.

Se o jogador A obtiver um resultado de 7 ou 11, ele ganha a rodada. A probabilidade de obter um 7 é de 6 em 36, ou seja, cerca de 16,67%, e a probabilidade de obter um 11 é de 2 em 36, ou cerca de 5,56%. Portanto, a probabilidade total de ganhar instantaneamente é de cerca de 22,22%.

Por outro lado, se o jogador A obtiver um resultado de 2, 3 ou 12, ele perde a rodada imediatamente, e a probabilidade de obter um desses resultados é de 4 em 36, ou cerca de 11,11%.

Se o jogador A obtiver qualquer outro resultado, ele continua jogando os dois dados até que saia um 7, caso em que ele perde, ou então saia novamente o primeiro resultado, caso em que ele ganha. A probabilidade de obter um desses resultados restantes é de cerca de 66,67%. No entanto, a probabilidade de rolar um 7 antes de repetir esse resultado é maior do que a probabilidade de repetir o resultado, o que significa que o jogador A provavelmente perderá nessa situação

Em resumo, as probabilidades de A vencer em um jogo de craps dependem dos valores iniciais de a e b, bem como das regras do jogo, e podem variar de muito baixas a relativamente altas, dependendo desses fatores.