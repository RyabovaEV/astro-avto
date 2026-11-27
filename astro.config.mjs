// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/schedule": "/schedule/suburban",
    "/driving-school": "/driving-school/info",
    "/about": "/about/contacts",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
