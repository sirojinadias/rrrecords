// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactCompiler: true,
  experimental: {
    //ppr: 'incremental',
    //esmExternals: 'loose', // Ensure ESM compatibility
  },
  async headers() {
    return [
      {
        source: '/rates/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
          },
        ],
      },
    ]
  },
}

export default nextConfig
