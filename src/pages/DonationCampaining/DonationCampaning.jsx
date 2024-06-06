import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import DonationList from "../../Components/DonationList";

const DonationCampaning = () => {
  const axiosPublic = useAxiosPublic();
  const { data: donationCampaing = [] } = useQuery({
    queryKey: ["donationCampaing"],
    queryFn: async () => {
      const res = await axiosPublic.get("/donation");
      const sortedData = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return sortedData;
    },
  });
  return (
    <div className="mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {donationCampaing.map((list) => (
          <DonationList key={list._id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default DonationCampaning;
