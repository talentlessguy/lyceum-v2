import React, { Fragment, useEffect } from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'rc-pagination/assets/index.css'
import '../styles/navbar.css'
import '@openfonts/work-sans_all'
import Footer from '../components/Footer'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  useEffect(() => {
    console.log(`%cMade by v 1 r t l ✨ ~> https://v1rtl.site`, 'font-size: 20px; color: yellow')
    const handler = () => {
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      })
    }
    router.events.on('routeChangeComplete', handler)
  }, [])

  return (
    <Fragment>
      <style jsx global>
        {`
          body,
          html {
            margin: 0;
            height: 100%;
            background: white;
          }
          * {
            font-family: 'Work Sans', 'Inter', sans-serif !important;
          }
          * {
            border-collapse: collapse;

            scroll-behavior: smooth;
          }
          :root {
            --height: calc(100vh - 51px);
            --shadow: 0px 15px 50px rgba(0, 0, 0, 0.1);
          }
          @media (max-width: 1500px) {
            :root {
              --height: 100vh;
            }
          }
        `}
      </style>
      <Head>
        <title>МБОУ Лицей №2</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="favicon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="муниципальное бюджетное общеобразовательное учреждение г. Протвино Московская область"
        />
        <meta
          name="og:description"
          content="муниципальное бюджетное общеобразовательное учреждение г. Протвино Московская область"
        />
        <meta name="og:locale" content="ru_RU" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <NavBar />

      <Component {...pageProps} />

      <Footer />
    </Fragment>
  )
}

export default CustomApp
