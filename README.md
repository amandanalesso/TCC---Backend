Markdown

# APROVA-IFSP-API

A **APROVA-IFSP-API** é uma API para gerenciamento de questões e simulados, focada em provas anteriores do IFSP. A API permite a criação, listagem e atualização de questões, bem como a criação de simulados e o cálculo do desempenho baseado nas respostas dos usuários. O sistema contará com autenticação via JWT e gerenciamento de usuários.

## Tecnologias Utilizadas

*   **Node.js:** Ambiente de execução JavaScript no lado do servidor.
*   **Express:** Framework minimalista para Node.js para criar APIs de forma eficiente.
*   **TypeScript:** Superset de JavaScript que adiciona tipagem estática.
*   **MVC (Model-View-Controller):** Arquitetura para separar as responsabilidades do código em camadas.
*   **JWT (JSON Web Tokens):** Para autenticação e autorização de usuários.
*   **Banco de Dados (a definir):** PostgreSQL, MySQL ou MongoDB (escolher o mais adequado).
*   **Git:** Controle de versão para gerenciar o código-fonte.

## Funcionalidades

*   **Gerenciamento de Questões:** Criação, listagem, consulta, atualização e exclusão de questões das provas anteriores do IFSP.
*   **Simulados:** Criação de simulados personalizados com base nas questões cadastradas.
*   **Cálculo de Desempenho:** Calcula o desempenho do usuário com base nas respostas fornecidas nos simulados.
*   **Autenticação e Autorização:** Sistema de login com usuário e senha, utilizando JWT para garantir a segurança.
*   **Gerenciamento de Usuários:** Cadastro, listagem, atualização e exclusão de usuários (com níveis de acesso, se necessário, como administrador e usuário comum).

## Estrutura do Projeto

A estrutura de pastas do projeto segue o padrão **MVC (Model-View-Controller)**:

APROVA-IFSP-API/
├── TCC---Backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── questionController.ts
│   │   │   ├── simulatedController.ts
│   │   │   ├── userController.ts
│   │   ├── models/
│   │   │   ├── question.ts
│   │   │   ├── simulated.ts
│   │   │   ├── user.ts
│   │   ├── services/
│   │   │   ├── questionService.ts
│   │   │   ├── simulatedService.ts
│   │   │   ├── userService.ts
│   │   ├── routes/
│   │   │   ├── questionsRoutes.ts
│   │   │   ├── simulatedRoutes.ts
│   │   │   ├── userRoutes.ts
│   │   ├── database/
│   │   │   ├── migrations/ (para banco de dados relacional)
│   │   │   ├── seeders/ (para popular o banco de dados)
│   │   ├── middleware/ (para autenticação JWT)
│   │   ├── app.ts
│   │   ├── server.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md


## Checklist do Projeto

Este checklist detalha as etapas para o desenvolvimento do banco de questões e simulados do IFSP:

*   **[ ] Planejamento e Definição:**
    *   [ ] Definir o modelo do banco de dados (tabelas, campos, relacionamentos).
    *   [ ] Escolher e configurar o banco de dados (PostgreSQL, MySQL, MongoDB, etc.).
    *   [ ] Definir as rotas da API (endpoints).
    *   [ ] Definir a estrutura de autenticação e autorização (JWT).
*   **[ ] Implementação do Backend:**
    *   [ ] Criar os modelos (Models) para questões, simulados e usuários.
    *   [ ] Implementar os serviços (Services) para cada entidade (questões, simulados, usuários).
    *   [ ] Implementar os controladores (Controllers) para lidar com as requisições da API.
    *   [ ] Criar as rotas (Routes) para expor os endpoints da API.
    *   [ ] Implementar a lógica de autenticação e geração de JWT.
    *   [ ] Implementar o sistema de cadastro e gerenciamento de usuários.
    *   [ ] Implementar a lógica de geração de simulados.
    *   [ ] Implementar a lógica de cálculo de desempenho.
    *   [ ] Implementar os testes unitários e de integração.
*   **[ ] Importação das Questões:**
    *   [ ] Definir um formato para importar as questões das provas anteriores (CSV, JSON, etc.).
    *   [ ] Criar um script ou processo para importar as questões para o banco de dados.
    *   [ ] Validar a integridade dos dados importados.
*   **[ ] Testes e Refinamento:**
    *   [ ] Testar todas as funcionalidades da API.
    *   [ ] Corrigir bugs e realizar melhorias de desempenho.
    *   [ ] Documentar a API (Swagger ou similar).
*   **[ ] Deploy (opcional para o TCC, mas recomendado para portfólio):**
    *   [ ] Escolher uma plataforma de hospedagem (Heroku, AWS, Google Cloud, etc.).
    *   [ ] Configurar o deploy da API.

## Como Rodar o Projeto (mantido)

(Conteúdo anterior sobre como rodar o projeto - manter)

## Testando a API (mantido e adaptado)

(Conteúdo anterior sobre testes - manter e adicionar exemplos com autenticação)

Exemplo de rota com autenticação (requer token JWT no header `Authorization`):

#### Listar Usuários (requer autenticação de administrador)

*   **Método:** `GET`
*   **Endpoint:** `/users`
*   **Header:** `Authorization: Bearer <token_JWT>`

## Git Workflow (mantido)

(Conteúdo anterior sobre Git - manter)

## Licença (mantido)

(Conteúdo anterior sobre licença - manter)
