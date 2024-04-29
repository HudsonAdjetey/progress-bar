import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteCompressionPlugin from "vite-plugin-compression";
import { terser } from "rollup-plugin-terser";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    rollupOptions: {
      plugins: [
        ViteCompressionPlugin({
          algorithm: "gzip",
        }),
        terser(),
      ],
    },
    chunkSizeWarningLimit: 2000,
    cssCodeSplit: false,
  },
  preview: {
    strictPort: true,
  },
  server: {
    strictPort: true,
    host: true,
    origin: "http://localhost:8080",
  },
});
