# Etap budowania
FROM node:20-alpine AS builder
WORKDIR /app

ARG CONTENTFUL_SPACE_ID
ARG CONTENTFUL_DELIVERY_TOKEN
ARG CONTENTFUL_PREVIEW_TOKEN
ARG NODE_ENV

ENV CONTENTFUL_SPACE_ID=$CONTENTFUL_SPACE_ID
ENV CONTENTFUL_DELIVERY_TOKEN=$CONTENTFUL_DELIVERY_TOKEN
ENV CONTENTFUL_PREVIEW_TOKEN=$CONTENTFUL_PREVIEW_TOKEN
ENV NODE_ENV=$NODE_ENV

COPY package*.json ./
COPY pnpm-lock.yaml ./
COPY .npmrc ./
RUN npm install -g pnpm 
RUN pnpm install --reporter=silent

COPY . .

RUN pnpm build --silent

# Etap serwowania
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 3660 