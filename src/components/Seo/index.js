import * as React from 'react';

const Seo = ({ title, description }) => {
    return (
        <>
            <html translate="no" lang="fa" dir='rtl' />
            <title>{title}</title>
            <meta name="google" content="notranslate" />
            <meta name="theme-color" content="#fbc531" />
            <meta name="description" content={description}/>
            <meta property="og:image"  content="https://github-production-user-asset-6210df.s3.amazonaws.com/93543701/305609046-bc82423e-66e9-4f4c-bcbe-24cfbf3a9ecb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240225%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240225T175336Z&X-Amz-Expires=300&X-Amz-Signature=faf06326197f071b04af66df5700d87fc469c83b9e67da1f52985dc71dac0647&X-Amz-SignedHeaders=host&actor_id=93543701&key_id=0&repo_id=736850156" />
            <meta name="twitter:image" content="https://github-production-user-asset-6210df.s3.amazonaws.com/93543701/305609046-bc82423e-66e9-4f4c-bcbe-24cfbf3a9ecb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240225%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240225T175336Z&X-Amz-Expires=300&X-Amz-Signature=faf06326197f071b04af66df5700d87fc469c83b9e67da1f52985dc71dac0647&X-Amz-SignedHeaders=host&actor_id=93543701&key_id=0&repo_id=736850156" />
        </>
    )
};

export default Seo;
