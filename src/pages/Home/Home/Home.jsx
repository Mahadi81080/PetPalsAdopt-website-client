import { StickyNavbar } from "../../Shared/Navbar/Navbar";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";
import PetCategory from "../PetCategory/PetCategory";

const Home = () => {
  return (
    <div>
      <StickyNavbar></StickyNavbar>
      <Banner></Banner>
      <PetCategory></PetCategory>
      <CallToAction></CallToAction>
      <AboutSection></AboutSection>
    </div>
  );
};

export default Home;
