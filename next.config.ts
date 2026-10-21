import type { NextConfig } from "next";
const config: NextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: ["terminal.local"],
  devIndicators: false,
  serverExternalPackages: [],
  images: {
    // Avoid jumping from 384px to 640px for the mobile hero at higher DPRs.
    deviceSizes: [480, 540, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: '</llms.txt>; rel="describedby"; type="text/plain"',
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "X-Frame-Options",
            value:
              process.env.NODE_ENV === "development" ? "SAMEORIGIN" : "DENY",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: `default-src 'self'; script-src 'self' 'unsafe-inline' ${process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""} https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' ${process.env.NODE_ENV === "development" ? "ws: wss:" : ""} https://challenges.cloudflare.com; frame-src 'self' https://challenges.cloudflare.com; frame-ancestors ${process.env.NODE_ENV === "development" ? "'self'" : "'none'"}; form-action 'self'; base-uri 'self'; object-src 'none'`,
          },
        ],
      },
    ];
  },
};
export default config;
