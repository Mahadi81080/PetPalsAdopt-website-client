import { StickyNavbar } from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import PetCategory from "../PetCategory/PetCategory";

const Home = () => {
  return (
    <div>
      <StickyNavbar></StickyNavbar>
      <Banner></Banner>
      <PetCategory></PetCategory>
    </div>
  );
};

export default Home;
