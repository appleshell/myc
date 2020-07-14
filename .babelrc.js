const env = process.env.BABEL_ENV;

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        // modules: 'cjs',
        modules: env === 'es' ? false : 'auto',
      },
    ],
    '@babel/preset-react',
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        useESModules: false,
      },
    ],
  ],
};
