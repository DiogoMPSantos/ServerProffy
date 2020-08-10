# ServerProffy
ApiRest for Proffy Aplication

# Instalar Dependências do Projeto

npm install or yarn

# Criacao de Comandos Personalizados

Adicionar ao arquivo package.json
"scripts": {
    "start": "tsnd --transpile-only --ignore-watch node_modules --respawn src/server.ts",
    "knex:migrate": "knex --knexfile knexfile.ts migrate:latest",
    "knex:migrate:rollback": "knex --knexfile knexfile.ts migrate:rollback"
  },
  

# Criacao do Database

knex:migrate

# Iniciar Server

npm start or yarn start

# Rotas  da API

Post: '/classes'  - Cadastrar Nova Turma com Professor e Horarios
Get: '/classes' - Buscar Proffys a partir dos Filtros (Time, Week Day, Subject)
Post: '/connections'  - Cadastrar Nova Conexão Realizada com Professor
Get: '/connections' - Buscar Total de Conexões Realizadas



