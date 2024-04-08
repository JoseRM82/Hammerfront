/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   compiler: {
//     styledComponents: true,
//   },
// }


module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_TEST_ID: process.env.TEST_ID,
    NEXT_PUBLIC_TEST_TYPE: process.env.TEST_TYPE,
    NEXT_PUBLIC_TEST_NAME: process.env.TEST_NAME,
    NEXT_PUBLIC_TEST_TOKEN: process.env.TEST_TOKEN,
    NEXT_PUBLIC_TEST_PASS: process.env.TEST_PASS,
  }
}

// module.exports = nextConfig