# GitHub Pages Deployment Guide

Your React portfolio is configured to deploy to GitHub Pages. Here are your options:

## Option 1: Automatic Deployment with GitHub Actions (Recommended - No Local Setup Needed)

This method automatically deploys your portfolio whenever you push code to GitHub.

### Setup Instructions:

1. **Create GitHub Actions Workflow**
   - Create `.github/workflows/deploy.yml` file in your repository
   - Copy the workflow configuration below

```yaml
name: Build and Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

2. **Commit and Push**
   ```cmd
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Pages deployment workflow"
   git push origin main
   ```

3. **Verify Deployment**
   - Go to your repository → Settings → Pages
   - Source should be "Deploy from a branch" 
   - Branch should be "gh-pages"
   - Your portfolio will be live at: `https://karen6099.github.io`

4. **From Now On**
   - Just edit files and push to `main` branch
   - GitHub Actions automatically builds and deploys
   - Changes appear at `https://karen6099.github.io` within 1-2 minutes

---

## Option 2: Manual Deployment (If you have Node.js installed locally)

If you prefer to control when deployments happen:

### One-Time Setup:
```cmd
npm install
```

### Deploy Command:
```cmd
npm run deploy
```

This builds your React app and pushes it to the `gh-pages` branch.

---

## Option 3: GitHub Codespaces (No Local Installation Needed)

Use GitHub's web-based development environment:

1. **Open Codespaces**
   - Go to your GitHub repository
   - Click "Code" → "Codespaces" → "Create codespace on main"
   - Wait for environment to load (1-2 minutes)

2. **Deploy**
   - Open terminal in Codespaces
   - Run: `npm install`
   - Run: `npm run deploy`

3. **That's it!**
   - Your portfolio is now live at `https://karen6099.github.io`
   - Codespaces are free for 60 hours/month

---

## Troubleshooting

### Deployment fails with "gh-pages not found"
**Solution**: Reinstall dependencies
```cmd
npm install
```

### Changes don't appear after deployment
**Solution**: Clear browser cache (Ctrl+Shift+Delete) and refresh

### Want to see deployment status
**Solution**: Go to your repository → Actions tab to see workflow results

---

## What Gets Deployed

When you deploy, only these are included:
- ✅ React components (src/components/*)
- ✅ Custom hooks (src/hooks/*)
- ✅ Context API (src/contexts/*)
- ✅ CSS files (all *.css)
- ✅ Public files (public/*)

These are NOT deployed:
- ❌ node_modules/ (automatically installed)
- ❌ .git/ (version control)
- ❌ Documentation files (*.md)

---

## Current Configuration

Your `package.json` is already configured:

```json
{
  "homepage": "https://karen6099.github.io",
  "scripts": {
    "build": "react-scripts build",
    "deploy": "npm run build && gh-pages -d build"
  },
  "devDependencies": {
    "gh-pages": "^5.0.0"
  }
}
```

✅ All settings are correct and ready to deploy!

---

## Recommended Workflow

1. **Edit files locally or on GitHub**
2. **Commit to main branch**
3. **For Option 1 (Automatic)**: GitHub Actions deploys automatically
4. **For Option 2 (Manual)**: Run `npm run deploy` when ready
5. **Visit** `https://karen6099.github.io` to see your live portfolio

---

## Questions?

- **GitHub Pages Docs**: https://pages.github.com
- **gh-pages Package**: https://github.com/tschaub/gh-pages
- **GitHub Actions Docs**: https://docs.github.com/en/actions
