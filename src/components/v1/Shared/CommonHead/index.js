import { GA_MEASUREMENT_ID } from "@/src/config/analytics";
import Head from "next/head";
import Script from "next/script";
import React from "react";

const defaultOgTitle = "Xplainerr";
const defaultOgDescription = "Accelerate your tech career - Learn & Practice for interviews | Xplainerr ";
const defaultOgURL = "https://xplainerr.com";
const defaultOgImage = "https://ik.imagekit.io/zwxa4kttt/home/xplainerr-home.jpg";

const CommonHead = ({ title, description, ogTitle, ogImage, ogUrl }) => {

  const ogTitleValue = ogTitle ? ogTitle : defaultOgTitle;
  const ogDescriptionValue = description ? description : defaultOgDescription;
  const ogUrlValue = ogUrl ? ogUrl : defaultOgURL;
  const ogImageValue = ogImage ? ogImage : defaultOgImage;


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
        <meta property="og:url" content={ogUrlValue} />
        <meta property="og:title" content={ogTitleValue}/>   
        <meta property="og:description" content={ogDescriptionValue} />
        <meta
          property="og:image"
          itemProp="image"
          content={ogImageValue}
        />
        

      <meta name="keywords" content="xplainerr, product managment, learn api, learn pricing, learn chatGPT, learn system design"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={ogUrl} />
        <meta property="twitter:title" content={ogTitleValue} />
        <meta property="twitter:description" content={ogDescriptionValue} />
        <meta property="twitter:image" content={ogImageValue} />

        {/* For Facebook Insights  */}
        <meta property="fb:app_id" content="XXXXXXX" />

        <meta name="twitter:site" content="@HQdeepak" />

        
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
