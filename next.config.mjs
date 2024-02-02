const nextConfig = {  
    reactStrictMode: false,
    experimental: {
      serverComponentsExternalPackages: ["mongoose"],
    },
    webpack: function (config, options) {
      console.log(options.webpack.version); // Should be webpack v5 now
      config.experiments = {
        ...config.experiments,
        layers: true,
        topLevelAwait: true,
      };
      return config;
    },
    images: {
      minimumCacheTTL: 0,
      remotePatterns: [],
    }
  }
  
export default nextConfig
  