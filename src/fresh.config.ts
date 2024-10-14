import { defineConfig } from "$fresh/server.ts";

export default defineConfig({
  build: {
    outDir: "../out",
    target: "es2015",
  },
  router: {
    trailingSlash: true,
  },
  staticDir: "../public",
});
