/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
  env: {
    REACT_APP_API: process.env.REACT_APP_API,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
