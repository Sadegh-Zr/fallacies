<p align="center">
  <a href="[https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter](https://sadegh-zr.github.io/fallacies/)">
    <img alt="Gatsby" src="https://github.com/Sadegh-Zr/fallacies/assets/93543701/bc82423e-66e9-4f4c-bcbe-24cfbf3a9ecb" width="60" />
  </a>
</p>
<h1 align="center">
  اپلیکیشن مغالطات
</h1>
<p align="center">مرجعی برای تسلط بر مغالطات به همراه مثال‌های کاربردی و آزمون</p>

## 🙄 توضیحات
<p>با سلام! این برنامه را با توجه به توضیحات، مثال‌ها و سؤالات کتاب پرمغز «مغالطات» دکتر علی اصغر خندان طراحی کردم. علاوه بر استفاده از مطالب خود کتاب و تغییر در برخی از آن‌ها بحسب صلاحدید، بعضی مثال‌ها و سؤالات را نیز به محتوا افزودم. توصیه می‌کنم برای توضیحات تفصیلی و شناخت راه‌های مقابله با برخی مغالطات، به کتاب اصلی مراجعه نمایید. امیدوارم که این مجموعه مورد رضایت امام زمان -عجل الله تعالی فرجه الشریف- قرار بگیرد.</p>
            <p>این برنامه به صورت PWA توسعه داده شده است؛ بنابراین می‌توانید به راحتی آن را نصب کرده و به شکل آفلاین از آن استفاده کنید.</p>
            <p>برای نظرات، پیشنهادات و انتقادات، می‌توانید از طریق <a rel="noreferrer" href='mailto:sadegh.zarinmehr@gmail.com' target='_blank'>ایمیل</a> يا <a rel="noreferrer" href='https://eitaa.com/sadegh_zr' target='_blank'>پیامبرسان ایتا</a> با من در ارتباط باشید.</p>


## 💁‍♂️مشارکت در توسعه
این PWA با Gatsby توسعه داده شده است. برای مشارکت در ساخت آن، ابتدا پکیج‌های مربوطه را با دستور زیر نصب کنید:
```shell
npm install
```
سپس این دستور را اجرا کنید
```shell
npm run develop
```
**نکته:** پس از اجرا متوجه خواهید شد که فونت‌ها به درستی لود نشده‌اند. این بخاطر آدرس absolute مربوط به Github Pages است. برای لود درست فونت‌ها در لوکال خودتان، عبارت آدرس فونت را در فایل global.css به آدرس زیر تغییر دهید:

```css
@font-face {
    font-family: 'Aviny';
    font-weight: 300;
    font-style: normal;
    src: url(/fonts/aviny.woff2) format("woff2"); /* این خط را تغییر دهید */
}
```
