import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyDonation = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: myDonations = [] } = useQuery({
    queryKey: ["myDonations"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });
  const currentUserEmail = user.email;
  const currentList = myDonations.filter(
    (item) => item.email === currentUserEmail
  );
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-2xl">All Pet</h2>
        <h2 className="text-2xl">Total Pets: {currentList.length}</h2>
      </div>
      <div className="overflow-x-auto my-5 rounded-t-xl">
        <table className="table">
          {/* head */}
          <thead className="bg-[#3498db]">
            <tr>
              <th>#</th>
              <th>Pet Image</th>
              <th>Pet Name</th>
              <th >Donation Amount</th>
              <th>Refund</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {currentList.map((item, index) => (
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
                <td>{item.petName}</td>
                <td  >{item.price} $</td>
                <td>
                  <button className="bg-blue-300 text-white px-2 py-1 rounded-md">
                    Refund
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDonation;
