const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
  domains: ["cdn-images-1.medium.com", "miro.medium.com", "res.cloudinary.com", "media.dev.to"],
    remotePatterns: [
       {
      protocol: "https",
      hostname: "miro.medium.com",
      pathname: "**",
    },
    {
      protocol: "https",
      hostname: "res.cloudinary.com",
      pathname: "**",
    },
    {
      protocol: "https",
      hostname: "media.dev.to",
      pathname: "**",
    },
    ],
  },
  experimental: {
    instrumentationHook: false,
  },
};
