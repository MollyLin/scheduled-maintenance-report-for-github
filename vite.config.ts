import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';
import { defineConfig } from 'vite';

export default () => {
  return defineConfig({
    base: '/scheduled-maintenance-report-for-github',
    plugins: [vue(), eslintPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@helpers': path.resolve(__dirname, 'src/helpers'),
        '@types': path.resolve(__dirname, 'src/types'),
      },
    },
  });
};
