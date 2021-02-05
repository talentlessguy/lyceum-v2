// eslint-disable-next-line @typescript-eslint/no-var-requires
const wImages = require('next-images')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA(
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
      dest: 'public',
      runtimeCaching
    }
  })
)
