import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyDonationCampaing = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: donationCampaing = [], refetch } = useQuery({
    queryKey: ["donationCampaing"],
    queryFn: async () => {
      const res = await axiosSecure.get("/donation");
      return res.data;
    },
  });
  const handleToggleDonation = (item) => {
    axiosSecure.patch(`/donationStop/${item._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        const message =
          item.donation
            ? `${item.name} pet donation stopped!`
            : `${item.name} pet donation started!`;
        toast.success(message);
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-2xl">All Pet</h2>
        <h2 className="text-2xl">Total Pets: {donationCampaing.length}</h2>
      </div>
      <div className="overflow-x-auto my-5 rounded-t-xl">
        <table className="table">
          {/* head */}
          <thead className="bg-[#3498db]">
            <tr>
              <th>#</th>
              <th>NAME</th>
              <th>MAX DONATION</th>
              <th>DONATION PROGRESS</th>
              <th>PAUSE</th>
              <th>EDIT</th>
              <th>VIEW DONATION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {donationCampaing.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td className="text-center">{item.maxDonationAmount} $</td>
                <td>
                  <progress
                    className="progress progress-info w-56"
                    value="10"
                    max="100"
                  ></progress>
                </td>
                <td>
                  <button
                    onClick={() => handleToggleDonation(item)}
                    className={
                      item.donation
                        ? "bg-blue-300 text-white px-2 py-1 rounded-md"
                        : "bg-gray-400 text-white px-2 py-1 rounded-md"
                    }
                  >
                    {item.donation ? "Pause" : "Resume"}
                  </button>
                </td>
                <td>
                  <Link to={`/dashboard/updateDonation/${item._id}`}>
                    <button className="bg-blue-300 text-white px-2 py-1 rounded-md">
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button className="bg-blue-300 text-white px-2 py-1 rounded-md">
                    View Donation
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MyDonationCampaing;
