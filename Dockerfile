# Etapa 1: Construir a aplicação Angular
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx ng build --configuration production

# Etapa 2: Configuração do Nginx
FROM nginx:alpine
COPY --from=builder /app/dist/easy-park-solutions-front/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

