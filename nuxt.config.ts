import { build } from "nuxt";

export default defineNuxtConfig({
  compatibilityDate: "2025-06-26",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content"],
  css: ["~/assets/css/main.css"],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
        },
      },
    },
  },
  app: {
    head: {
      title: "Emrullah Alku - Portfolio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Full-Stack Developer & Creative Designer portfolio",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  devServer: {
    port: 5000,
    host: "0.0.0.0",
  },
});
