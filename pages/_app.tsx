import React, { Fragment, useEffect } from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/navbar.css'
import '@openfonts/inter_cyrillic'
import Footer from '../components/Footer'
import { AppProps } from 'next/app'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    console.log(`%cMade by v 1 r t l ✨ ~> https://v1rtl.site`, 'font-size: 20px; color: yellow')
  }, [])

  return (
    <Fragment>
      <style jsx global>
        {`
          body,
          html {
            margin: 0;
            height: 100%;
            overflow-x: hidden;
            background: white;
          }
          html {
            font-family: 'Inter', sans-serif;
          }
          @supports (font-variation-settings: normal) {
            html {
              font-family: 'Inter var', sans-serif;
            }
          }
          * {
            border-collapse: collapse;
          }
        `}
      </style>
      <Head>
        <title>МБОУ Лицей №2</title>
        <meta
          name="description"
          content="муниципальное бюджетное общеобразовательное учреждение г. Протвино Московская область"
        />
        <meta
          name="og:description"
          content="муниципальное бюджетное общеобразовательное учреждение г. Протвино Московская область"
        />
        <meta name="og:locale" content="ru_RU" />
      </Head>

      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  )
}

export default CustomApp
