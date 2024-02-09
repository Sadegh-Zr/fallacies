import * as React from 'react';

const Seo = ({ title, description }) => {
    return (
        <>
            <html translate="no" lang="fa" dir='rtl' />
            <title>{title}</title>
            <meta name="google" content="notranslate" />
            <meta name="theme-color" content="#fbc531" />
            <meta name="description" content={description}/>
        </>
    )
};

export default Seo;
