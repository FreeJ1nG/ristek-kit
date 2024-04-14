import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["."],
      exclude: ["src", "dist"],
    }),
  ],
  server: {
    port: 5001,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./packages"),
    },
  },
  build: {
    emptyOutDir: true,
    outDir: "dist",
    copyPublicDir: false,
    sourcemap: true,
    lib: {
      entry: { ads: resolve(__dirname, "./packages/ads/src/index.ts") },
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
});
