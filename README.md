
# 💖 Valentine's Hub for Surbhi - Deployment Guide

### Phase 1: Preparation
1.  Make sure you have all the files (index.html, index.tsx, App.tsx, package.json, vite.config.ts, etc.) in one folder on your computer.

### Phase 2: GitHub (Storage)
1.  Go to [GitHub.com](https://github.com) and log in.
2.  Click **"New"** to create a repository. Name it `valentine-2025`.
3.  Set it to **Public** or **Private** (doesn't matter).
4.  Click **"uploading an existing file"** on the setup page.
5.  **Drag and drop ALL files** from your folder into GitHub.
6.  Click **"Commit changes"** at the bottom.

### Phase 3: Google AI (The Brain)
1.  Go to [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  Click **"Create API key"**.
3.  **Copy the key** (looks like `AIza...`). Save it somewhere.

### Phase 4: Vercel (The Live Site)
1.  Go to [Vercel.com](https://vercel.com) and log in using your **GitHub account**.
2.  Click **"Add New"** > **"Project"**.
3.  Find your `valentine-2025` repository and click **"Import"**.
4.  **CRITICAL STEP:** Before clicking Deploy, find the **"Environment Variables"** section.
5.  Add a new variable:
    *   **Key:** `API_KEY`
    *   **Value:** (Paste your key from Phase 3)
6.  Click **"Add"**.
7.  Click **"Deploy"**.

### Phase 5: Verification
1.  Once Vercel finished building, click the link it gives you.
2.  If the site opens, you are ready! Send the link to Surbhi.
