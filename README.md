# Astro Personal Blog

A personal blog built with Astro, containerized with Docker, and reverse-proxied with Nginx.

---

## 🚀 Local Development

### 1. (Optional) Point Your Domain Locally

Pointing the domain to your local machine in your hosts file is crucial to make it behave exactly like the production server. Without it, you won't be able to test all the Nginx overrides, like the proper language redirects.

Edit your `hosts` file to point `patrykb.pl` to your local machine:

```
127.0.0.1 patrykb.pl
```

---

### 2. Run the Nginx Proxy container

#### On **Windows** (PowerShell recommended):

```powershell
docker run --rm -d `
  --name local-nginx-proxy `
  -p 80:80 `
  -v <absolute-path-to-this-dir>\nginx-local-proxy.conf:/etc/nginx/nginx.conf:ro `
  nginx:alpine
```

#### On **Linux/MacOS**:

```bash
docker run --rm -d \
  --name local-nginx-proxy \
  --network host \
  -v <absolute-path-to-this-dir>/nginx-local-proxy.conf:/etc/nginx/nginx.conf:ro \
  nginx:alpine
```

> **Note:** Replace `<absolute-path-to-this-dir>` with the full path to your project directory.

---

### 3. Access the Blog

Open `http://patrykb.pl` (or `http://localhost` if you didn't decide to meddle with your hosts file) in your browser.

---

## 🚢 Manual Deployment

### 1. Build and Push the Docker Image

- On **Linux/MacOS/Git Bash**:  
  Run `./build-and-push.sh`
- On **Windows PowerShell**:  
  Run `./build-and-push.ps1`

The script will output the new image tag (e.g., `240526_2130`).

---

### 2. Deploy the Stack

#### On **Windows PowerShell**:

```powershell
$env:IMAGE_TAG = "<paste-tag-here>"
docker stack deploy --with-registry-auth -c .\compose.prod.yml blog-astro
```

#### On **Linux/MacOS**:

```bash
IMAGE_TAG=<paste-tag-here> docker stack deploy --with-registry-auth -c compose.prod.yml blog-astro
```

---

## 📝 Notes

- Make sure you're logged in to GitHub Container Registry (`ghcr.io`) before pushing images.
- The Nginx proxy is only for local development. In production, Nginx is configured inside the container.
- If you update the Nginx config or static files, rebuild and redeploy the Docker image.