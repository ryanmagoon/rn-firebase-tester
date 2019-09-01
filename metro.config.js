/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path')

module.exports = {
  resolver: {
    extraNodeModules: {
      components: path.resolve(__dirname, './app/components'),
      containers: path.resolve(__dirname, './app/containers')
    }
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  }
}
