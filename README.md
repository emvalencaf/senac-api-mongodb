# Atividade 2 - Desafio - Desenvolvimento de API para Operações de CRUD

## Instruções

Desenvolva sua própria API em Node.JS. Você deve implementar todas as operações de CRUD para um entidade de sua preferência. Lembre-se de instalar o Node.JS e o Mongo DB para isso.
Você deve testar as rotas via Postman ou Insomnia.

## Solução

### Sobre a solução

A solução foi desenvolvida no *framework* Nest.JS o que facilitou no desenvolvimento de camadas na aplicações, as quais são:

1. **Controller**: correspondendo ao *endpoint* a ser acessado pelo usuário - é nessa camada em que é aplicada a lógica de negócio
2. **Service**: corresponde a aplicação da lógica necessária para a operação do CRUD.
3. **Repository**: corresponde, nesse projeto denominada como *schema*, a camada da aplicação que faz a chamadas a API do banco de dados (no caso, o *MongoDB*).

Além dessas camadas, cada camada é dividida em módulos, por exemplo: o Módulo Usuários (*users*) possui os `controller`, `services` e `repositories`, relacionados aos usuários.

### Como usar a solução

1. Em primeiro lugar é necessário abrir o terminal na raiz do projeto:
![Print em como abrir um terminal no VS Code](/docs/print-open-terminal.png)
2. O próximo passo é criar um arquivo `.env` na raiz do projeto e nele configurar a variável `DB_URL` que deverá apontar para o banco de dados MongoDB
![Print de como criar um arquivo .env](/docs/print-create-env-file.png)
![Print de como configurar o arquivo .env](/docs/print-set-env-var.png)
- **Observação**: Durante o desenvolvimento foi criado um banco de dados MongoDB na nuvem usando o serviço gratuito do [MongoDB](https://www.mongodb.com/)
3. Em seguida é preciso instalar localmente as dependências listadas no `package.json` usando o comando `npm i`:
![Print de como baixar as dependências localmente](/docs/print-install-deps.png)
4. Por fim, execute no terminal o comando `npm run start:dev` para subir localmente a API:
![Print subindo localmente a API](/docs/print-exec-api.png)
![Print mostrando como a API deve ficar quando for executada corretamente](/docs/print-run-api.png)

### [Documentação da API](https://documenter.getpostman.com/view/21997570/2sAXjF9uss)