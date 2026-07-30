import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.saucedemo.com',  // so we can use '/' in tests
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
