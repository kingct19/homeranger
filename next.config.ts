import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      { source: "/reviews", destination: "/", permanent: false },
      { source: "/financing", destination: "/", permanent: false },
      { source: "/promotions", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
