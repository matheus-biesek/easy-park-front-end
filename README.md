# Sistema de Estacionamento - Frontend (Angular)

Este projeto representa o **frontend** do sistema de estacionamento, desenvolvido com **Angular** e integrado ao backend em **Java Spring**. A aplicação fornece uma interface para gerenciamento de vagas, controle da cancela e exibição de mensagens administrativas. Todo o frontend está **dockerizado** e configurado para funcionar em conjunto com **Nginx**.

## Estrutura do Projeto

O projeto está organizado em três diretórios principais dentro de `src`:

1. **Components**: Contém os componentes da aplicação que gerenciam a interface do usuário, divididos em:
   - **Navbar Top**: Exibe o nome da marca e outras informações relevantes no topo da página.
   - **Footer**: Mostra os direitos autorais do site e outras informações no rodapé.
   - **Navbar à Esquerda**: Navegação lateral que varia conforme o tipo de usuário:
     - **Navbar para Administradores**: Inclui opções de gerenciamento de vagas, usuários e mensagens.
     - **Navbar para Usuários Comuns**: Exibe opções mais restritas, como visualização de vagas e status.
   - **Controle da Cancela**: Componente que permite abrir e fechar a cancela do estacionamento.
   - **Status das Vagas**: Componente que exibe o status atual das vagas de estacionamento (ocupadas ou livres).
   - **Criar Vaga**: Permite ao administrador criar novas vagas de estacionamento.
   - **Deletar Vaga**: Componente usado para remover vagas existentes.
   - **Registro de Usuário**: Componente para o registro de novos usuários no sistema.
   - **Deletar Usuário**: Permite ao administrador remover usuários do sistema.
   - **Atualizar Role do Usuário**: Componente utilizado para alterar o papel (role) de um usuário (por exemplo, de comum para administrador).
   - **Visualizar Mensagem**: Exibe mensagens enviadas pelo administrador do site para os usuários.
   - **Enviar Mensagem (Admin)**: Permite que o administrador envie mensagens para todos os usuários ou grupos específicos.
   - **Login**: Componente para autenticação e login de usuários na aplicação.

2. **Interfaces**: Define as **enums** e as interfaces de dados utilizadas pelos componentes e serviços.

3. **Services**: Contém todos os serviços da aplicação, divididos em:
   - **Serviços de Requisições ao Backend**: Responsáveis por interagir com a API REST do backend em Java Spring.
   - **Serviço de Interceptação**: Adiciona o token JWT no header de todas as requisições feitas pela aplicação.
   - **Serviço de Sessão**: Armazena a sessão do usuário e verifica qual é o papel (**role**) do usuário, controlando o acesso aos componentes e funcionalidades.
   - **Serviços de Utilidades (Utils)**: Contém funcionalidades reutilizáveis em diferentes partes da aplicação.
   - **Serviço de Autenticação**: Gerencia a autentificação dos usuários.

## Controle de Acesso e Autenticação

- **`auth.guard.ts`**: Verifica se o usuário está autenticado antes de permitir o acesso a determinadas rotas.
- **`app-routing.module.ts`**: Gerencia a navegação da aplicação, especificando quais usuários, com base em seus papéis, têm acesso a quais páginas e componentes.

## Docker e Nginx

O frontend está configurado para ser executado dentro de um container **Docker**, servido por **Nginx**. No entanto, caso o usuário tenha o **Angular CLI** instalado localmente em sua máquina, a aplicação também pode ser executada diretamente com o **servidor Angular** para desenvolvimento e testes. Para rodar a aplicação sem Docker, siga os passos:

1. Certifique-se de que o **Angular CLI** está instalado:
   ```
   npm install -g @angular/cli
   ```

2. Instale as dependências do projeto:
   ```
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```
   ng serve
   ```

4. Acesse a aplicação no navegador em `http://localhost:4200`.

Dessa forma, o desenvolvedor pode optar por rodar o frontend diretamente no ambiente de desenvolvimento local ou utilizar o Docker com Nginx para simular o ambiente de produção.

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

   **Nota:** Para que a aplicação funcione corretamente, é necessário que você tenha a **imagem do backend** disponível. Caso ainda não tenha a imagem Docker do backend, certifique-se de construir ou puxar essa imagem antes de rodar o `docker-compose`, já que o frontend depende do backend para a autenticação e outras funcionalidades.
   
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