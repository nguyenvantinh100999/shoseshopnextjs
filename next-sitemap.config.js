/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://your-site-url.com", // Replace with your site's URL
  generateRobotsTxt: true, // (optional) Generate a robots.txt file
  sitemapSize: 5000, // Limit the number of URLs per sitemap file, default is 5000
  changefreq: "daily", // How often the pages are likely to change
  priority: 0.7, // Priority of the URLs in the sitemap
  exclude: ["/admin"], // Exclude specific paths (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: "/admin",
      },
    ],
  },
};
