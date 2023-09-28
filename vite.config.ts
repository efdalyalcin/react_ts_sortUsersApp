import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    test: {
      globals: true,
      environment: 'jsdom',
      css: false,
    },
  };

  if (command !== 'serve') {
    config.base = '/react_ts_sortUsersApp/';
  }

  return config;
});
