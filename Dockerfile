# Etapa 1: Construir a aplicação Angular
FROM node:18 AS builder

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Construa a aplicação Angular
RUN npm run build --prod

# Etapa 2: Configuração do Nginx
FROM nginx:alpine

# Copie o conteúdo da build para o diretório padrão do Nginx
COPY --from=builder /app/dist/easy-park-solutions-front/browser /usr/share/nginx/html

# Copie o arquivo de configuração do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponha a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
