import { defineVitestConfig } from 'nuxt-vitest/config';
import vue from '@vitejs/plugin-vue';
import {fileURLToPath, URL} from "node:url";

export default defineVitestConfig({
    plugins: [vue()],
    test: {
        globals: true,
        environment: 'jsdom',
     },
    root: __dirname,
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./", import.meta.url)),
            ".": fileURLToPath(new URL("./", import.meta.url)),
        },
    },
})