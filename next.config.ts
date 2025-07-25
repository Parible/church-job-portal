// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⬅️ disables ESLint on build
  },
  experimental: {
    serverActions: {},
  },
  // Define routes where middleware will run
};

export default nextConfig;
