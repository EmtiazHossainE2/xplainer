import { withRouter } from "next/router";
import Footer2 from "../components/v1/Shared/Footer/Footer2";
import Navbar from "../components/v1/Shared/Navbar/Navbar";



const PageLayout = ({ children, router }) => {

  return (
    <>
      <Navbar router={router}/>

      {children}

      {/* <Footer /> */}
      <Footer2/>
    </>
  );
};

export default withRouter(PageLayout);