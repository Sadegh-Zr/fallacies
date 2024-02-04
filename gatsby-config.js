/**
 * @type {import('gatsby').GatsbyConfig}
 */

const siteUrl = 'https://sadegh-zr.github.io/fallacies';

module.exports = {
  pathPrefix: "/fallacies",
  siteMetadata: {
    title: "مغالطات",
    siteUrl
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#3498db`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
      siteUrl: `https://sadegh-zr.github.io/fallacies`,
      name: `مغالطات`,
      description: "مرجعی برای تسلط به مغالطات به همراه مثال‌های کاربردی و آزمون‌گیری",
      short_name: `مغالطات`,
      start_url: `/`,
      background_color: `#fbc531`,
      theme_color: `#fbc531`,
      display: `standalone`,
      theme_color_in_head: false,
      icon: "./src/images/icon.svg",
      icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    'gatsby-plugin-offline'
  ],
}
