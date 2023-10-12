module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@': './src',
          '@root': './',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
