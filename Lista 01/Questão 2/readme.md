# Lottery Simulation

Este programa é uma simulação de loteria em JavaScript que gera 6 números aleatórios de 1 a 60 e compara com os 6 números escolhidos pelo usuário (ou com um conjunto de números padrão, caso nenhum seja fornecido). O programa verifica quantos números foram acertados e retorna 1 se o usuário acertou na quina (5 números)/quadra (4 números) ou 0 caso contrário.

## Como utilizar

O programa pode ser executado de duas maneiras:

### 1. Como um módulo

O programa pode ser utilizado como um módulo em outro código JavaScript. Para isso, basta importar a função lotterySimulation de lottery-simulation.js e chamá-la com os parâmetros desejados:

```javascript
const lotterySimulation = require("./lottery-simulation-quina.js"); // Testa quina
// const lotterySimulation = require("./lottery-simulation-quadra.js"); // Testa quadra

const result = lotterySimulation({ chosenNumbers: [1, 2, 3, 4, 5, 6], verboseMode: true });
console.log(result);

```

O objeto de opções passado como parâmetro para a função ```lotterySimulation``` pode ter as seguintes propriedades:

 - ```chosenNumbers```: um array com os números escolhidos pelo usuário (opcional).
 - ```verboseMode```: um booleano indicando se a função deve imprimir informações sobre os números escolhidos, números sorteados e número de acertos (opcional, padrão é true).

 A função ```lotterySimulation``` retorna 1 se o usuário acertou na quina/quadra ou 0 caso contrário.

 ### 2. Como um script na linha de comando

 O programa também pode ser executado diretamente na linha de comando. Para isso, basta chamar o arquivo ```lottery-simulation-quina.js``` (ou ```lottery-simulation-quadra.js``` para exemplo com quadra) passando a opção --run e os números escolhidos como argumentos:

 ```bash
 node lottery-simulation-quina.js --run 1 2 3 4 5 6
 node lottery-simulation-quadra.js --run 1 2 3 4 5 6
 ```

 O programa irá filtrar os argumentos numéricos válidos e executar a simulação da loteria, imprimindo o resultado na tela.

 ## Funções

 O programa contém duas funções:

 ### 1. ```print(enabled, ...args)```

 Esta função imprime os argumentos ```...args``` no console se ```enabled``` for verdadeiro. Caso contrário, não faz nada.

 ### 2. ```lotterySimulation({ chosenNumbers, verboseMode = true })```

 sta função executa a simulação da loteria com base nos parâmetros passados. O objeto de opções pode ter as mesmas propriedades descritas acima.

A função gera 6 números aleatórios de 1 a 60 e compara com os números escolhidos pelo usuário (ou com um conjunto de números padrão, caso nenhum seja fornecido). A função verifica quantos números foram acertados e retorna 1 se o usuário acertou na quina (5 números)/quadra (4 números) ou 0 caso contrário.

A função também imprime informações sobre os números escolhidos, números sorteados e número de acertos, se verboseMode for verdadeiro.