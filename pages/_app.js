import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";
import { useEffect } from "react";
import { Provider } from "react-redux";

import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "src/store";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {

  
  
  useEffect(() => {
    // Init AOS 
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, [])

  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      // console.log(`Loading: ${url}`)
      NProgress.start()
    }

    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <>
      <Script id="show-banner" strategy="afterInteractive">
        {`
          window.$crisp=[];window.CRISP_WEBSITE_ID="37b92c03-a81a-49e0-9f23-a4c3701f13f5";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
        `}
      </Script>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps}  />
          <Toaster />
        </PersistGate>
        
      </Provider>
    </>
  );
}

export default MyApp;
