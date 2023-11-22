import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  favicons: ['/logo.svg'],
  themeConfig: {
    name: 'myc',
    logo: '/logo.svg',
    socialLinks: {
      github: 'https://github.com/umijs/dumi',
    },
  },
});
