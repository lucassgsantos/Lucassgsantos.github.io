import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS ? "/portfolio" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/portfolio/" : undefined,
};

export default nextConfig;
