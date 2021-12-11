import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
  bridge: {
    vite: true,
  },
  vite: {
    build: {
      sourcemap: true,
    },
  },
});
