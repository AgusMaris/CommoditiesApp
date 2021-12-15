module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@screens': './src/screens',
            '@components': './src/components',
            '@assets': './src/assets',
            '@store': './src/store',
            '@navigation': './src/navigation/',
            '@hooks': './src/hooks/',
            '@services': './src/services/',
            '@context': './src/context/',
          },
          extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.jsx', '.js', '.json'],
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
