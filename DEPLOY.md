# Deployment Guide for Vercel

This project is ready to be deployed on Vercel. Follow these steps to ensure a smooth deployment.

## 1. Import Project
When importing the project in Vercel:

1.  Select the repository.
2.  **Important**: In the "Root Directory" settings, click "Edit" and select `myscleaning`.
    *   Since the app is located in a subdirectory, this tells Vercel where to find the `package.json` and build scripts.

## 2. Framework Preset
Vercel should automatically detect the framework as **Vite**. If not, select **Vite** from the Framework Preset dropdown.

-   **Build Command**: `vite build` (default)
-   **Output Directory**: `dist` (default)
-   **Install Command**: `npm install` (default)

## 3. Environment Variables
You MUST add the following environment variables in the Vercel project settings for the application to work correctly (connecting to Supabase).

Use the values from your local `.env` file:

| Variable Name | Description |
| :--- | :--- |
| `VITE_SUPABASE_URL` | Your Supabase Project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase Anonymous Key |

## 4. Deploy
Click **Deploy**. Vercel will build the application and deploy it.

## 5. Troubleshooting
-   If you see 404 errors on refresh, ensure the `vercel.json` file was included in the deployment (it handles routing rewrites).
