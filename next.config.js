// eslint-disable-next-line @typescript-eslint/no-var-requires
const wImages = require('next-images')

module.exports = wImages({
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
  }
})
