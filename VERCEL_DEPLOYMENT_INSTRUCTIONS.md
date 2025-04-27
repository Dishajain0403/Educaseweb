# Deploying PopX to Vercel

This document provides instructions for deploying the PopX app to Vercel as a purely static application.

## Preparation Steps

1. Download your project from Replit using the "Download as ZIP" option.
2. Extract the ZIP file to a local folder on your computer.
3. Restructure the project to focus only on the frontend client code.

## Project Restructuring for Vercel Deployment

For Vercel deployment, you need to create a simplified project structure that only includes the client-side code. Follow these steps:

### Step 1: Create a new project folder

```bash
mkdir popx-deploy
cd popx-deploy
```

### Step 2: Copy only the client-side code

From your downloaded Replit project:

1. Copy the entire `client` folder to your new project folder
2. Copy the following configuration files to the root of your new project:
   - `tailwind.config.ts`
   - `postcss.config.js`
   - `tsconfig.json` (modify paths as needed)
   - `vite.config.ts` (modify as shown below)

### Step 3: Create a new package.json

Create a new `package.json` in your project root with only the frontend dependencies:

```json
{
  "name": "popx-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.4",
    "@radix-ui/react-alert-dialog": "^1.1.7",
    "@radix-ui/react-aspect-ratio": "^1.1.3",
    "@radix-ui/react-avatar": "^1.1.4",
    "@radix-ui/react-checkbox": "^1.1.5",
    "@radix-ui/react-collapsible": "^1.1.4",
    "@radix-ui/react-context-menu": "^2.2.7",
    "@radix-ui/react-dialog": "^1.1.7",
    "@radix-ui/react-dropdown-menu": "^2.1.7",
    "@radix-ui/react-hover-card": "^1.1.7",
    "@radix-ui/react-label": "^2.1.3",
    "@radix-ui/react-menubar": "^1.1.7",
    "@radix-ui/react-navigation-menu": "^1.2.6",
    "@radix-ui/react-popover": "^1.1.7",
    "@radix-ui/react-progress": "^1.1.3",
    "@radix-ui/react-radio-group": "^1.2.4",
    "@radix-ui/react-scroll-area": "^1.2.4",
    "@radix-ui/react-select": "^2.1.7",
    "@radix-ui/react-separator": "^1.1.3",
    "@radix-ui/react-slider": "^1.2.4",
    "@radix-ui/react-slot": "^1.2.0",
    "@radix-ui/react-switch": "^1.1.4",
    "@radix-ui/react-tabs": "^1.1.4",
    "@radix-ui/react-toast": "^1.2.7",
    "@radix-ui/react-toggle": "^1.1.3",
    "@radix-ui/react-toggle-group": "^1.1.3",
    "@radix-ui/react-tooltip": "^1.2.0",
    "@tanstack/react-query": "^5.60.5",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^11.13.1",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.453.0",
    "next-themes": "^0.4.6",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.55.0",
    "react-icons": "^5.4.0",
    "react-resizable-panels": "^2.1.7",
    "recharts": "^2.15.2",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^1.1.2",
    "wouter": "^3.3.5",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.15",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.17",
    "typescript": "5.6.3",
    "vite": "^5.4.14"
  }
}
```

### Step 4: Modify vite.config.ts

Create a simplified vite.config.ts that only focuses on the client-side build:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./client/src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./attached_assets', import.meta.url)),
    }
  }
})
```

### Step 5: Create vercel.json

Create a `vercel.json` file in the project root:

```json
{
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Deploying to Vercel

1. Create a Vercel account at [vercel.com](https://vercel.com) if you haven't already

2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

3. Deploy your project:
   ```bash
   cd popx-deploy
   vercel
   ```

4. Follow the prompts to configure your deployment settings

Alternatively, you can deploy directly from the Vercel dashboard:

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New" > "Project" 
3. Upload your project files
4. Configure deployment settings (Framework Preset: Vite)
5. Click "Deploy"

## Important Notes

1. Make sure your app doesn't try to make any backend API calls. All data should be static.

2. The routing should work properly with the configuration in vercel.json, which redirects all routes to index.html to allow your React router to handle client-side routing.

3. All your static assets should be properly referenced with relative paths.

4. Test your deployment to ensure all navigation between pages works correctly.