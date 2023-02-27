import "@/styles/globals.css";
import AOS from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Script id="show-banner" strategy="afterInteractive">
        {`
  window.$crisp=[];window.CRISP_WEBSITE_ID="37b92c03-a81a-49e0-9f23-a4c3701f13f5";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
  `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
