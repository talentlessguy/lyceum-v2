// eslint-disable-next-line @typescript-eslint/no-var-requires
const wImages = require('next-images')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withPreact = require('next-plugin-preact')

module.exports = withPreact(
  withPWA(
    wImages({
      images: {
        domains: ['img-fotki.yandex.ru', 'liceym2.ru', 'www.datocms-assets.com']
      },
      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true
      },
      experimental: {
        modern: true
      },
      async redirects() {
        return [
          {
            source: '/post',
            destination: '/',
            permanent: true
          }
        ]
      },
      pwa: {
        disable: process.env.NODE_ENV === 'development',
        register: true,
        dest: 'public',
        runtimeCaching
      }
    })
  )
)
