import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',  // disabled due to dynamic client components blocking static export
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
