FROM node:lts-alpine

WORKDIR /app

# Copiar solo el package.json primero
COPY package.json .

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto
EXPOSE 5173

# Comando para iniciar la aplicación en modo desarrollo
CMD ["npm", "run", "dev"]