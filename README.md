# Sistema de Estacionamento - Frontend (Angular)

Este projeto representa o **frontend** do sistema de estacionamento, desenvolvido com **Angular** e integrado ao backend em **Java Spring**. A aplicação fornece uma interface para gerenciamento de vagas, controle da cancela e exibição de mensagens administrativas. Todo o frontend está **dockerizado** e configurado para funcionar em conjunto com **Nginx** em produção.

## Estrutura do Projeto

O projeto está organizado em três diretórios principais dentro de `src`:

1. **Components**: Contém os componentes da aplicação que gerenciam a interface do usuário.
2. **Interfaces**: Define as **enums** e as interfaces de dados utilizadas pelos componentes e serviços.
3. **Services**: Contém todos os serviços da aplicação, divididos em:
   - **Serviços de requisições ao backend**: Responsáveis por interagir com a API REST do backend em Java Spring.
   - **Serviço de interceptação**: Adiciona o token JWT no header de todas as requisições feitas pela aplicação.
   - **Serviço de sessão**: Armazena a sessão do usuário e verifica qual é o papel (**role**) do usuário, controlando o acesso aos componentes e funcionalidades.
   - **Serviços de utilidades (utils)**: Contém funcionalidades reutilizáveis em diferentes partes da aplicação.
   - **Serviço de autenticação**: Gerencia a autentificação dos usuários.

## Controle de Acesso e Autenticação

- **`auth.guard.ts`**: Verifica se o usuário está autenticado antes de permitir o acesso a determinadas rotas.
- **`app-routing.module.ts`**: Gerencia a navegação da aplicação, especificando quais usuários, com base em seus papéis, têm acesso a quais páginas e componentes.

## Docker e Nginx

O frontend está configurado para ser executado dentro de um container **Docker**, servido por **Nginx**.

### Como Rodar Localmente com Docker

1. **Criação da Imagem**:
   Para criar a imagem Docker da aplicação Angular:
   ```
   docker build -t park-front-local:1.0 .
   ```

2. **Executar o Docker Compose**:
   Na pasta principal do projeto, execute:
   ```
   docker compose up
   ```
   Isso irá subir a aplicação frontend juntamente com o backend e o banco de dados **PostgreSQL**.

### Arquivo `docker-compose.yml`

O `docker-compose.yml` da aplicação define três serviços principais:

1. **Postgres**: Banco de dados utilizado pela aplicação.
2. **Backend (Java)**: O serviço que executa o backend da aplicação.
3. **Frontend (Angular)**: O serviço que executa a aplicação Angular, servida via Nginx.

Ao criar a imagem do Angular, a imagem do Nginx é automaticamente usada para servir a aplicação. O Nginx está configurado para realizar um **proxy reverso** das requisições feitas ao backend.

## Deploy em Produção

Para realizar o deploy da aplicação em produção, algumas etapas adicionais são necessárias:

1. **Arquivo `nginx-prod.conf`**: Configure o Nginx para o domínio de produção, incluindo o certificado SSL.
2. **Dockerfile**: Certifique-se de que a porta **443** está configurada no Dockerfile para permitir requisições HTTPS.
3. **Proxy Reverso**: O Nginx já está configurado para atuar como um proxy reverso, redirecionando as requisições da interface frontend para o backend (que roda em HTTP).

## Considerações

- O frontend depende do backend para realizar login e outras operações relacionadas às vagas de estacionamento e controle da cancela.
- Em produção, certifique-se de que o backend e o frontend estão devidamente configurados com os domínios e certificados SSL corretos.
- O sistema foi estruturado com **serviços modulares**, facilitando a manutenção e a escalabilidade da aplicação.
