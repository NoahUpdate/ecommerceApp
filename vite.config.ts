import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@images',
        replacement: path.resolve(__dirname, 'src/assets/images')
      },
      {
        find: '@icons',
        replacement: path.resolve(__dirname, 'src/assets/icons')
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/components/pages')
      },
      {
        find: '@atoms',
        replacement: path.resolve(__dirname, 'src/components/atoms')
      },
      {
        find: '@molecules',
        replacement: path.resolve(__dirname, 'src/components/molecules')
      },
      {
        find: '@templates',
        replacement: path.resolve(__dirname, 'src/components/templates')
      },
      {
        find: '@organisms',
        replacement: path.resolve(__dirname, 'src/components/organisms')
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils')
      },
      // {
      //   find: '@redux',
      //   replacement: path.resolve(__dirname, 'src/redux')
      // },
      {
        find: '@types',
        replacement: path.resolve(__dirname, 'src/types')
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks')
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, 'src/services')
      },
      {
        find: '@config',
        replacement: path.resolve(__dirname, 'src/config')
      },
      {
        find: '@features',
        replacement: path.resolve(__dirname, 'src/redux/features')
      }
    ]
  }
});
