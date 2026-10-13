# Gibran Myageri — Portfolio

A dark, minimal portfolio built with React, TypeScript, Vite, and Tailwind CSS. Includes a printable resume at `/resume`.

## Local development

```sh
npm ci
npm run dev
```

Vite serves the development site at http://localhost:8080.

```sh
npm run build
npx tsc -p tsconfig.app.json --noEmit
npm run lint
npm run preview
```

Portfolio and resume content lives in `src/data/portfolio.ts`. Update it there to keep both pages consistent. No environment variables or backend services are required.

## Automatic deployment

Public portfolio: https://gibran-portfolio-beta.vercel.app

The project is prepared for Vercel's GitHub integration:

- Pushes to `main` deploy production automatically after the Vercel build succeeds.
- Pull requests and other branches receive preview deployments.
- GitHub Actions runs `npm ci`, TypeScript checks, and a production build on pushes to `main` and pull requests.
- Vercel also runs `npm run check && npm run build` so type errors stop publication independently of GitHub Actions.
- No Vercel token needs to be stored in GitHub secrets.

One-time connection (required before automatic hosting is active):

```sh
npx --yes vercel@64.0.2 login
npx --yes vercel@64.0.2 link --yes --project gibran-portfolio
npx --yes vercel@64.0.2 git connect https://github.com/gibran96/gibran-portoflio --yes
```

If Vercel requests GitHub app authorization, grant it access to `gibran96/gibran-portoflio` in your browser. In Vercel, select `main` as the production branch, Node.js 22, and enable access to System Environment Variables. Production must be publicly accessible; check Deployment Protection settings.

Once the project has its first deployment, deploy and verify a preview, then publish production. Vercel assigns a new project’s very first deployment to production automatically:

```sh
npm run deploy
npm run deploy:production
npm run check:deployment -- https://gibran-portfolio-beta.vercel.app
```

After the Git connection is active, commit and push changes to use automatic deployments. The local `.vercel` link and downloaded environment files are ignored by Git.

Vercel builds automatically set absolute social image URLs, the canonical URL, and `og:url` using `VERCEL_PROJECT_PRODUCTION_URL` (falling back to `VERCEL_URL`). Local builds keep relative image URLs.

`vercel.json` supports direct SPA links using Vercel’s standard fallback rewrite; existing assets are served by static hosting. The printable resume uses the supplied resume content; print it from your browser to save a PDF.

## Validation notes

The retained ESLint / TypeScript plugin combination needed explicit `no-unused-expressions` options to run. Full-repository lint still reports four existing errors: empty interfaces in `src/components/ui/command.tsx` and `src/components/ui/textarea.tsx`, and `require()` / `any` usage in `tailwind.config.ts`. These retained library files were not modified.

Browser verification passed at 1440px, 768px, 390px, and 320px, including navigation, resume routing, keyboard skip link, and print controls. Print / Save as PDF produced a readable two-page Letter resume. Production builds and both TypeScript configurations pass; changed-file lint passes.
