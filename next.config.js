/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
  },
  env: {
    PRODUCTION_URL: process.env.PRODUCTION_URL,
  },
};
