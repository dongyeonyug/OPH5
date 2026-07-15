/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? "/OPH5" : undefined,
  assetPrefix: isGithubPages ? "/OPH5/" : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos"
      }
    ]
  }
};

export default nextConfig;
