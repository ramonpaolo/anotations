# Project 'Anotations' 

To run docker in development, execute: `$ docker compose -f ./docker-compose-dev.yaml up --build`

## 📑 Sobre o projeto

É uma aplicação web(Front-end e Back-end), que funciona como um site de anotações

## Como Funciona ?

A aplicação consiste em poder criar e visualizar anotações criadas pelo usuário devidamente logado.

O usuário poderá criar uma anotação, com título, subtítulo, texto, e escolher a cor da anotação.

O site também possui modo dark e modo light, podendo ser trocado a qualquer instante de tema.

O usuário poderá criar, atualizar e deletar os posts.

Figma do Projeto: https://www.figma.com/file/DF6ZlkdK1jaqtNFeE9hCyZ/to-do?node-id=0%3A1

---

## Como Funciona de forma técnica?

Bom, o back-end do site, onde são armazenados os dados do usuário, é usado o ORM sequelize junto com o banco de dados Postgresql. E para as anotações, é usado o banco de dados NoSQL MongoDB com Schema.

Toda requisição do usuário, referente as anotações, passam por um middleware de verificação de usuário, e também por uma verificação para ver se a anotação é do usuário que está solicitando.

É utilizado o banco de dados Redis para guardar o cache dos dados das anotações do usuário, com validade de 1 hora cada anotação, para utilizar menos o banco de dados, e melhorar a velocidade de resposta da aplicação, junto com um melhoramento de requests maior por segundo.

---

# 🚀 Tecnologias Utilizadas no Front-end
- ReactJs
- TypeScript
- Redux
- Axios
- Tailwind CSS
- Eslint

# 🚀 Tecnologias Utilizadas no Back-end
- NodeJs
- TypeScript
- Jest
- Express
- MongoDB
- Postgresql
- Sequelize
- Redis
- Docker
- Nginx
- Eslint

---

# 📁 Como executar o projeto?

## Pré-requesitos: 
- NodeJs 14.17 LTS
- Yarn 1.22
- Docker

```bash
# clonar repositório
$ git clone https://github.com/ramonpaolo/anotations

# entrar na pasta do projeto
$ cd anotations/

# instalar as depêndencias:
$ yarn

# iniciar o projeto:
$ yarn start
```

![GitHub top language](https://img.shields.io/github/languages/top/ramonpaolo/anotations)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ramonpaolo/anotations)
![GitHub](https://img.shields.io/github/license/ramonpaolo/anotations)
