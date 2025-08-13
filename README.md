# Fórum Q&A API

API de um fórum de perguntas e respostas, construído com NestJS e seguindo os princípios de Clean Architecture.

## Descrição

Esta aplicação é o back-end para uma plataforma de fórum, similar ao Stack Overflow. Usuários podem se registrar, criar perguntas, respondê-las, comentar em perguntas e respostas, e muito mais. O sistema é desenhado para ser escalável e manutenível, utilizando uma arquitetura limpa para separar as preocupações e facilitar o desenvolvimento e testes.

## Principais Tecnologias

- **Framework:** [NestJS](https://nestjs.com/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/) (utilizado com Prisma)
- **Autenticação:** [JWT](https://jwt.io/) (JSON Web Tokens)
- **Testes:** [Vitest](https://vitest.dev/)
- **Cache:** [Redis](https://redis.io/)
- **Upload de Arquivos:** Suporte para upload de arquivos (ex: R2 Storage)
- **Linting:** [ESLint](https://eslint.org/)
- **Validação:** [Zod](https://zod.dev/)

## Arquitetura

O projeto segue os princípios da **Clean Architecture**, separando o código em quatro camadas principais:

- `src/core`: Contém a lógica de negócio mais genérica e os blocos de construção do domínio (Entidades, Value Objects, Use Cases, etc.).
- `src/domain`: Contém a lógica de negócio específica da aplicação, dividida por contextos (ex: `forum`, `notification`).
- `src/infra`: Contém os detalhes de implementação, como controladores HTTP, módulos do NestJS, acesso ao banco de dados, etc.
- `test`: Contém os testes da aplicação, incluindo testes unitários e end-to-end.

## Rotas da API (Endpoints)

A seguir, a lista de rotas disponíveis na API:

### Autenticação

- `POST /sessions`: Autentica um usuário e retorna um `access_token`.
- `POST /accounts`: Cria uma nova conta de usuário.

### Perguntas

- `POST /questions`: Cria uma nova pergunta.
- `GET /questions`: Lista as perguntas mais recentes.
- `GET /questions/:slug`: Busca uma pergunta pelo seu slug.
- `PUT /questions/:id`: Edita uma pergunta.
- `DELETE /questions/:id`: Deleta uma pergunta.

### Respostas

- `POST /questions/:questionId/answers`: Adiciona uma resposta a uma pergunta.
- `GET /questions/:questionId/answers`: Lista as respostas de uma pergunta.
- `PUT /answers/:id`: Edita uma resposta.
- `DELETE /answers/:id`: Deleta uma resposta.
- `PATCH /answers/:answerId/choose-as-best`: Marca uma resposta como a melhor.

### Comentários

- `POST /questions/:questionId/comments`: Adiciona um comentário a uma pergunta.
- `GET /questions/:questionId/comments`: Lista os comentários de uma pergunta.
- `DELETE /questions/comments/:id`: Deleta um comentário de uma pergunta.
- `POST /answers/:answerId/comments`: Adiciona um comentário a uma resposta.
- `GET /answers/:answerId/comments`: Lista os comentários de uma resposta.
- `DELETE /answers/comments/:id`: Deleta um comentário de uma resposta.

### Anexos

- `POST /attachments`: Faz o upload de um anexo.

### Notificações

- `PATCH /notifications/:notificationId/read`: Marca uma notificação como lida.

## Como Começar

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/installation)
- [Docker](https://www.docker.com/get-started) (para o banco de dados)

### Instalação

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/rocketseat-education/05-nest-clean
    cd 05-nest-clean
    ```

2. **Instale as dependências:**

    ```bash
    pnpm install
    ```

3. **Configure o ambiente:**
    - Renomeie o arquivo `.env.example` para `.env`.
    - Preencha as variáveis de ambiente no arquivo `.env` com as suas configurações (banco de dados, chaves de segurança, etc.).

4. **Inicie o banco de dados com Docker:**

    ```bash
    docker-compose up -d
    ```

5. **Execute as migrações do Prisma:**

    ```bash
    pnpm prisma migrate dev
    ```

### Executando a Aplicação

- **Modo de desenvolvimento:**

  ```bash
  pnpm start:dev
  ```

  A aplicação estará disponível em `http://localhost:3333`.

- **Modo de produção:**

  ```bash
  pnpm build
  pnpm start:prod
  ```

### Executando os Testes

- **Testes unitários**

  ```bash
  pnpm test
  ```

- **Testes end-to-end (e2e):**

  ```bash
  pnpm test:e2e
  ```

<!--START_SECTION:footer-->

<br />
<br />

<p align="center">
  <a href="https://discord.gg/rocketseat" target="_blank">
    <img align="center" src="https://storage.googleapis.com/golden-wind/comunidade/rodape.svg" alt="banner"/>
  </a>
</p>

<!--END_SECTION:footer-->
