/**
 * @type {import('gatsby').GatsbyConfig}
 */

const siteUrl = 'https://sadegh-zr.github.io/fallacies/';

module.exports = {
  pathPrefix: "/fallacies",
  siteMetadata: {
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
        siteUrl,
        name: `مغالطات`,
        description: "مرجعی برای تسلط به مغالطات به همراه مثال‌های کاربردی و آزمون‌گیری",
        short_name: `مغالطات`,
        start_url: `/`,
        background_color: `#fbc531`,
        theme_color: `#fbc531`,
        display: `standalone`,
        theme_color_in_head: false,
        // screenshots: [
        //   {
        //     src: "./src/images/screenshot1.jpg",
        //     sizes: "591x1280",
        //     type: "image/jpeg",
        //     label: "صفحه اصلی با مشخص بودن مغالطاتی که نیاز به مرور دارند"
        //   },
        //   {
        //     src: "./src/images/screenshot2.jpg",
        //     sizes: "591x1280",
        //     type: "image/jpeg",
        //     label: "توضیحات و مثال‌های هر مغالطه",
        //   },
        //   {
        //     src: "./src/images/screenshot3.jpg",
        //     sizes: "591x1280",
        //     type: "image/jpeg",
        //     label: "کسی دچار مغالطه خاصی شده است؟ متنی که اپلیکیشن برای شما تولید می‌کند برای او بفرستید!"
        //   },
        //   {
        //     src: "./src/images/screenshot4.jpg",
        //     sizes: "591x1280",
        //     type: "image/jpeg",
        //     label: "بخش آزمون با قابلیت نمایش خطاها و مرور آن‌ها"
        //   },
        //   {
        //     src: "./src/images/screenshot5.jpg",
        //     sizes: "591x1280",
        //     type: "image/jpeg",
        //     label: "صفحه نتایج آزمون | موبایل"
        //   },
        //   // {
        //   //   src: "./src/images/screenshot6.png",
        //   //   sizes: "591x1280",
        //   //   type: "image/png",
        //   //   label: "صفحه نتایج آزمون |‌ دسکتاپ",
        //   //   form_factor: "wide",
        //   // },
        // ],
        icon: "./src/images/icon.svg",
        icon_options: {
          purpose: `any maskable`,
        },

      },
    },
    'gatsby-plugin-offline'
  ],
}
