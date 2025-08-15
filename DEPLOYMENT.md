# 🚀 Deployment Guide for Searchly

Ready to share your beautiful movie search app with the world? Here's how to get it online!

## 📋 Before You Deploy

1. **Make sure your API key is set correctly** in:
   - `src/pages/Home.jsx` (line 25)
   - `src/pages/MovieDetails.jsx` (line 15)

2. **Test locally first**:
   ```bash
   npm run dev
   ```

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Free & Easy)

1. **Push to GitHub** (see GitHub setup below)
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "New site from Git"
4. Connect your GitHub account
5. Select your Searchly repository
6. Set build command: `npm run build`
7. Set publish directory: `dist`
8. Click "Deploy site" - that's it! 🎉

### Option 2: Vercel (Also Great - Free)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts - Vercel will auto-detect it's a Vite project!

### Option 3: GitHub Pages

1. Add to your `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🔧 GitHub Setup

### First Time Setup

1. **Initialize Git** (if not already done):
   ```bash
   git init
   ```

2. **Add your files**:
   ```bash
   git add .
   ```

3. **Make your first commit**:
   ```bash
   git commit -m "Initial commit: Searchly movie search app"
   ```

4. **Create a new repository on GitHub**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it something like "searchly-movie-app"
   - Don't initialize with README (we already have one)

5. **Connect and push**:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

### Updating Your Repository

When you make changes:

```bash
git add .
git commit -m "Your commit message here"
git push
```

## 🎯 Important Notes

### API Key Security
- **Never commit your API key to GitHub** if it's a private key
- For public repos, consider using environment variables
- The free OMDB API key is generally safe to share

### Environment Variables (Optional)
For better security, you can use environment variables:

1. Create a `.env` file:
   ```
   VITE_OMDB_API_KEY=your_api_key_here
   ```

2. Update your code to use:
   ```javascript
   const apiKey = import.meta.env.VITE_OMDB_API_KEY;
   ```

3. Add `.env` to your `.gitignore` file

## 🎉 You're Ready!

Once deployed, your Searchly app will be live for the world to see! Share the link with friends, add it to your portfolio, or just enjoy having your creation online.

**Happy deploying! 🚀✨** 