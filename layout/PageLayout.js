import Footer from "@/components/v1/Shared/Footer/Footer";
import Navbar from "@/components/v1/Shared/Navbar/Navbar";


const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar/>

      {children}

      <Footer />
    </>
  );
};

export default PageLayout;