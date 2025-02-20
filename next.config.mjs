// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    ppr: 'incremental',
    reactCompiler: true,
    //esmExternals: 'loose', // Ensure ESM compatibility
  },
}

export default nextConfig
