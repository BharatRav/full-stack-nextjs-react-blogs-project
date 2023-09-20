/** @type {import('next').NextConfig} */
const nextConfig = {
  //i hv added this image key because nextjs doesnt allow initially we have to specify that image
  //the domain was comes in nextjs error so i search and then found it should be added in here
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
