# Usa a imagem oficial do Nginx
FROM nginx:alpine

# Remove a página padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia todos os arquivos do seu projeto para a pasta pública do Nginx
COPY . /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80
