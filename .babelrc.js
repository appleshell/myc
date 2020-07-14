module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        // modules: 'cjs',
        modules: false,
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
