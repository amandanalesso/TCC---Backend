

echo "# APROVA-IFSP-API

A **APROVA-IFSP-API** é uma API para gerenciamento de questões e simulados. A API permite a criação, listagem e atualização de questões, bem como a criação de simulados e o cálculo do desempenho baseado nas respostas dos usuários.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework minimalista para Node.js para criar APIs de forma eficiente.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **MVC (Model-View-Controller)**: Arquitetura para separar as responsabilidades do código em camadas.
- **Git**: Controle de versão para gerenciar o código-fonte.

## Funcionalidades

- **Gerenciamento de Questões**: Criação, listagem e consulta de questões.
- **Simulados**: Criação de simulados com questões cadastradas.
- **Cálculo de Desempenho**: Calcula o desempenho do usuário com base nas respostas fornecidas.

## Estrutura do Projeto

A estrutura de pastas do projeto segue o padrão **MVC (Model-View-Controller)**:

```
APROVA-IFSP-API/
├── TCC---Backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── questionController.ts
│   │   │   ├── simulatedController.ts
│   │   ├── models/
│   │   │   ├── question.ts
│   │   │   ├── simulated.ts
│   │   ├── services/
│   │   │   ├── questionService.ts
│   │   │   ├── simulatedService.ts
│   │   ├── routes/
│   │   │   ├── questionsRoutes.ts
│   │   │   ├── simulatedRoutes.ts
│   │   ├── database/
│   │   │   ├── questions.json
│   │   ├── app.ts
│   │   ├── server.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Como Rodar o Projeto

### **Pré-requisitos**

Antes de rodar o projeto, certifique-se de que você tenha as seguintes ferramentas instaladas:

- **Node.js** (recomendado versão 16 ou superior): [Instalar Node.js](https://nodejs.org/)
- **npm**: Gerenciador de pacotes do Node (geralmente já instalado junto com o Node.js).

### **Passos para Instalação**

1. **Clone o repositório**:

   Primeiro, clone o repositório para sua máquina local:

   \`\`\`bash
   git clone https://github.com/amandanalesso/TCC---Backend.git
   cd TCC---Backend
   \`\`\`

2. **Instale as dependências**:

   Instale todas as dependências necessárias utilizando o npm:

   \`\`\`bash
   npm install
   \`\`\`

3. **Rodar a aplicação**:

   Após a instalação das dependências, inicie o servidor com o comando:

   ```bash
   npm start
   ```

   O servidor estará rodando na porta **3000**.

### **Testando a API**

Você pode testar as rotas da API utilizando ferramentas como **Postman** ou **Insomnia**. Aqui estão alguns exemplos de rotas para testar:

#### **1. Listar Questões**
- **Método**: `GET`
- **Endpoint**: `/questions`
- **Descrição**: Retorna todas as questões cadastradas.

#### **2. Criar Questão**
- **Método**: `POST`
- **Endpoint**: `/questions`
- **Exemplo de Corpo**:
  \`\`\`json
  {
    "id": 1,
    "enunciado": "Qual é a capital do Brasil?",
    "alternativas": ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
    "respostaCorreta": "Brasília",
    "nivel": "facil"
  }
  ```

#### **3. Criar Simulado**
- **Método**: `POST`
- **Endpoint**: `/simulated`
- **Exemplo de Corpo**:
  \`\`\`json
  {
    "titulo": "Simulado de Geografia",
    "questionIds": [1, 2]
  }
  \`\`\`

#### **4. Calcular Desempenho do Simulado**
- **Método**: `POST`
- **Endpoint**: `/simulated/:id/performance`
- **Exemplo de Corpo**:
  \`\`\`json
  {
    "responses": ["Brasília", "Pedro Álvares Cabral"]
  }
  \`\`\`

## Git Workflow

### **1. Clonar o Repositório**
Para começar a trabalhar no projeto, clone o repositório:

\`\`\`bash
git clone https://github.com/amandanalesso/TCC---Backend.git
\`\`\`

### **2. Criar uma Branch para Nova Feature**
Crie uma nova branch para trabalhar em uma feature:

\`\`\`bash
git checkout -b minha-feature
\`\`\`

### **3. Commitar as Alterações**
Após fazer as alterações, faça o commit:

\`\`\`bash
git add .
git commit -m "Descrição das alterações"
\`\`\`

### **4. Enviar para o Repositório**
Envie suas alterações para o repositório remoto:

\`\`\`bash
git push origin minha-feature
\`\`\`

### **5. Criar um Pull Request**
Após enviar suas alterações, crie um **Pull Request** no GitHub para que as mudanças possam ser revisadas e integradas ao projeto principal.

## Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
" > README.md



```APROVA-IFSP-API/
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
│   │   │   ├── migrations/
│   │   │   ├── seeders/
│   │   ├── middleware/
│   │   ├── app.ts
│   │   ├── server.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
