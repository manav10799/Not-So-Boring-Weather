import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate", // auto-updates service worker
      manifest: {
        name: "Not So Boring Weather",
        short_name: "NSB Weather",
        description: "A mobile-first PWA Weather App",
        theme_color: "#c7a19d",
        icons: [
          {
            src: "/pwa-icon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-icon.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
