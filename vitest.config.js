import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from "node:url";

export default defineConfig({
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