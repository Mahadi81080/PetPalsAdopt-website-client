import img1 from "../../../assets/banner/group-nine-dogs-front-white-260nw-685669324.jpg";
import img2 from "../../../assets/banner/blog.jpg";
import img3 from "../../../assets/banner/1661487582169.png";
import { Button, Carousel } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div className=" w-full">
      <Carousel transition={{ duration: 2 }} className="h-screen">
        <div className="relative h-full w-full">
          <img
            src={img1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/15">
            <div className="w-3/4 md:w-2/4 mx-auto text-center text-white space-y-3">
              <h3 className=" text-base md:text-xl lg:text-xl text-blue-300">
                Your Pet is Home Away From Home
              </h3>
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold">
                Exceptional Pet Boarding
              </h1>
              <p>
                Ensure your pet's comfort and safety while you're away. Trust us
                to provide top-notch care.
              </p>
              <div className=" mt-5 gap-2">
                <Button
                  size="lg"
                  color="white"
                  className="btn hover:bg-blue-300 hover:text-white border-0 border-b-4 border-blue-200"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={img2}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/15">
            <div className="w-3/4 md:w-2/4 mx-auto text-center text-white space-y-3">
              <div className="slide-3 flex flex-col items-center justify-center h-full text-center space-y-4">
                <h3 className="text-xl text-blue-300">
                  Tailored Care for Every Pet
                </h3>
                <h1 className="text-6xl font-bold">
                  Professional Pet Grooming
                </h1>
                <p>
                  Our grooming services will keep your pet looking and feeling
                  their best. Pamper them today!
                </p>
              </div>
              <div className=" mt-5 gap-2">
                <Button
                  size="lg"
                  color="white"
                  className="btn hover:bg-blue-300 hover:text-white border-0 border-b-4 border-blue-200"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={img3}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/15">
            <div className="w-3/4 md:w-2/4 mx-auto text-center text-white space-y-3 ">
              <div className="slide-2 flex flex-col items-center justify-center h-full text-center space-y-4">
                <h3 className="text-xl text-blue-300">
                  We Treat Your Pets Like Family
                </h3>
                <h1 className="text-6xl font-bold">Loving Pet Daycare</h1>
                <p>
                  Give your pet the love and attention they deserve during the
                  day. They'll be in great hands.
                </p>
              </div>
              <div className=" mt-5 gap-2">
                <Button
                  size="lg"
                  color="white"
                  className="btn hover:bg-blue-300 hover:text-white border-0 border-b-4 border-blue-200"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
