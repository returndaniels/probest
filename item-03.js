const { playCraps } = require("./item-01");

let winCounter = 0;
for (let i = 0; i < 10000; i++) {
  console.log(`Iniciando o jogo nº ${i + 1}.`);
  let [_v, result] = playCraps();
  console.log(
    `Jogo nº ${i + 1} encerrado, com um(a) ${
      result == 1 ? "vitória" : "derrota"
    }.`
  );
  if (result == 1) winCounter++;
}

console.log("Número de vitórias:", winCounter);

/**
 *
 * Primeira execução: 100 jogos e 40 vitórias
 *    Proporção (40/100) = 0.4 (40%)
 *
 * Segunda execução: 1000 jogos e 490 vitórias
 *    Proporção (490/1000) = 0.49 (49%)
 *
 * Terceira execução: 1000 jogos e 504 vitórias
 *    Proporção (504/1000) = 0.504 (50,4%)
 *
 * Quarta execução: 10000 jogos e 4893 vitórias
 *    Proporção (4893/10000) = 0.4893 (48,93%)
 *
 * Quarta execução: 10000 jogos e 4993 vitórias
 *    Proporção (4993/10000) = 0.4993 (49,93%)
 *
 * Total: 22100 jogos e 10920 vitórias
 *    Proporção (10920/22100) = 0.4941 (49,41%)
 *
 * A proporção varia de 40% a 50%, com a maioria dos resultados próximo a 49%.
 * Conforme o número de jogo aumenta o resultado se aproxima a 49%
 *
 */
