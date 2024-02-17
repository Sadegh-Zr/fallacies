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
      resolve: "gatsby-source-filesystem",
      options: {
        name: `examQuestionCount`,
        path: `${__dirname}/examQuestionCount`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        siteUrl,
        name: `مغالطات`,
        description: "مرجعی برای تسلط به مغالطات به همراه مثال‌های کاربردی و آزمون",
        short_name: `مغالطات`,
        start_url: `/`,
        background_color: `#fbc531`,
        theme_color: `#fbc531`,
        display: `standalone`,
        theme_color_in_head: false,
        screenshots: [
          {
            src: "/fallacies/screenshots/1.jpg",
            sizes: "591x1280",
            type: "image/jpeg",
            form_factor: "narrow",
            label: "صفحه اصلی با مشخص بودن مغالطاتی که نیاز به مرور دارند"
          },
          {
            src: "/fallacies/screenshots/2.jpg",
            sizes: "591x1280",
            type: "image/jpeg",
            form_factor: "narrow",
            label: "توضیحات و مثال‌های هر مغالطه",
          },
          {
            src: "/fallacies/screenshots/3.jpg",
            sizes: "591x1280",
            type: "image/jpeg",
            form_factor: "narrow",
            label: "کسی دچار مغالطه خاصی شده است؟ متنی که اپلیکیشن برای شما تولید می‌کند برای او بفرستید!"
          },
          {
            src: "/fallacies/screenshots/4.jpg",
            sizes: "591x1280",
            type: "image/jpeg",
            form_factor: "narrow",
            label: "بخش آزمون با قابلیت نمایش خطاها و مرور آن‌ها"
          },
          {
            src: "/fallacies/screenshots/5.jpg",
            sizes: "591x1280",
            type: "image/jpeg",
            form_factor: "narrow",
            label: "نتایج آزمون",
          },
          // {
          //   src: "/fallacies/screenshots/6.png",
          //   sizes: "1115x624",
          //   type: "image/png",
          //   label: "صفحه اصلی با مشخص بودن مغالطاتی که نیاز به مرور دارند",
          //   form_factor: "wide",
          // },
          {
            src: "/fallacies/screenshots/7.png",
            sizes: "1115x624",
            type: "image/png",
            label: "توضیحات و مثال‌های هر مغالطه",
            form_factor: "wide",
          },
          {
            src: "/fallacies/screenshots/8.png",
            sizes: "1115x624",
            type: "image/png",
            label: "کسی دچار مغالطه خاصی شده است؟ متنی که اپلیکیشن برای شما تولید می‌کند برای او بفرستید!",
            form_factor: "wide",
          },
          {
            src: "/fallacies/screenshots/9.png",
            sizes: "1115x624",
            type: "image/png",
            label: "بخش آزمون با قابلیت نمایش خطاها و مرور آن‌ها",
            form_factor: "wide",
          },
          // {
          //   src: "/fallacies/screenshots/10.png",
          //   sizes: "1115x624",
          //   type: "image/png",
          //   label: "بخش نتایج آزمون",
          //   form_factor: "wide",
          // },
        ],
        icon: "./src/images/icon.svg",
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: 'maskable',
          },
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: 'any',
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: 'maskable',
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: 'any',
          },
        ]
      },
    },
    'gatsby-plugin-offline'
  ],
}
