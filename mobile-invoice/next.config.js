const nextConfig = {
  basePath: '/lechlak.github.io',
  experimental: {
    esmExternals: 'loose'
  },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }]; // required to make pdfjs work
    return config;
  },
};

module.exports = nextConfig;