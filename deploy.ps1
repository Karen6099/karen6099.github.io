# GitHub Deploy Script for Portfolio
# This script commits changes to GitHub and deploys to GitHub Pages

param(
    [string]$message = "Update portfolio"
)

Write-Host "🚀 Starting deployment process..." -ForegroundColor Cyan

# Check if git is installed
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git is not installed. Please install Git first." -ForegroundColor Red
    exit 1
}

# Check if node_modules exists, if not install dependencies
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
}

# Stage all changes
Write-Host "📝 Staging changes..." -ForegroundColor Yellow
git add .

# Check if there are changes to commit
$status = git status --porcelain
if ($status.Length -eq 0) {
    Write-Host "✅ No changes to commit" -ForegroundColor Green
} else {
    # Commit changes
    Write-Host "💾 Committing changes: $message" -ForegroundColor Yellow
    git commit -m $message
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to commit changes" -ForegroundColor Red
        exit 1
    }

    # Push to GitHub
    Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
    git push origin main
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to push to GitHub" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Changes pushed successfully" -ForegroundColor Green
}

# Build the project
Write-Host "🔨 Building React app..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build completed successfully" -ForegroundColor Green

# Deploy to GitHub Pages
Write-Host "🌐 Deploying to GitHub Pages..." -ForegroundColor Yellow
npm run deploy
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Deployment failed" -ForegroundColor Red
    exit 1
}

Write-Host "✨ Deployment complete! Your site is live at https://karen6099.github.io" -ForegroundColor Green
