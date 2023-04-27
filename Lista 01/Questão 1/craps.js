function playCraps() {
  let result = []; // vetor para armazenar os valores das somas dos dados
  let diceSum = rollDice(); // lançamento inicial dos dados
  result.push(diceSum);

  if (diceSum === 7 || diceSum === 11) {
    return [result, 1]; // vitória
  } else if (diceSum === 2 || diceSum === 3 || diceSum === 12) {
    return [result, 0]; // derrota
  } else {
    let point = diceSum;
    diceSum = rollDice();
    result.push(diceSum);

    while (diceSum !== point && diceSum !== 7) {
      diceSum = rollDice();
      result.push(diceSum);
    }

    if (diceSum === point) {
      return [result, 1]; // vitória
    } else {
      return [result, 0]; // derrota
    }
  }
}

function rollDice() {
  let die1 = Math.floor(Math.random() * 6) + 1; // número aleatório entre 1 e 6
  let die2 = Math.floor(Math.random() * 6) + 1;
  return die1 + die2;
}

module.exports = { playCraps };
