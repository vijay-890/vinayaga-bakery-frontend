import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows external access (equivalent to '0.0.0.0')
    port: 5173,
    strictPort: false, // Allow fallback to next available port
    open: false, // Don't auto-open browser
    cors: true, // Enable CORS for API requests
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  base: '/', // Ensure correct base path for PWA
});

