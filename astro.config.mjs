import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import vue from "@astrojs/vue"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://dev2go.netlify.app",
  integrations: [
    react(),
    vue(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
