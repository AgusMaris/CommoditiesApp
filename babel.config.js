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
            '@screens': './src/presentation/screens',
            '@components': './src/presentation/components',
            '@presentation': './src/presentation',
            '@app': './src/app',
            '@infraestructure': './src/infraestructure/',
          },
          extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.jsx', '.js', '.json'],
        },
      ],
    ],
  }
}
