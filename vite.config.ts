import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const siteOrigin = productionHost ? `https://${productionHost}` : undefined;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    {
      name: 'portfolio-social-metadata',
      transformIndexHtml(html: string) {
        if (!siteOrigin) return html;
        return html.split('content="/social-preview.png"').join(`content="${siteOrigin}/social-preview.png"`)
          .replace('</head>', `<link rel="canonical" href="${siteOrigin}/" /><meta property="og:url" content="${siteOrigin}/" /></head>`);
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
