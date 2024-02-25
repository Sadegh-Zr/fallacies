import * as React from 'react';

const Seo = ({ title, description }) => {
    return (
        <>
            <html translate="no" lang="fa" dir='rtl' />
            <title>{title}</title>
            <meta name="google" content="notranslate" />
            <meta name="theme-color" content="#fbc531" />
            <meta name="description" content={description}/>
            <meta property="og:locale" content="fa_IR" />
            <meta property="og:title" content={title} />
            <meta name="og:description" content={description} />
            <meta property="og:image"  content="https://github.com/Sadegh-Zr/fallacies/assets/93543701/2b67a344-f446-4e0e-890a-1110ae817e0d" />
            <meta name="twitter:image" content="https://github.com/Sadegh-Zr/fallacies/assets/93543701/2b67a344-f446-4e0e-890a-1110ae817e0d" />
        </>
    )
};

export default Seo;
