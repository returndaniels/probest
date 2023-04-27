function print(enabled, ...args) {
  if (enabled) console.log(...args);
}

function lotterySimulation({ chosenNumbers, verboseMode = true }) {
  // Gerando os números aleatórios
  let drawnNumbers = [];
  while (drawnNumbers.length < 6) {
    let randomNum = Math.floor(Math.random() * 60) + 1;
    if (drawnNumbers.indexOf(randomNum) === -1) {
      drawnNumbers.push(randomNum);
    }
  }

  // Verificando se há números escolhidos
  if (chosenNumbers?.length !== 6) {
    chosenNumbers = [1, 5, 10, 20, 30, 40]; // Exemplo de números escolhidos
  }

  // Verificando quantos números foram acertados
  let hits = 0;
  for (let i = 0; i < chosenNumbers.length; i++) {
    if (drawnNumbers.indexOf(chosenNumbers[i]) !== -1) {
      hits++;
    }
  }

  // Imprimindo resultado
  print(verboseMode, "Números escolhidos:", chosenNumbers.join(", "));
  print(verboseMode, "Números sorteados:", drawnNumbers.join(", "));
  print(verboseMode, `Número de acertos: ${hits}`);

  // Retornando 1 se acertou na quina, 0 caso contrário
  if (hits === 5) {
    print(verboseMode, "Parabéns! Você acertou na quina!");
    return 1;
  } else {
    print(verboseMode, "Infelizmente você não acertou na quina.");
    return 0;
  }
}

// Verificando se o programa foi chamado com --run na linha de comando
if (process.argv.includes("--run")) {
  // Obtendo os números escolhidos, caso tenham sido passados como argumentos
  let chosenNumbers = process.argv.slice(2).map(Number);

  // Filtrando 6 primeiros argumentos numéricos válidos
  chosenNumbers = chosenNumbers
    .filter((el) => !isNaN(el) && el <= 60 && el >= 1)
    .slice(0, 6);

  // Executando a simulação da loteria
  lotterySimulation({ chosenNumbers });
}

module.exports = lotterySimulation;
