import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";
import { useEffect } from "react";
import { Provider, useSelector } from "react-redux";

import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "src/store";

function MyApp({ Component, pageProps }) {

  // const [user, setUser] = useState(null);

  // useEffect(() => {

  //   // handle firebase 
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if(user){
  //       setUser(user)
  //     }else{
  //       setUser(null);
  //     }
  //   })

  //   return unsubscribe;
  // }, []);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    // Init AOS 
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, [])

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
