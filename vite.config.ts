import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(() => {
  return {
    base: "./", // Ensures assets load correctly in Netlify production
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@shared": path.resolve(__dirname, "shared"),
      },
    },
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
  };
});
