import img1 from "../../../assets/CallToAction/jamie-street-KJxzY-Pyqmk-unsplash-CottonHouse-dog-1600x1200px.jpg";
import img2 from "../../../assets/CallToAction/karsten-winegeart-NE0XGVKTmcA-unsplash.webp";

const CallToAction = () => {
  return (
    <div className="flex justify-center gap-10 my-10">
      <div className="w-1/2 text-left space-y-6 mt-10">
        <h3 className="text-[#3498db] text-base">WE LOVE OUR JOB!</h3>
        <h1 className="text-6xl font-bold">
          Pet Adoption is <br /> Big and Good <br /> Deed
        </h1>
        <p className="text-[#5b6a76] text-lg">
          We believe that pets deserve quality care and love and <br /> because
          we make our four-legged friends happy.
        </p>
        <ul className="list-disc list-inside flex gap-20">
          <div className="space-y-3">
            <li>Animals Rescue</li>
            <li>Veterinary Services</li>
            <li>Quality Grooming</li>
          </div>
          <div className="space-y-3">
            <li>Owners Search</li>
            <li>Pet Overexposure</li>
            <li>Premium Forage</li>
          </div>
        </ul>
        <button className="btn bg-[#3498db] px-7 py-3 rounded-md text-white">Learn More</button>
      </div>
      <div className="w-1/2 relative">
        <img src={img1} alt="" className="h-full" />
        <img
          src={img2}
          alt=""
          className="w-2/3 absolute top-48 -left-32"
        />
      </div>
    </div>
  );
};

export default CallToAction;
