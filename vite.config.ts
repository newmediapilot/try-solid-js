import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite'
//@ts-expect-error unable to locate
import tailwindcss from '@tailwindcss/vite';
import path from 'path'

export default defineConfig(({mode}) => ({
    base: mode === 'production' ? '/try-solid-js/' : '/',
    plugins: [
        tailwindcss(),
        devtools(),
        solidPlugin()
    ],
    server: {
        port: 1234,
    },
    build: {
        target: 'esnext',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
}));
