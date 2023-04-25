const { playCraps } = require("./item-01");

console.log(playCraps());
console.log(playCraps());
console.log(playCraps());
console.log(playCraps());
console.log(playCraps());

/**
 * Execuções:
 *
 * 1. [ [ 4, 8, 7 ], 0 ]: Derrota
 * 2. [ [ 8, 7 ], 0 ]: Derrota
 * 3. [ [ 3 ], 0 ]: Derrota
 * 4. [ [ 7 ], 1 ]: Vitória
 * 5. [ [ 10, 3, 7 ], 0 ]: Derrota
 *
 * Analisando as execuções registradas, presumimos que é mais
 * comum obtermos cegarmos a uma derrota do que a uma vitória
 * nesse jogo de cartas.
 */
