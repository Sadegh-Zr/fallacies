/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/fallacies",
  siteMetadata: {
    siteUrl: `https://sadegh-zr.github.io/fallacies`,
    title: "مغالطات",
    description: "مرجعی برای تسلط به مغالطات به همراه مثال‌های کاربردی و آزمون‌گیری",
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
        name: `مغالطات`,
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
