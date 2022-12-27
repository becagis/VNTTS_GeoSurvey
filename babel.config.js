module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      'react-native-reanimated/plugin',
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env'
        }
      ],
      [
        'module-resolver',
        {
          alias: {
            '@': './src',
            '@types': './types',
            '@assets': './assets',

            '@ttungbmt/react-native-form': './src/@react-native-form/src',

            '@fortawesome/pro-solid-svg-icons': './assets/fonts/fontawesome-pro/svgs/solid',
            '@fortawesome/pro-regular-svg-icons': './assets/fonts/fontawesome-pro/svgs/regular',
            '@fortawesome/pro-light-svg-icons': './assets/fonts/fontawesome-pro/svgs/light',
            '@fortawesome/pro-thin-svg-icons': './assets/fonts/fontawesome-pro/svgs/thin',
            '@fortawesome/pro-duotone-svg-icons': './assets/fonts/fontawesome-pro/svgs/duotone',
            '@fortawesome/pro-sharp-solid-svg-icons': './assets/fonts/fontawesome-pro/svgs/sharp-solid'
          }
        }
      ]
    ]
  }
}
