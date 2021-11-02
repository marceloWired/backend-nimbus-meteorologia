# Desafio Nimbus Meteorologia


## Descrição

Projeto desenvolvido durante a segunda fase do processo seletivo de Desenvolvedor Fullstack da empresa [Nimbus Meteorologia](https://www.linkedin.com/company/nimbusmeteorologia/)

## Pré requisitos

Para rodar o projeto, você precisará de algumas dependências previamente instaladas:

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) ou NPM

## Clonando o repositório 

Para baixar o repositório localmente, basta utilizar o seguinte comando em seu terminal de preferência:

```bash
$ git clone https://github.com/marceloWired/backend-nimbus-meteorologia.git
```

## Instalando dependências

<p>Após clonar o repositório, você precisará instalar as dependências do projeto.</p>

<p>Para isso, basta navegar até a pasta do projeto e rodar o seguinte comando</p>

```bash
# navegando até a pasta
$ cd ./backend-nimbus-meteorologia

# instalando dependências: para Yarn
$ yarn

# instalando dependências: para NPM
$ npm install
```

## Rodando o projeto

<p>Uma vez que instalada todas as dependências, você já pode rodar a aplicação! Basta utilizar o comando:</p>

```bash
# para Yarn
$ yarn dev

# para NPM
$ npm run dev
```

Por padrão, a aplicação irá rodar na porta 3001.

## Rota de cadastro

<p>Para cadastrar novos dados de clima, a API espera uma chamada do tipo POST na rota <i>http://localhost:3001/api/weather</i> contendo no corpo da requisição um objeto JSON com o seguinte modelo:</p>

```bash
{
  "city": string,
  "district": string,
  "milimeters": number,
  "date": date,
  "hour": string
}
```

## Testes

<p>Devido aos problemas que tive e ao tempo reduzido para realizar o projeto, não foi possível fazer uma cobertura completa de testes. </p>

<p>Porém, para executar os testes existentes, basta rodar o comando:</p>

```bash
# pra Yarn
$ yarn test

# para NPM
$ npm run test
```

## Frontend 

<p>Para rodar o frontend que consome esta API, basta clicar <a href="https://github.com/marceloWired/front-end-nimbus-meteorologia">aqui</a>.</p>