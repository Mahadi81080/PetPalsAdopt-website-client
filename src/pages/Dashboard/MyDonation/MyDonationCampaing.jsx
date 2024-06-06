import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MyDonationCampaing = () => {
  const{user}=useAuth()
  const [axiosSecure] = useAxiosSecure();
  const [selectedPetPayments, setSelectedPetPayments] = useState([]);

  const { data: donationCampaing = [], refetch } = useQuery({
    queryKey: ["donationCampaing"],
    queryFn: async () => {
      const res = await axiosSecure.get("/donation");
      return res.data;
    },
  });
  const currentUserEmail = user.email;
  const currentList = donationCampaing.filter(
    (item) => item.email === currentUserEmail
  );
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  const handleToggleDonation = (item) => {
    axiosSecure.patch(`/donationStop/${item._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        const message = item.donation
          ? `${item.name} pet donation stopped!`
          : `${item.name} pet donation started!`;
        toast.success(message);
      }
    });
  };

  // Calculate the total donation for each campaign
  const donationProgress = currentList.map((campaign) => {
    const totalDonated = payments
      .filter((payment) => payment.petName === campaign.name)
      .reduce((sum, payment) => sum + Number(payment.price), 0);

    return {
      ...campaign,
      totalDonated,
    };
  });

  // Handle view details
  const handleViewDetails = (petName) => {
    const petPayments = payments.filter(
      (payment) => payment.petName === petName
    );
    setSelectedPetPayments(petPayments);
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-2xl">All Pet</h2>
        <h2 className="text-2xl">Total Pets: {donationProgress.length}</h2>
      </div>
      <div className="overflow-x-auto my-5 rounded-t-xl">
        <table className="table">
          <thead className="bg-[#3498db]">
            <tr>
              <th>#</th>
              <th>PET NAME</th>
              <th>MAX DONATION</th>
              <th>DONATION PROGRESS</th>
              <th>PAUSE</th>
              <th>EDIT</th>
              <th>VIEW DONATION</th>
            </tr>
          </thead>
          <tbody>
            {donationProgress.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td className="text-center">{item.maxDonationAmount} $</td>
                <td>
                  <progress
                    className="progress progress-info w-32"
                    value={item.totalDonated}
                    max={item.maxDonationAmount}
                  ></progress>
                  <span>
                    {item.totalDonated} / {item.maxDonationAmount}
                  </span>
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
                  <button
                    className="bg-blue-300 text-white px-2 py-1 rounded-md"
                    onClick={() => handleViewDetails(item.name)}
                  >
                    View Donators
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <Card>
                        <CardBody>
                          <div className="mb-4 flex items-center justify-between">
                            <Typography
                              variant="h5"
                              color="blue-gray"
                              className=""
                            >
                              All Donators
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue"
                              className="font-bold"
                            >
                              Amount
                            </Typography>
                          </div>
                          <div className="divide-y divide-gray-200">
                            {selectedPetPayments.map(
                              ({ _id, email, price, userName, userPhoto }) => (
                                <div
                                  key={_id}
                                  className="flex items-center justify-between pb-3 pt-3 last:pb-0"
                                >
                                  <div className="flex items-center gap-x-3">
                                    <Avatar
                                      size="sm"
                                      src={
                                        userPhoto
                                          ? userPhoto
                                          : `https://robohash.org/${email}.png`
                                      }
                                      alt={email}
                                    />
                                    <div>
                                      <Typography
                                        color="blue-gray"
                                        variant="h6"
                                      >
                                        {email}
                                      </Typography>
                                      <Typography variant="small" color="gray">
                                        {userName}
                                      </Typography>
                                    </div>
                                  </div>
                                  <Typography color="blue-gray" variant="h6">
                                    ${price}
                                  </Typography>
                                </div>
                              )
                            )}
                          </div>
                        </CardBody>
                      </Card>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyDonationCampaing;
