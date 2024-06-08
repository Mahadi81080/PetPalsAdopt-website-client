import { Helmet } from "react-helmet-async";
import { StickyNavbar } from "../../Shared/Navbar/Navbar";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";
import Fetured from "../Fetured/Fetured";
import Newslatter from "../Newslatter/Newslatter";
import PetCategory from "../PetCategory/PetCategory";
import AccordionSection from "../AccondionSection/AccordionSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PetPalsAdopt || Home</title>
      </Helmet>
      <StickyNavbar></StickyNavbar>
      <Banner></Banner>
      <div className="mx-10">
        <PetCategory></PetCategory>
        <CallToAction></CallToAction>
        <AboutSection></AboutSection>
      </div>
      <Fetured></Fetured>
      <Newslatter></Newslatter>
      <AccordionSection></AccordionSection>
    </div>
  );
};

export default Home;
