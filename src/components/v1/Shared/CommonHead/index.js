import { GA_MEASUREMENT_ID } from "@/src/config/analytics";
import Head from "next/head";
import Script from "next/script";
import React from "react";

const CommonHead = ({ title, favIcon, description }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />

        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Open Graph */}
        {/* Test  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.xplainerr.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          itemProp="image"
          content="https://ik.imagekit.io/zwxa4kttt/courses/Api__1_.jpg"
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

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
};

export default CommonHead;
