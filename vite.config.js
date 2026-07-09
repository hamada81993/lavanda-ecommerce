import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
console.log("VITE CONFIG LOADED");
console.log("TARGET =", "https://lavanda-eg.com");
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  server: {
    proxy: {
      "/api": {
        target: "https://lavanda-eg.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  
});