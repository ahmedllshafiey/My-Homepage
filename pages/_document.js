import { ColorModeScript } from '@chakra-ui/react'
import NextDocumnet, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../libs/theme'

export default class Documnet extends NextDocumnet {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
