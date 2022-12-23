import { extendTheme } from 'native-base'
// @ts-ignore
// import colors from 'native-base/lib/module/theme/base/colors'

const theme = extendTheme({
  fontConfig: {
    Poppins: {
      100: {
        normal: 'Poppins_100Thin',
        italic: 'Poppins_100Thin_Italic'
      },
      200: {
        normal: 'Poppins_200ExtraLight',
        italic: 'Poppins_200ExtraLight_Italic'
      },
      300: {
        normal: 'Poppins_300Light',
        italic: 'Poppins_300Light_Italic'
      },
      400: {
        normal: 'Poppins_400Regular',
        italic: 'Poppins_400Regular_Italic'
      },
      500: {
        normal: 'Poppins_500Medium',
        italic: 'Poppins_500Medium_Italic'
      },
      600: {
        normal: 'Poppins_600SemiBold',
        italic: 'Poppins_600SemiBold_Italic'
      },
      700: {
        normal: 'Poppins_700Bold',
        italic: 'Poppins_700Bold_Italic'
      },
      800: {
        normal: 'Poppins_800ExtraBold',
        italic: 'Poppins_800ExtraBold_Italic'
      },
      900: {
        normal: 'Poppins_900Black',
        italic: 'Poppins_900Black_Italic'
      }
    }
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins'
  },

  // colors: {
  //   primary: {
  //     50: '#dafff6',
  //     100: '#aeffe5',
  //     200: '#7effd5',
  //     300: '#4dffc4',
  //     400: '#23ffb3',
  //     500: '#10e69b',
  //     600: '#00b378',
  //     700: '#008055',
  //     800: '#004e32',
  //     900: '#001c0f'
  //   }
  // },

  // components: {
  //   Button: {
  //     variants: {
  //       brand: {
  //         p: '10',
  //         bg: 'brand.500'
  //       }
  //     }
  //   }
  // }
})

export default theme
