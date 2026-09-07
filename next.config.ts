import type { NextConfig } from "next";

// Image CDN base URL comes from the environment (see .env.example). The literal
// fallback keeps images working if the variable is ever missing at build time,
// since a broken remotePattern would silently break every next/image on the site.
const supabaseStorageUrl =
  process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL || 'https://asvbqmdvplqupbqpigoa.supabase.co';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: new URL(supabaseStorageUrl).hostname,
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;
