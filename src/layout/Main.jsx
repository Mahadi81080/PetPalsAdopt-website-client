import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <StickyNavbar></StickyNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
