import { BsDot } from "react-icons/bs";
import img1 from "../../../assets/About/img1.jpg";
import img2 from "../../../assets/About/img2.webp";
import img3 from "../../../assets/About/vecteezy_wool-yarn-logo-icon-design-vector_8326074.jpg";
import img4 from "../../../assets/About/3109_R1NUIExBUiA0MDQtMTE.jpg";
const AboutSection = () => {
  return (
    <div className="mt-28 my-10">
      <div className="space-y-4 text-center  mb-10">
        <h3 className="text-[#3498db]">BEST PET CARE</h3>
        <h1 className="text-5xl font-semibold">We Provide Best Services</h1>
        <p className="text-lg text-[#5b6a76]">
          We know that proper care is important for pets. That is why we <br />{" "}
          created the place where you can find the best products for your furry{" "}
          <br /> friends.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div className="max-w-xs py-16  border rounded-lg shadow-sm   dark:text-gray-900">
          <img
            src={img1}
            alt=""
            className="object-cover mx-auto w-20 h-20 bg-gray-500 dark:bg-gray-500"
          />
          <div className="mt-6 mb-1 text-center">
            <h2 className="text-3xl font-semibold tracking-wide">
              Health Care
            </h2>
            <p className="text-xl text-[#5b6a76]  dark:text-gray-800">
              Taking care of your <br /> pets
            </p>
          </div>

          <div className="flex justify-center mt-5 text-2xl text-[#5b6a76]">
            <BsDot />
            <BsDot />
            <BsDot />
          </div>
        </div>
        <div className="max-w-xs py-16 border rounded-lg shadow-sm    dark:text-gray-900">
          <img
            src={img2}
            alt=""
            className="object-cover mx-auto w-20 h-20 bg-white dark:bg-gray-500"
          />
          <div className="mt-6 mb-1 text-center">
            <h2 className="text-3xl font-semibold tracking-wide">
              Adoption Center
            </h2>
            <p className="text-xl text-[#5b6a76]  dark:text-gray-800">
              Fine a new friend in a <br /> shelter
            </p>
          </div>

          <div className="flex justify-center mt-5 text-2xl text-[#5b6a76]">
            <BsDot />
            <BsDot />
            <BsDot />
          </div>
        </div>
        <div className="max-w-xs py-16 border rounded-lg shadow-sm    dark:text-gray-900">
          <img
            src={img3}
            alt=""
            className="object-cover mx-auto w-20 h-20 bg-gray-500 dark:bg-gray-500"
          />
          <div className="mt-6 mb-1 text-center">
            <h2 className="text-3xl font-semibold tracking-wide">Community</h2>
            <p className="text-xl text-[#5b6a76]  dark:text-gray-800">
              Meet other pet lovers <br /> here
            </p>
          </div>
          <div className="flex justify-center mt-5 text-2xl text-[#5b6a76]">
            <BsDot />
            <BsDot />
            <BsDot />
          </div>
        </div>
        <div className="max-w-xs py-16 border rounded-lg shadow-sm   dark:text-gray-900">
          <img
            src={img4}
            alt=""
            className="object-cover mx-auto w-20 h-20 bg-gray-500 dark:bg-gray-500"
          />
          <div className="mt-6 mb-1 text-center">
            <h2 className="text-3xl font-semibold tracking-wide">
              Online Store
            </h2>
            <p className="text-xl text-[#5b6a76]  dark:text-gray-800">
              Quality products for <br /> pets
            </p>
          </div>
          <div className="flex justify-center mt-5 text-2xl text-[#5b6a76]">
            <BsDot />
            <BsDot />
            <BsDot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
