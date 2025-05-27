import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/Portfolio/",
  plugins: [react(), tailwindcss()],
  /* Shadcn */
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
