#!/usr/bin/env bash

set -e

# Usage info
usage() {
  echo "Usage: $0 [-u github_user] [-r repo_name]"
  echo "  -u    GitHub username (or org) for ghcr.io (default: patryk-bernasiewicz)"
  echo "  -r    Repository name (default: blog-astro)"
  exit 1
}

# Defaults
GITHUB_USER="patryk-bernasiewicz"
REPO_NAME="blog-astro"

# Parse arguments
while getopts "u:r:h" opt; do
  case $opt in
    u) GITHUB_USER="$OPTARG" ;;
    r) REPO_NAME="$OPTARG" ;;
    h) usage ;;
    *) usage ;;
  esac
done

# 1. Create DATE variable (YYMMDD_hhmm)
DATE=$(date +'%y%m%d_%H%M')

# 2. Compose image tag
IMAGE="ghcr.io/${GITHUB_USER}/${REPO_NAME}:${DATE}"

echo "Building Docker image: $IMAGE"

# 3. Build the Docker image (force no cache)
docker build --no-cache -t "$IMAGE" .

echo "Pushing Docker image: $IMAGE"

# 4. Push the image
docker push "$IMAGE"

echo "Image built and pushed as $IMAGE" 