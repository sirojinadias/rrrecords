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
}

export default nextConfig
