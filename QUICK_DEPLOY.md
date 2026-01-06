# Quick Deployment Checklist

## Step 1: Backend (Render)

1. Push code to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect GitHub repo
4. Settings:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Environment Variables:
   - `PORT` = `10000`
   - `MONGO_URl` = `your_mongodb_connection_string`
   - `FRONTEND_URL` = `https://mellow-dragon-3840ac.netlify.app`
   - `NODE_ENV` = `production`
6. Copy backend URL (e.g., `https://mern-backend.onrender.com`)

## Step 2: Frontend (Netlify) ✅ Already Deployed!

Your frontend is already deployed at: [https://mellow-dragon-3840ac.netlify.app](https://mellow-dragon-3840ac.netlify.app)

**Important**: Make sure to set the environment variable in Netlify:
1. Go to your Netlify site → Site settings → Environment variables
2. Add: `VITE_API_URL` = `https://your-backend.onrender.com` (from Step 1)
3. Trigger a new deployment

## Step 3: Verify Backend CORS

1. Go to Render dashboard
2. Verify `FRONTEND_URL` is set to: `https://mellow-dragon-3840ac.netlify.app`
3. If not, update it and restart the service

## Done! 🎉

Your app should now be live at: [https://mellow-dragon-3840ac.netlify.app](https://mellow-dragon-3840ac.netlify.app)

