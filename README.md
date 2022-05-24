<h1 align="center">Data-Covid - Frontend</h1>

<p align="center">Este projeto representa a interface de usuário do sistema data-covid e tem como objetivo apresentar os dados referentes à Covid-19 no DF por meio de dashboards.</p>

Índice
=================
<!--ts-->
   * [Instalação](#instalacao)
   * [Como usar](#como-usar)
   * [Features](#features)
   * [Tecnologias](#tecnologias)
<!--te-->


<h2 id="instalacao">Instalação</h2>

Para rodar a aplicação de forma local (na sua máquina), siga os passos abaixo:
### Clone este repositório
```
$ git clone https://github.com/gusthavosantana/data-covid-frontend.git
```
### Acesse a pasta do projeto
```
$ cd data-covid-frontend
```

### Variáveis de ambiente
Copie o arquivo .env.example, renomeie para .env e preencha as variáveis de ambiente.

### Instale as dependências
```
$ yarn
```

<h2 id="como-usar">Como usar</h2>

### Faça o build da aplicação
```
$ yarn build
```
### Inicie o servidor
```
$ yarn start
```

### Acesse a aplicação
Para acessar a aplicação use o endereço: `http://localhost:3041`

<h2 id="features">Features</h2>

- [x] Apresentar dados sobre doses de vacina
- [x] Apresentar dados sobre o estoque de vacinas
- [x] Apresentar dados sobre doses por região
- [x] Apresentar dados sobre casos de covid (total/novos casos)
- [x] Apresentar total por situação (recuperado/ativo)
- [x] Apresentar total de casos por faixa etária
- [] Apresentar dados sobre óbitos
- [] Apresentar dados de testagem
- [] Permitir filtrar os dados do dashboard

<h2 id="tecnologias">🛠 Tecnologias</h2>

As seguintes ferramentas foram usadas para construir este projeto:

- [React](https://nodejs.org/en/)
- [React Router DOM](https://reactrouterdotcom.fly.dev/)
- [MUI](https://mui.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Nextjs](https://nextjs.org/)
