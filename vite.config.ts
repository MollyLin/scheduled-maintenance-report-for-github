import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));
  return defineConfig({
    base: process.env.BASE_URL,
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
