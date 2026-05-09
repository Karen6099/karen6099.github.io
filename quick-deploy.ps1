# Quick Deploy Script - Only deploys without git commit
# Use this for quick updates without committing

Write-Host "🚀 Quick deploying to GitHub Pages..." -ForegroundColor Cyan

# Check if gh-pages is installed
if (-not (Test-Path "node_modules\.bin\gh-pages")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Build the project
Write-Host "🔨 Building React app..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}

# Deploy to GitHub Pages
Write-Host "🌐 Deploying to GitHub Pages..." -ForegroundColor Yellow
npm run deploy
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Deployment failed" -ForegroundColor Red
    exit 1
}

Write-Host "✨ Deployment complete! Your site is live at https://karen6099.github.io" -ForegroundColor Green
