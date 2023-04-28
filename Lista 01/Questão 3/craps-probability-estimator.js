function simulateGame(a, b) {
  let pointsA = 0;
  let pointsB = 0;
  for (let i = 0; i < 10; i++) {
    const resultA = rollDice() + rollDice() + a;
    const resultB = rollDice() + rollDice() + b;
    if (resultA > resultB) {
      pointsA++;
    } else if (resultB > resultA) {
      pointsB++;
    }
    if (pointsA >= 10) {
      return "A";
    } else if (pointsB >= 10) {
      return "B";
    }
  }
  return null;
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function estimateProbabilityOfAVictory(a, b, n) {
  let victoriesA = 0;
  for (let i = 0; i < n; i++) {
    const winner = simulateGame(a, b);
    if (winner === "A") {
      victoriesA++;
    }
  }
  const probability = victoriesA / n;
  console.log(
    `Probabilidade de A vencer com valores a=${a}, b=${b}: ${probability}`
  );
}

estimateProbabilityOfAVictory(7, 8, 100000);
estimateProbabilityOfAVictory(8, 10, 100000);
estimateProbabilityOfAVictory(6, 10, 100000);
estimateProbabilityOfAVictory(8, 11, 100000);
