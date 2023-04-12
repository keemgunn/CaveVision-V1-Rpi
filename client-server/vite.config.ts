import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
// import basicSsl from '@vitejs/plugin-basic-ssl';
import vue from '@vitejs/plugin-vue';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import ViteYaml from '@modyfi/vite-plugin-yaml'
import Markdown from 'vite-plugin-vue-markdown'
import fs from 'fs';

// @ts-ignore: ITS OKAY.
import projectConnectionConfigs from '../configs/serverConnection.js';

const { PORT_FRONTEND_DEV, PORT_FRONTEND_PREVIEW } = projectConnectionConfigs;


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [

    vue({
      include: [/\.vue$/, /\.md$/],
    }),

    sassGlobImports(),
      // Enabling glob imports in .scss files.
      // https://www.npmjs.com/package/vite-plugin-sass-glob-import

    ViteYaml(),
      // https://www.npmjs.com/package/@modyfi/vite-plugin-yaml

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  server: {
    host: true,
    port: PORT_FRONTEND_DEV,
    https: {
      key: fs.readFileSync('../configs/certificates/cert-key.pem'),
      cert: fs.readFileSync('../configs/certificates/fullchain.pem')
    }
  },
  preview: {
    host: true,
    port: PORT_FRONTEND_PREVIEW,
  },
})
