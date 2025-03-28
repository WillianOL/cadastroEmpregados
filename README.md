<div> 
  <h1 align="center">Cadastro de empregados - Frontend & Backend</h1> 
</div>

<div>
  <h3 align="center">Projeto com frontend e backend</h3>
</div>

<div align='center'>
	<img src= "https://github.com/user-attachments/assets/70ecb1f4-b5b3-41af-a265-ccfe5b00c76c" width='950px'>
</div>

## Ferramentas utilizadas🛠️

<div>
	<p>Para a elaboração do projeto, foram usadas as tecnologias:</p>
  <div>
    <img src= "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width='100px'>
    <img src= "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" width='147px'>
    <img src= "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" width='120px'>
	<img src= "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" width='90px'>
	<img src= "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" width='120px'>
	<img src= "https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" width='110px'>
  </div>
</div>


## Sobre o projeto📃
Este é um sistema de cadastro de empregados desenvolvido em React, que permite gerenciar uma lista de empregados por meio de funcionalidades como adição, atualização e exclusão. A aplicação utiliza uma API REST para interagir com o backend.

### Deploy(vercel)✈

◻<a href="https://portifolio-plum-psi.vercel.app/">Portifólio</a>

---

# Cadastro de Empregados

### **Funcionalidades**
- **Listagem de Empregados**: Mostra os empregados cadastrados em uma tabela com nome, idade, cargo e data de adição.
- **Adição de Empregados**: Registra um novo empregado com dados fornecidos pelo usuário.
- **Atualização de Empregados**: Altera os dados de um empregado existente.
- **Exclusão de Empregados**: Remove um empregado da lista.
- **Integração com Backend**: Comunicação com a API REST hospedada em `https://backend-cadastroempregados.onrender.com/empregados`.

---

### **Estrutura do Projeto**

#### **Componente `App`**
- **Descrição**: Gerencia o estado global e exibe os componentes principais (`FormularioAdicao` e `UsuariosPainel`).
- **Funções Principais**:
  - `getEmployee`: Recupera a lista de empregados da API e atualiza o estado.
- **Estados**:
  - `listEmployee`: Armazena a lista de empregados.
  - `buttonStatus`: Define se o formulário está no modo de adição ou atualização.
  - `employeeId`: Identifica o empregado selecionado para edição.

---

#### **Componente `FormularioAdicao`**
- **Descrição**: Formulário para adicionar ou atualizar empregados.
- **Funções Principais**:
  - `createEmployee`: Envia os dados do novo empregado para o backend.
  - `updateEmployee`: Atualiza os dados de um empregado existente.
- **Estados**:
  - `userName`: Nome do empregado.
  - `userAge`: Idade do empregado.
  - `userPosition`: Cargo do empregado.
- **Props**:
  - `getEmployee`, `buttonStatus`, `setButtonStatus`, `employeeId`, `listEmployee`.

---

#### **Componente `UsuariosPainel`**
- **Descrição**: Exibe a tabela de empregados cadastrados e fornece opções para editar ou excluir.
- **Funções Principais**:
  - `deleteEmployee`: Remove um empregado do backend.
  - `employeeIdSet`: Define o empregado selecionado e alterna o modo do botão (editar/cancelar).
- **Props**:
  - `listEmployee`, `getEmployee`, `buttonStatus`, `setButtonStatus`, `setEmployeeId`.

---

#### **Função `gerarDataAtual`**
- **Descrição**: Gera a data atual no formato `dd-MM-yyyy`.
- **Código**:
  ```typescript
  function gerarDataAtual(): string {
    const data = new Date();
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1);
    const dia = String(data.getDate());

    return `${dia.length > 1 ? dia : '0' + dia}-${mes.length > 1 ? mes : '0' + mes}-${ano}`;
  }
  ```
---

#### **Componente `Input`**
- **Descrição**: Campo de entrada reutilizável para o formulário.
- **Props**:
  - `value`: Valor atual do campo.
  - `setValue`: Função para atualizar o valor.
  - `type`: Tipo do input (padrão: `text`).

---

#### **Componente `Select`**
- **Descrição**: Menu suspenso reutilizável para selecionar opções.
- **Props**:
  - `value`: Valor selecionado.
  - `setValue`: Função para atualizar o valor.
  - `options`: Lista de opções disponíveis.

---

### **Estrutura do Backend**

- **Backend**:
  - API RESTful para operações CRUD (Create, Read, Update, Delete).
  - Validações para garantir a consistência dos dados.
  - Gerenciamento de empregados no banco de dados utilizando Prisma.

#### **Configuração do Servidor**
O servidor é configurado no arquivo principal para lidar com requisições de diferentes origens (CORS) e gerenciar rotas.

**Código:**
```typescript
import express from 'express';
import cors from 'cors';
import { allRoutes } from './routes';

const port = process.env.PORT || 3001;

const app = express();

app.use(cors({
  origin: "https://cadastro-empregados.vercel.app",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type, Authorization",
}));
app.use(express.json());
app.use(allRoutes);

app.listen(3333, () => {
  console.log('Server rodando na porta 3333');
});
```

---

#### **Rotas da API**

##### **Criar Empregado (`POST /empregados`)**
Cria um novo empregado no banco de dados.

- **Corpo da Requisição**:
  ```json
  {
    "nome": "João",
    "idade": "30",
    "cargo": "Analista",
    "dataAdicao": "28-03-2025"
  }
  ```
- **Resposta**: Retorna o empregado criado com sucesso (código 201).

##### **Listar Empregados (`GET /empregados`)**
Recupera a lista de empregados armazenados.

- **Resposta**: Array de objetos com os dados dos empregados (código 200).

##### **Atualizar Empregado (`PUT /empregados`)**
Atualiza os dados de um empregado existente.

- **Corpo da Requisição**:
  ```json
  {
    "id": 1,
    "nome": "João Silva",
    "idade": "31",
    "cargo": "Gerente"
  }
  ```
- **Validações**:
  - ID é obrigatório.
  - O empregado deve existir no banco de dados.
- **Resposta**: Retorna o empregado atualizado (código 200).

##### **Excluir Empregado (`DELETE /empregados/:id`)**
Remove um empregado pelo ID.

- **Parâmetro da URL**:
  - `id`: ID do empregado a ser removido.
- **Validações**:
  - O ID é obrigatório.
  - O empregado deve existir no banco de dados.
- **Resposta**: Mensagem de sucesso ou erro.

---

### **Banco de Dados**
- O gerenciamento dos dados dos empregados é feito com o Prisma ORM, conectado ao banco de dados configurado no projeto.

---

### **Como Executar**

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o Prisma e o banco de dados:
   - Certifique-se de que o arquivo `prisma/schema.prisma` está configurado corretamente.

4. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor:
   ```bash
   npm run dev
   ```

O servidor estará disponível em: `http://localhost:3333`.

















