import type { NextConfig } from "next";

const repoBasePath = process.env.NODE_ENV === "production" ? "/Portfolio" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: repoBasePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

