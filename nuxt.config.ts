// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        [
        "@pinia/nuxt",
        {
            autoImports: [
                // automatically imports `defineStore`
                "defineStore", // import { defineStore } from 'pinia'
                // automatically imports `defineStore` as `definePiniaStore`
                ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
            ],
        },
    ],
    ],
    css: ["@/assets/styles/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/_variables.scss";',
                },
            },
        },
    },
    runtimeConfig: {
        public: {
            GMAP_API: process.env.GMAP_API
        },
    },
})
