// import { defineConfig } from 'cypress';
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    baseUrl: 'http://localhost:5173',
  },
  env: {
    codeCoverageTasksRegistered: true,
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
};
