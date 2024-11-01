const nextConfig = {
  basePath: '/lechlak.github.io',
 //output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

// next.config.js (Webpack-based)
module.exports = {
  webpack: (config) => {
    // ... Webpack configuration
    return config;
  },
};

// next.config.js (Turbopack-compatible)
module.exports = {
  // ... Turbopack configuration
  webpack5: true, // Enable Webpack 5 compatibility for certain features
};