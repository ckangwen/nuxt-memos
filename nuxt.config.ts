export default defineNuxtConfig({
  modules: ["@nuxtjs/supabase", "@unocss/nuxt", "@element-plus/nuxt"],
  components: [
    {
      path: "~/components",
      extensions: [".vue", ".tsx"],
      pathPrefix: false,
    },
  ],
  build: {
    transpile: ["trpc-nuxt"],
  },
  css: ["@unocss/reset/tailwind.css", "@/styles/index.scss", "@/styles/var.scss"],
});
