import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <StickyNavbar></StickyNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
