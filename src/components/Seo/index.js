import * as React from 'react';

const Seo = ({ title, description }) => {
    return (
        <>
            <html translate="no" lang="fa" dir='rtl' />
            <title>{title}</title>
            <meta name="google" content="notranslate" />
            <meta name="theme-color" content="#fbc531" />
            <meta name="description" content={description}/>
            <meta property="og:locale" content={language === 'en' ? 'en_US' : 'fa_IR'} />
            <meta property="og:title" content={title} />
            <meta name="og:description" content={description} />
            <meta property="og:image"  content="https://github.com/Sadegh-Zr/fallacies/assets/93543701/bc82423e-66e9-4f4c-bcbe-24cfbf3a9ecb" />
            <meta name="twitter:image" content="https://github.com/Sadegh-Zr/fallacies/assets/93543701/bc82423e-66e9-4f4c-bcbe-24cfbf3a9ecb" />
        </>
    )
};

export default Seo;
