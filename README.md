# Life After 30 — Next.js + Tailwind prototype

This is a starter Next.js (App Router) project scaffold for the "Life After 30" charity site.

What's included
- Next.js App Router pages: Home, About, Resources, Community, Contact
- Tailwind CSS configuration
- Reusable components: Navbar, Footer, Card
- Mock API route for newsletter subscribe

Run locally
1. npm install
2. npm run dev

Notes
- Tailwind needs Node.js installed. This scaffold intentionally uses Tailwind utility classes only.
- This is a prototype with placeholder content, images and mock API.

Preparing for GitHub

1. Add the main logo image to `public/main_logo.png` (do not commit large originals — resize if needed).
2. Create a new GitHub repo and set it as the `origin` remote.
3. Push the repo:

```powershell
git init
git add .
git commit -m "Initial commit: Life After 30 prototype"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

Replace the remote URL above with your repository URL. The `.gitignore` includes `.next/`, `node_modules/`, and `public/main_logo.png` by default (so add the logo only if you want to track it).

