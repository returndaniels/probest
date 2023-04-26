const lotterySimulation = require("./item-03");

function estimateQuinaProbability(numSimulations) {
  let numQuadras = 0;

  for (let i = 0; i < numSimulations; i++) {
    let result = lotterySimulation({ verboseMode: false });
    if (result === 1) {
      numQuadras++;
    }
  }

  let probability = numQuadras / numSimulations;
  console.log(
    `Estimativa da probabilidade de acertar na quadra: ${probability}`
  );
  return probability;
}

estimateQuinaProbability(1000000);

/**
 *
 * Este programa rodou a simulação da lotérica 1.000.000 vezes e respondeu:
 * "Estimativa da probabilidade de acertar na quina: 0.000425"
 *
 * Que é significa que a chance de acertar na quina é de 0.0425%
 *
 */
