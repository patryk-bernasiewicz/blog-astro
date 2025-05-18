FROM nginx:alpine

# Skopiuj własny config nginx.conf do obrazu
COPY nginx.conf /etc/nginx/nginx.conf

# Skopiuj statyczne pliki do katalogu, z którego nginx je serwuje
COPY ./dist /usr/share/nginx/html

EXPOSE 3660