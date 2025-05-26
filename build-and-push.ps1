param(
    [string]$GithubUser = "patryk-bernasiewicz",
    [string]$RepoName = "blog-astro"
)

# Create DATE variable (YYMMDD_hhmm)
$DATE = Get-Date -Format "yyMMdd_HHmm"
$IMAGE = "ghcr.io/${GithubUser}/${RepoName}:$DATE"

Write-Host "Building Docker image: $IMAGE"
docker build --no-cache -t $IMAGE .

Write-Host "Pushing Docker image: $IMAGE"
docker push $IMAGE

Write-Host "Image built and pushed as $IMAGE" 

# Output the DATE variable to the console
echo $DATE
