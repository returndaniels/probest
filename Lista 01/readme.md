# Lista de Exercícios 1

Este repositório é dedicado aos trabalhos da disciplina Estatística e Probabilidade oferecida no período 2023-1 do curso de Ciência da Computação da Universidade Federal do Rio de Janeiro (UFRJ). Aqui estão armazenados os trabalhos e códigos desenvolvidos pelos alunos ao longo do semestre. A disciplina tem como objetivo fornecer aos alunos uma base sólida de conceitos e técnicas estatísticas e de probabilidade que são essenciais para a compreensão e análise de dados em diferentes áreas de atuação, incluindo a ciência de dados, a inteligência artificial, a economia, a engenharia, entre outras.

## Participantes do grupo

- Ademario Santana (adeluigi@dcc.ufrj.br), DRE: 118143148 
- Daniel de Sousa da Silva (danielss@dcc.ufrj.br), DRE: 118064962

## Sobre o Desenvolvimento 

Este repositório contém aplicações escritas em Javascript que são executadas no Node.js. Para executar essas aplicações, é necessário ter o Node.js instalado em seu computador.

## Instalando o Node.js

É recomendada a instalação da versão mais recente do NodeJs para que não ocorram problemas ao exectar os programs.

### Usando um gerenciador de pacotes (Linux e Mac)

#### Linux (Distribuições baseadas em Debian)


Se você estiver usando uma distribuição Linux que possua um gerenciador de pacotes, como o apt, você pode instalar o Node.js com os seguintes comando:

1. Certifique-se de que seu sistema esteja atualizado executando os seguintes comandos:

```bash
sudo apt update
sudo apt upgrade
```

2. (Não recomendado) Caso queira instalar a versão a versão dispoível no "Main Ubuntu Repository" mas executar:

```bash
sudo apt install nodejs
```

2. (Recomendado) Para facilitar a instalação da versão do Node.js mais recente, é recomendado utilizar o Node Version Manager (NVM). Para instalar o NVM, execute o seguinte comando:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```


3. Feche e abra o terminal novamente ou execute o seguinte comando para carregar o NVM:

```bash
source ~/.bashrc
```

4. Agora, você pode instalar a versão mais recente do Node.js usando o NVM. Para verificar as versões disponíveis, execute o seguinte comando:

```
nvm ls-remote
```

5. Escolha a versão mais recente (ou a versão desejada) e instale-a. Por exemplo, para instalar a versão mais recente, execute:

```bash
nvm install node
```

6. Após a instalação, verifique se o Node.js foi instalado corretamente executando os seguintes comandos:

```bash
node --version
npm --version
```

#### Mac
No Mac, você pode usar o gerenciador de pacotes Homebrew para instalar o Node.js com o seguinte comando:

```bash
brew install node
```

### Baixando o pacote de instalação

Se você preferir, também pode baixar o pacote de instalação do Node.js diretamente do site oficial (https://nodejs.org). Faça o download da versão adequada para o seu sistema operacional e execute o instalador. Esse método pode ser utilizado por usuários de Windows, Linux e Mac.

## Executando um programa Javascript com o Node.js

Para executar um programa Javascript com o Node.js, abra o terminal do seu sistema operacional e navegue até a pasta onde o programa está localizado. Em seguida, digite o seguinte comando:

```bash
node nome_do_programa.js
```

Substitua "nome_do_programa.js" pelo nome do arquivo que contém o programa que você deseja executar.

Por exemplo, se você quiser executar o programa "exemplo.js" que está localizado na pasta "/home/user/meu_projeto", digite o seguinte comando no terminal:

```bash
cd /home/user/meu_projeto
node exemplo.js
```

Isso executará o programa e você verá a saída no terminal. Note que, dependendo do programa, pode ser necessário fornecer argumentos ou parâmetros adicionais. Verifique a documentação do programa para mais informações.


OBS: Alguns programas podem exigir que parâmetros sejam iseridos através da linha de comando e/ou podem ser importados como módulos em outros programas.