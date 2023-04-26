const lotterySimulation = require("./item-01");

function estimateQuinaProbability(numSimulations) {
  let numQuinas = 0;

  for (let i = 0; i < numSimulations; i++) {
    let result = lotterySimulation({ verboseMode: false });
    if (result === 1) {
      numQuinas++;
    }
  }

  let probability = numQuinas / numSimulations;
  console.log(
    `Estimativa da probabilidade de acertar na quina: ${probability}`
  );
  return probability;
}

estimateQuinaProbability(1000000);

/**
 *
 * Este programa rodou a simuluçaõ da lotérica 1.000.000 vezes e respondeu:
 * "Estimativa da probabilidade de acertar na quina: 0.000012"
 *
 * Que é significa que a chance de acertar na quina é de 0.0012%
 *
 */
