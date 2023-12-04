import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Diet_Journal/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust this limit based on your needs
  },
});
