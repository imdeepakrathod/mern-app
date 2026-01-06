# Deployment Guide

This guide will help you deploy your MERN stack application.

## Prerequisites

- GitHub account
- MongoDB Atlas account (or your MongoDB connection string)
- Vercel account (for frontend)
- Render account (for backend)

## Backend Deployment (Render)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy on Render**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the `backend` folder as the root directory
   - Configure the service:
     - **Name**: mern-backend (or your preferred name)
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free (or paid if needed)

3. **Set Environment Variables in Render**
   - Go to your service → Environment
   - Add the following variables:
     - `PORT`: 10000 (Render uses this port)
     - `MONGO_URl`: Your MongoDB connection string
     - `FRONTEND_URL`: `https://mellow-dragon-3840ac.netlify.app` (your Netlify frontend URL)
     - `NODE_ENV`: production

4. **Get your backend URL**
   - After deployment, Render will provide a URL like: `https://mern-backend.onrender.com`
   - Copy this URL for the frontend configuration

## Frontend Deployment (Netlify)

1. **Deploy on Netlify**
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Configure the build settings:
     - **Base directory**: `frontend`
     - **Build command**: `npm run build`
     - **Publish directory**: `frontend/dist`
     - **Framework**: Vite

2. **Set Environment Variables in Netlify**
   - Go to your site → Site settings → Environment variables
   - Click "Add variable"
   - Add: `VITE_API_URL` = `https://your-backend-url.onrender.com`
   - Replace with your actual Render backend URL

3. **Redeploy**
   - After setting environment variables, trigger a new deployment
   - Go to Deploys → Trigger deploy → Deploy site

4. **Update Backend CORS**
   - Go to Render dashboard
   - Update `FRONTEND_URL` environment variable with your Netlify frontend URL: `https://mellow-dragon-3840ac.netlify.app`
   - Restart the service

## Alternative: Frontend Deployment (Vercel)

If you prefer Vercel for frontend:

1. **Deploy on Vercel**
   - Go to [Vercel Dashboard](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure the project:
     - **Framework Preset**: Vite
     - **Root Directory**: `frontend`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`

2. **Set Environment Variables in Vercel**
   - Go to your project → Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://your-backend-url.onrender.com`
   - Replace with your actual backend URL

3. **Redeploy**
   - After setting environment variables, trigger a new deployment

## Alternative: Railway Deployment

If you prefer Railway for backend:

1. Go to [Railway](https://railway.app)
2. Create a new project from GitHub
3. Add a new service → Select your backend folder
4. Set environment variables:
   - `PORT`: Railway will auto-assign
   - `MONGO_URl`: Your MongoDB connection string
   - `FRONTEND_URL`: Your frontend URL
5. Deploy and get your backend URL

## Testing

After deployment:
1. Visit your frontend URL: [https://mellow-dragon-3840ac.netlify.app](https://mellow-dragon-3840ac.netlify.app)
2. Test the reservation form
3. Check that data is being saved to MongoDB

## Troubleshooting

- **CORS Errors**: Make sure `FRONTEND_URL` in backend matches your exact frontend URL
- **API Connection Issues**: Verify `VITE_API_URL` in frontend matches your backend URL
- **MongoDB Connection**: Ensure your MongoDB Atlas IP whitelist includes `0.0.0.0/0` or Render's IPs
- **Build Errors**: Check build logs in Netlify/Render dashboard

## Notes

- Free tiers may have cold starts (first request after inactivity may be slow)
- Consider upgrading to paid tiers for production use
- Keep your MongoDB connection string secure (never commit to Git)

