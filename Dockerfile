# Etap budowania
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY pnpm-lock.yaml ./
COPY .npmrc ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm build

# Etap serwowania
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 3660 