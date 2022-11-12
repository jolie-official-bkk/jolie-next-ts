/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
  env: {
    REACT_APP_API: process.env.REACT_APP_API,
    REACT_APP_S3_PREFIX: process.env.REACT_APP_S3_PREFIX,
  },
  images: {
    domains: [
      "localhost",
      "jolie-storage.s3.ap-southeast-1.amazonaws.com",
      "amazonaws.com",
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
};

module.exports = nextConfig;
