import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const style = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}
const fonts = {
  heading: "'Montserrat', sans-serif;"
}

const colors = {
  glassTeal: '#88ccca'
}

const config = {
  initalColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  style,
  components,
  colors,
  fonts
})

export default theme
