import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fruitstore.www',
  appName: 'fruit-store',
  webDir: 'dist/fruit-store',
  server: {
    androidScheme: 'https'
  }
};

export default config;
