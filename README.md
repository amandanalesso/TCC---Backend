
# APROVA-IFSP-API

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


## Checklist do Projeto

Este checklist detalha as etapas para o desenvolvimento do banco de questões e simulados do IFSP:

*   **Planejamento e Definição:**
    *   [ ] Definir o modelo do banco de dados (tabelas, campos, relacionamentos).
    *   [ ] Escolher e configurar o banco de dados (PostgreSQL, MySQL, MongoDB, etc.).
    *   [ ] Definir as rotas da API (endpoints).
    *   [ ] Definir a estrutura de autenticação e autorização (JWT).
*   **Implementação do Backend:**
    *   [ ] Criar os modelos (Models) para questões, simulados e usuários.
    *   [ ] Implementar os serviços (Services) para cada entidade (questões, simulados, usuários).
    *   [ ] Implementar os controladores (Controllers) para lidar com as requisições da API.
    *   [ ] Criar as rotas (Routes) para expor os endpoints da API.
    *   [ ] Implementar a lógica de autenticação e geração de JWT.
    *   [ ] Implementar o sistema de cadastro e gerenciamento de usuários.
    *   [ ] Implementar a lógica de geração de simulados.
    *   [ ] Implementar a lógica de cálculo de desempenho.
    *   [ ] Implementar os testes unitários e de integração.
*   **Importação das Questões:**
    *   [ ] Definir um formato para importar as questões das provas anteriores (CSV, JSON, etc.).
    *   [ ] Criar um script ou processo para importar as questões para o banco de dados.
    *   [ ] Validar a integridade dos dados importados.
*   **Testes e Refinamento:**
    *   [ ] Testar todas as funcionalidades da API.
    *   [ ] Corrigir bugs e realizar melhorias de desempenho.
    *   [ ] Documentar a API (Swagger ou similar).
*   **Deploy (opcional para o TCC, mas recomendado para portfólio):**
    *   [ ] Escolher uma plataforma de hospedagem (Heroku, AWS, Google Cloud, etc.).
    *   [ ] Configurar o deploy da API.

    ## Protótipo no Figma

O protótipo de alta fidelidade do projeto foi desenvolvido no **Figma**. A seguir, você encontrará o link para o design do simulador, onde todas as telas e interações foram criadas:

- **[Protótipo de Alta Fidelidade no Figma](https://www.figma.com/design/Hb3EoYtiaOYegAr9pLkWGx/FINAL-TCC---Simulado---Prot%C3%B3tipo-alta-fidelidade?node-id=8-10&t=v895wDS2u80Q9khL-0)**

  - Neste link, você pode explorar o protótipo completo, que inclui todas as interações e fluxos do simulador desenvolvido para o **TCC**.
  - O protótipo foi desenvolvido com foco na **experiência do usuário** (UX) e na **interface do usuário** (UI).

---

## Apresentação

A apresentação do projeto está disponível no **Google Slides**. Aqui, você poderá visualizar todos os detalhes, objetivos, arquitetura e implementação do sistema:

- **[Apresentação do Projeto no Google Slides](https://docs.google.com/presentation/d/1ntS_8KJwDEszyJnulGH0Pw5PBHZAsKLfJiu77gUmUB4/edit?usp=sharing)**

  - A apresentação abrange aspectos como **motivação**, **metodologia**, **tecnologias utilizadas**, além de uma demonstração das funcionalidades da API e do protótipo.
  - A estrutura está organizada para fornecer uma visão clara sobre a solução desenvolvida e os desafios enfrentados.

---

## Como Explorar o Protótipo

Para visualizar e interagir com o protótipo no Figma:

1. **Clique no link acima** para abrir o protótipo no Figma.
2. **Use a ferramenta de navegação do Figma** para clicar entre as telas e explorar o fluxo de usuário.
3. Caso tenha uma conta no Figma, é possível também deixar comentários ou sugestões diretamente no protótipo.

## Detalhes da Apresentação

Na apresentação no Google Slides, você pode conferir:

- **Visão Geral** do projeto.
- **Explicação sobre a Stack** usada no desenvolvimento da API.
- **Demonstração das Funcionalidades** principais do simulador.
- **Resultados Obtidos** e futuras melhorias.

---


