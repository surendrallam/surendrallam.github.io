# Deploy to GitHub Pages: surendrallam.github.io

This guide provides step-by-step instructions to deploy your portfolio to `https://surendrallam.github.io`

## ✅ Pre-Deployment Checklist

Your project is already configured with:
- ✅ `vite.config.ts` - Set with `base: '/'` for GitHub Pages
- ✅ `.github/workflows/deploy.yml` - GitHub Actions workflow ready
- ✅ `public/404.html` - Handles client-side routing
- ✅ `public/robots.txt` - SEO configuration

## 🚀 Deployment Steps

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon (top right) → **"New repository"**
3. **Repository name:** `surendrallam.github.io` (MUST match your username exactly)
4. **Visibility:** Public (required for GitHub Pages on free plan)
5. **DO NOT** initialize with README, .gitignore, or license (we have code already)
6. Click **"Create repository"**

### Step 2: Connect Local Project to GitHub

Open your terminal in the project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files to git
git add .

# Create initial commit
git commit -m "Initial portfolio deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/surendrallam/surendrallam.github.io.git

# Rename branch to main (if needed)
git branch -M main

# Push code to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/surendrallam/surendrallam.github.io`
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar under "Code and automation")
4. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"**
5. Save (if needed)

### Step 4: Deploy with GitHub Actions

The GitHub Actions workflow will automatically:
1. Detect your push to the `main` branch
2. Install dependencies
3. Build your portfolio
4. Deploy to GitHub Pages

**To trigger deployment:**

```bash
# Make any small change (optional)
git commit --allow-empty -m "Trigger deployment"
git push origin main
```

**Monitor Deployment:**
1. Go to **Actions** tab in your GitHub repository
2. You'll see a workflow running called "Deploy to GitHub Pages"
3. Click on it to see the deployment progress
4. Wait for all steps to complete (usually 2-3 minutes)

### Step 5: Verify Your Live Website

Once deployment completes successfully:

🌐 **Your portfolio will be live at:** `https://surendrallam.github.io`

**First deployment may take 5-10 minutes to propagate.**

## 🔄 Updating Your Portfolio

To update your live website:

```bash
# 1. Make your changes to the code

# 2. Stage and commit changes
git add .
git commit -m "Update portfolio content"

# 3. Push to GitHub
git push origin main

# GitHub Actions will automatically rebuild and deploy!
```

## 🎨 Customization

### Update Personal Information

Edit these files to personalize:
- `src/components/Hero.tsx` - Name, title, contact info
- `src/components/Experience.tsx` - Work history
- `src/components/Skills.tsx` - Technical skills
- `src/components/Projects.tsx` - Project details
- `src/components/Publications.tsx` - Achievements
- `index.html` - SEO metadata (title, description)

### Update Links

Update your social media links in:
- `src/components/Hero.tsx` - LinkedIn, GitHub URLs
- `src/components/Contact.tsx` - Email, phone

## 🌐 Custom Domain (Optional)

To use your own domain like `yourdomain.com`:

### In Your Domain Provider (e.g., GoDaddy, Namecheap):

Add DNS records:

**Option A - Apex Domain (yourdomain.com):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**Option B - Subdomain (www.yourdomain.com):**
```
Type: CNAME
Name: www
Value: surendrallam.github.io
```

### In GitHub Repository:

1. Go to **Settings** → **Pages**
2. Under **"Custom domain"**, enter your domain
3. Check **"Enforce HTTPS"** (after DNS propagates)
4. Create `public/CNAME` file in your project:

```bash
echo "yourdomain.com" > public/CNAME
git add public/CNAME
git commit -m "Add custom domain"
git push origin main
```

DNS propagation takes 24-48 hours.

## 🔧 Troubleshooting

### Issue: 404 Error on Page Refresh

✅ **Already Fixed!** The `public/404.html` file handles this.

### Issue: Build Fails

1. Check **Actions** tab for error logs
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`

### Issue: Assets Not Loading

- Verify `vite.config.ts` has `base: '/'`
- Check browser console for errors

### Issue: Deployment Doesn't Start

1. Verify `.github/workflows/deploy.yml` exists
2. Check **Settings** → **Pages** source is "GitHub Actions"
3. Ensure repository is public

### Issue: Changes Not Showing

1. Hard refresh browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Check GitHub Actions completed successfully
3. Wait 5-10 minutes for CDN cache to clear

## 📊 Monitoring

### Check Deployment Status:
- **GitHub Actions:** `https://github.com/surendrallam/surendrallam.github.io/actions`
- **GitHub Pages:** Settings → Pages (shows last deployment time)

### View Build Logs:
1. Go to **Actions** tab
2. Click on the latest workflow run
3. Click on **"build"** or **"deploy"** job to see logs

## 🎯 Next Steps

1. ✅ Deploy to GitHub Pages
2. 🔍 Test on multiple devices/browsers
3. 📈 Add Google Analytics (optional)
4. 🎨 Customize content and styling
5. 🔗 Share your portfolio link!

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 💡 Pro Tips

1. **Test locally before deploying:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Keep commits clean:**
   - Use descriptive commit messages
   - Commit related changes together

3. **Monitor performance:**
   - Use Chrome DevTools Lighthouse
   - Optimize images if needed

4. **Regular updates:**
   - Keep portfolio current
   - Update projects and achievements

---

**Need Help?** 
- Check [GitHub Pages Status](https://www.githubstatus.com/)
- Review [GitHub Community Forums](https://github.community/)

**Your Portfolio:** `https://surendrallam.github.io` 🚀
