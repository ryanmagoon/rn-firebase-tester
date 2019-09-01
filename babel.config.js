module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
        alias: {
          assets: './app/assets',
          components: './app/components',
          containers: './app/containers',
          utils: './app/utils'
        },
        cwd: 'babelrc'
      }
    ],
    '@babel/plugin-transform-runtime'
  ],
  env: {
    production: {
      plugins: ['transform-remove-console']
    }
  }
}
