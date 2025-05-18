import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    viteCompression({ algorithm: "brotliCompress" }),
    visualizer({ open: true }),
  ],
  build: {
    minify: "esbuild",
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          icons: ["lucide-react", "react-icons"],
          mui: ["@mui/material", "@emotion/react", "@emotion/styled"],
        },
      },
    },
  },
  server: {
    host: true,
    open: true,
    port: 5173,
  },
});
