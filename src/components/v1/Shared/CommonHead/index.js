import Head from "next/head";
import React from "react";

const CommonHead = ({ title,favIcon,description }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${favIcon}`} />

        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourpage.com/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          itemprop="image"
          content="https://yourimagepath.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourpage.com/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://yourimagepath.jpg" />

        {/* For Facebook Insights  */}
        <meta property="fb:app_id" content="XXXXXXX" />

        <meta name="twitter:site" content="@twitter-username" />
      </Head>
    </>
  );
};

export default CommonHead;
