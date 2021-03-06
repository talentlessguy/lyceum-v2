import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const fonts = ['Golos-Text_Bold', 'Golos-Text_Medium', 'Golos-Text_Regular', 'Golos-UI_Medium']

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          {fonts.map((font) => (
            <>
              <link rel="preload" href={`/font/${font}.woff2`} as="font" crossOrigin="" />
            </>
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
