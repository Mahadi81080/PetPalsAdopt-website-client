import { ToastContainer, toast } from "react-toastify";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllDonationCamp = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: allDonationCamp = [], refetch } = useQuery({
    queryKey: ["allDonationCamp"],
    queryFn: async () => {
      const res = await axiosSecure.get("/donation");
      return res.data;
    },
  });
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
  const donationProgress = allDonationCamp.map((campaign) => {
    const totalDonated = payments
      .filter((payment) => payment.petName === campaign.name)
      .reduce((sum, payment) => sum + Number(payment.price), 0);

    return {
      ...campaign,
      totalDonated,
    };
  });
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/donation/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-2xl">All Donation Campaing</h2>
        <h2 className="text-2xl">Total Campaing: {donationProgress.length}</h2>
      </div>
      <div className="overflow-x-auto my-5 rounded-t-xl">
        <table className="table">
          <thead className="bg-[#3498db]">
            <tr>
              <th>#</th>
              <th>PET NAME</th>
              <th>PET IMAGE</th>
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
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
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
                    onClick={() => handleDelete(item)}
                    className="bg-red-300 text-white px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
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

export default AllDonationCamp;
