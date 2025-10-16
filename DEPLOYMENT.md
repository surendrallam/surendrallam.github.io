# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages (username.github.io).

## Prerequisites
- GitHub account
- Git installed on your computer
- Node.js installed (for local testing)

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
3. Make it public
4. Don't initialize with README (we already have code)

## Step 2: Configure for GitHub Pages

The project is already configured with:
- `vite.config.ts` - Build settings
- Base path ready for GitHub Pages

You may need to update the `base` in `vite.config.ts` if deploying to a custom domain:

```typescript
export default defineConfig({
  base: '/', // For username.github.io
  // OR
  base: '/repository-name/', // For username.github.io/repository-name
})
```

## Step 3: Connect Your Local Project to GitHub

Open terminal in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Deploy Using GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml` file with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Go to your GitHub repository → Settings → Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push the workflow file to your repository
5. GitHub Actions will automatically build and deploy your site

## Step 5: Alternative - Manual Deployment with gh-pages

If you prefer manual deployment:

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

Then:
1. Go to Settings → Pages
2. Select "gh-pages" branch as source
3. Your site will be live at `https://yourusername.github.io`

## Step 6: Verify Deployment

After a few minutes, your site should be live at:
- `https://yourusername.github.io` (for username.github.io repo)
- `https://yourusername.github.io/repo-name` (for other repos)

## Custom Domain (Optional)

To use a custom domain like `yourdomain.com`:

1. Go to repository Settings → Pages
2. Add your custom domain in the "Custom domain" field
3. Create a `CNAME` file in the `public/` folder with your domain:
   ```
   yourdomain.com
   ```
4. Configure DNS settings with your domain provider:
   - Add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME record pointing to `yourusername.github.io`

## Updating Your Portfolio

To update your deployed site:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

If using GitHub Actions, it will automatically redeploy.
If using gh-pages, run: `npm run deploy`

## Troubleshooting

**404 Error on routes:**
- For client-side routing, create a `404.html` in `public/` folder that redirects to `index.html`

**Assets not loading:**
- Check the `base` path in `vite.config.ts` matches your deployment URL

**Build fails:**
- Ensure all dependencies are in `package.json`
- Check Node.js version compatibility
- Review build logs in GitHub Actions

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- Check the GitHub Actions logs for deployment errors
