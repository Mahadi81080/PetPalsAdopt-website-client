import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import DonationList from "../../Components/DonationList";

const DonationCampaning = () => {
  const axiosPublic = useAxiosPublic();
  const { data: donationCampaing = [] } = useQuery({
    queryKey: ["donationCampaing"],
    queryFn: async () => {
      const res = await axiosPublic.get("/donation");
      const sortedData = res.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      return sortedData;
    },
  });
  return (
    <div className="mt-24 my-8 mx-10">
      <div className="text-center space-y-3 mb-8">
        <h2 className="text-4xl font-bold">
          Support Our Cause <br /> Donate to <span className="text-blue-300">Help Pets</span> in Need <span style={{ color: 'blue' }}>🐾</span>
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-[#5b6a76]">
          Welcome to our donation campaign page, where you can make a meaningful
          difference in the lives of pets in need. Your generosity allows us to
          provide essential care, medical treatment, and support to animals who
          are awaiting adoption or are in our care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7">
        {donationCampaing.map((list) => (
          <DonationList key={list._id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default DonationCampaning;
