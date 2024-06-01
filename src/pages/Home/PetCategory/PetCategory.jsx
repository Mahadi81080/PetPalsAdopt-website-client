import img1 from "../../../assets/Pet category/image-1.jpg";
import img2 from "../../../assets/Pet category/image-2.jpg";
import img3 from "../../../assets/Pet category/image-3.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
const PetCategory = () => {
  return (
    <div>
      <div className="mx-auto space-y-4 mt-12 mb-5 max-w-xl">
        <h3 className="text-[#3498db]">OUR SERVICES</h3>
        <h1 className="text-6xl font-semibold">What We Offer</h1>
        <p className="text-lg">
          Our highly skilled professional associates love pets as much as you
          do, and we offer a wide range of pet services.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="p-6 dark:text-gray-900">
          <img
            src={img1}
            alt=""
            className="object-cover object-center w-64 mx-auto rounded-full h-64 bg-gray-500 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-md font-medium tracking-widest uppercase text-violet-400 dark:text-violet-600">
              We provide
            </span>
            <h2 className="text-2xl font-semibold tracking-wide">
              Professional Grooming
            </h2>
          </div>
          <p className=" text-sm dark:text-gray-800">
            We offer a great variety of food from raw and natural to organic
            cnned and grain-free
          </p>
          <div className="my-8 bg-white shadow-md p-4 text-xl rounded-full text-black inline-block hover:bg-[#3498db] hover:text-white">
            <FaArrowRightLong  />
          </div>
        </div>
        <div className="p-6 dark:text-gray-900">
          <img
            src={img2}
            alt=""
            className="object-cover object-center w-64 mx-auto rounded-full h-64 bg-gray-500 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-md font-medium tracking-widest uppercase text-violet-400 dark:text-violet-600">
              We provide
            </span>
            <h2 className="text-2xl font-semibold tracking-wide">
              Health and vet services
            </h2>
          </div>
          <p className=" text-sm dark:text-gray-800">
            We offer a great variety of food from raw and natural to organic
            cnned and grain-free
          </p>
          <div className="my-8 bg-white shadow-md p-4 text-xl rounded-full text-black inline-block hover:bg-[#3498db] hover:text-white">
            <FaArrowRightLong  />
          </div>
        </div>
        <div className="p-6 dark:text-gray-900">
          <img
            src={img3}
            alt=""
            className="object-cover object-center w-64 rounded-full h-64 mx-auto bg-gray-500 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-md font-medium tracking-widest uppercase text-violet-400 dark:text-violet-600">
              We provide
            </span>
            <h2 className="text-2xl font-semibold tracking-wide">
              Natural and Healthy Food
            </h2>
          </div>
          <p className=" text-sm dark:text-gray-800">
            We offer a great variety of food from raw and natural to organic
            cnned and grain-free
          </p>
          <div className="my-8 bg-white shadow-md p-4 text-xl rounded-full text-black inline-block hover:bg-[#3498db] hover:text-white">
            <FaArrowRightLong  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCategory;
