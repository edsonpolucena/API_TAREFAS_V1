# API de Tarefas com Node.js e MySQL

Este projeto consiste em uma **API RESTful** desenvolvida com **Node.js** e **MySQL** para gerenciar tarefas. A API permite realizar as operações básicas de um CRUD (Criar, Ler, Atualizar, Excluir) para tarefas.

## Funcionalidades

A API oferece os seguintes endpoints para gerenciar as tarefas:

### **1. Criar uma nova tarefa**

- **Método**: `POST`
- **Endpoint**: `/notas`
- **Corpo da requisição**:
    ```json
    {
        "title": "Estudar Node.js"
    }
    ```
- **Descrição**: Cria uma nova tarefa com o título fornecido e status "Pendente".
- **Resposta**:
    ```json
    {
        "id": 1,
        "title": "Estudar Node.js",
        "status": "Pendente"
    }
    ```

### **2. Listar todas as tarefas**

- **Método**: `GET`
- **Endpoint**: `/notas`
- **Descrição**: Retorna uma lista com todas as tarefas cadastradas.
- **Resposta**:
    ```json
    [
        {
            "id": 1,
            "title": "Estudar Node.js",
            "status": "Pendente"
        },
        {
            "id": 2,
            "title": "Estudar Express.js",
            "status": "Concluída"
        }
    ]
    ```

### **3. Atualizar o status de uma tarefa**

- **Método**: `PUT`
- **Endpoint**: `/notas/:id`
- **Parâmetros**:
    - `id`: ID da tarefa a ser atualizada.
- **Corpo da requisição**:
    ```json
    {
        "status": "Concluída"
    }
    ```
- **Descrição**: Atualiza o status da tarefa com o ID fornecido.
- **Resposta**:
    ```json
    {
        "message": "Status atualizado com sucesso!"
    }
    ```

### **4. Excluir uma tarefa**

- **Método**: `DELETE`
- **Endpoint**: `/notas/:id`
- **Parâmetros**:
    - `id`: ID da tarefa a ser excluída.
- **Descrição**: Exclui a tarefa com o ID fornecido.
- **Resposta**:
    ```json
    {
        "message": "Tarefa excluída com sucesso!"
    }
    ```

## Tecnologias Utilizadas

- **Node.js**: Plataforma para desenvolvimento da API.
- **Express.js**: Framework para criação de servidores e rotas.
- **MySQL**: Banco de dados utilizado para armazenar as tarefas.
- **mysql2**: Biblioteca para conectar o Node.js ao MySQL.

## Configuração do Projeto

### Pré-requisitos

- **Node.js**: Instale o Node.js na sua máquina.
- **MySQL**: Instale o MySQL e crie um banco de dados chamado `notasdb`.

### Instalando Dependências

1. Clone o repositório:
    ```bash
    git clone https://github.com/edsonpolucena/API_TAREFAS_V1.git
    ```

2. Navegue até a pasta do projeto:
    ```bash
    cd API_TAREFAS
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

### Configuração do Banco de Dados

1. Abra o MySQL e crie o banco de dados:
    ```sql
    CREATE DATABASE notasdb;
    ```

2. Crie a tabela `notas` no banco de dados `notasdb`:
    ```sql
    CREATE TABLE notas (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        status ENUM('Pendente', 'Concluída') DEFAULT 'Pendente'
    );
    ```

### Executando a API

1. Para iniciar o servidor, execute o seguinte comando:
    ```bash
    npm start
    ```

2. A API estará rodando em `http://localhost:3000`.

## Contribuições

Sinta-se à vontade para abrir **issues** ou enviar **pull requests** se tiver sugestões ou melhorias para o projeto.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).