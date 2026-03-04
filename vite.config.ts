import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { imagetools } from "vite-imagetools";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),

    // Convert all imported raster images to WebP at build time
    imagetools({
      defaultDirectives: (url) => {
        if (url.search.length > 1) return new URLSearchParams();
        if (url.pathname.endsWith('.svg')) return new URLSearchParams();
        return new URLSearchParams({ format: 'webp', quality: '80' });
      },
    }),

    // Compress public directory images in build output
    ViteImageOptimizer({
      test: /\.(png|jpe?g)$/i,
      includePublic: true,
      logStats: true,
      png: { quality: 80, compressionLevel: 9 },
      jpeg: { quality: 80, progressive: true },
      jpg: { quality: 80 },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
