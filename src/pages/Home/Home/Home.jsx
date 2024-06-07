import { StickyNavbar } from "../../Shared/Navbar/Navbar";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";
import Fetured from "../Fetured/Fetured";
import Newslatter from "../Newslatter/Newslatter";
import PetCategory from "../PetCategory/PetCategory";

const Home = () => {
  return (
    <div>
      <StickyNavbar></StickyNavbar>
      <Banner></Banner>
      <div className="mx-10">
        <PetCategory></PetCategory>
        <CallToAction></CallToAction>
        <AboutSection></AboutSection>
      </div>
      <Fetured></Fetured>
      <Newslatter></Newslatter>
    </div>
  );
};

export default Home;
