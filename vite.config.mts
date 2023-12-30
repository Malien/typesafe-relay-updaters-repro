import { defineConfig } from 'vite'
import relay from "vite-plugin-relay";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), relay]
})
