function playRound(a, b) {
  const resultA = rollDice() + rollDice() + a;
  const resultB = rollDice() + rollDice() + b;
  return resultA > resultB;
}

function playGame(a, b) {
  let pointsA = 0;
  let pointsB = 0;
  while (pointsA < 10 && pointsB < 10) {
    if (playRound(a, b)) {
      pointsA++;
    } else {
      pointsB++;
    }
  }
  return pointsA === 10;
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function estimateProbability(a, b, n) {
  let winsA = 0;
  for (let i = 0; i < n; i++) {
    if (playGame(a, b)) {
      winsA++;
    }
  }
  return winsA / n;
}

console.log(
  "Probabilidade de A vencer com valores a=7, b=8:",
  estimateProbability(7, 8, 100000)
);
console.log(
  "Probabilidade de A vencer com valores a=8, b=10:",
  estimateProbability(8, 10, 100000)
);
console.log(
  "Probabilidade de A vencer com valores a=6, b=10:",
  estimateProbability(6, 10, 100000)
);
console.log(
  "Probabilidade de A vencer com valores a=8, b=11:",
  estimateProbability(8, 11, 100000)
);
