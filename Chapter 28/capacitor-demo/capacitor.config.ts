import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.capacitordemo.www',
  appName: 'capacitor-demo',
  webDir: 'dist/capacitor-demo',
  server: {
    androidScheme: 'https'
  }
};

export default config;
