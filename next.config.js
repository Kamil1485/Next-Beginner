/** @type {import('next').NextConfig} */
const nextConfig = {
  //rewrite vs redirect ,rewrite ile status code 200 gönderilirken redirect ile 307-308  ile gönderilir
  async redirects() {
    return [
      /*
      {
        source: "/pages/about", //about sayfasına istek geldiğinde contact sayfasına yönlendirilir.
        destination: "/pages/contact",
        permanent: false,
      },
      {
        source: "/pages/blog", //about sayfasına istek geldiğinde contact sayfasına yönlendirilir.
        destination: "/pages/contact",
        permanent: false,
      },

      {
        source: '/pages/:slug',
        destination: '/users/:slug',
        permanent: true,
      },
     */
    ];
  },
  env: {
    API_URL: process.env.API_URL,
  },

  async rewrites() {
    //Tekrar
    return [
      { source: "/old-about", destination: "/pages/about" },
      { source: "/documents/:path*", destination: "/:path*" },
      { source: "/:category/:slug", destination: "/:slug?cat=:category" },
      {
        source: "/:path*", //Tüm sayfalara giriş için login olmak gerekli artık,
        missing: [
          //{ type: "cookie", key: "authorized", value: "true" },
          {
            type: "cookie",
            key: "accessToken",
          },
        ], //user,cookies ve x-accestoken  verisi geçersizse destination ile yönlendir.(missing)
        destination: "/login",
      },
    ];
  },
  async headers() {
    //adrese istek gelmesi sonucu header ekleyebiliriz.
    return [
      {
        source: "/pages/blog",
        headers: [{ key: "blog-key", value: "blog-value" }],
      },
    ];
  },
};

module.exports = nextConfig;
