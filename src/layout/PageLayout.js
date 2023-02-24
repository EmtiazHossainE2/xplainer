import Footer from "../components/v1/Shared/Footer/Footer";
import Footer2 from "../components/v1/Shared/Footer/Footer2";
import Navbar from "../components/v1/Shared/Navbar/Navbar";



const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar/>

      {children}

      {/* <Footer /> */}
      <Footer2/>
    </>
  );
};

export default PageLayout;